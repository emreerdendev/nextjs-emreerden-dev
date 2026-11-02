import type { Repo } from '@/types/repo'

const GITHUB_USER = 'emreerdendev'
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`

/** Raw shape of the fields we read from the GitHub REST repos endpoint. */
interface GitHubRepo {
  name: string
  html_url: string
  homepage: string | null
  description: string | null
  stargazers_count: number
  topics: string[]
}

/**
 * Fetch the user's repositories filtered by a topic, mapped to the shape the
 * UI needs and sorted by star count (desc). Runs at build time only: the pages
 * are static and a scheduled rebuild (GitHub Actions) refreshes the data, so
 * no runtime cache storage is needed on Cloudflare.
 *
 * Errors are not swallowed: a failed request fails the build, so the live
 * deployment keeps its repo list instead of shipping an empty page.
 */
export async function getRepos(topic: 'project' | 'study'): Promise<Repo[]> {
  const response = await fetch(REPOS_URL, {
    headers: {
      Accept: 'application/vnd.github+json',
      // Optional, but unauthenticated requests are limited to 60/hour per IP
      // and build machines share IPs, so set it as a build variable.
      ...(process.env.GITHUB_TOKEN && {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      }),
    },
    cache: 'force-cache',
  })

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}`
    )
  }

  const repos: GitHubRepo[] = await response.json()

  return repos
    .filter((repo) => repo.topics.includes(topic))
    .map((repo) => ({
      url: repo.html_url,
      live: repo.homepage ?? '',
      name: repo.name,
      desc: repo.description ?? '',
      stars: repo.stargazers_count,
      topics: repo.topics,
      img: `https://raw.githubusercontent.com/${GITHUB_USER}/${repo.name}/main/thumbnail/${repo.name}.png`,
    }))
    .sort((a, b) => b.stars - a.stars)
}
