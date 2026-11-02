import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'

// Every page is prerendered at build time and served from the Worker's static
// assets: no KV, R2, D1 or Durable Objects, so there is no cache storage that
// can grow or be billed. Fresh GitHub data comes from the scheduled rebuild
// (.github/workflows/scheduled-rebuild.yml), not from runtime revalidation.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
})
