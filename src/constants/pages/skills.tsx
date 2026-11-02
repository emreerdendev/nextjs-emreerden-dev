import { Skill, SkillCategory } from '@/types/skills'

import {
  BiLogoGit,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { BsStripe } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoSass } from 'react-icons/io'
import { RiSupabaseFill } from 'react-icons/ri'
import {
  SiBetterauth,
  SiClickup,
  SiCloudflare,
  SiCloudflareworkers,
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiFigma,
  SiFramer,
  SiGithub,
  SiGrafana,
  SiGraphql,
  SiLangchain,
  SiLinear,
  SiModelcontextprotocol,
  SiNextdotjs,
  SiOpenai,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiRemix,
  SiSanity,
  SiSentry,
  SiShadcnui,
  SiShopify,
  SiShortcut,
  SiSlack,
  SiVercel,
  SiVuedotjs,
  SiZod,
} from 'react-icons/si'

export const Skills: Record<SkillCategory, Skill[]> = {
  Frontend: [
    {
      name: 'React',
      type: 'Library',
      link: 'https://react.dev/',
      icon: <FaReact />,
    },
    {
      name: 'Next.js',
      type: 'Framework',
      link: 'https://nextjs.org/',
      icon: <SiNextdotjs />,
    },
    {
      name: 'TypeScript',
      type: 'Language',
      link: 'https://www.typescriptlang.org/',
      icon: <BiLogoTypescript />,
    },
    {
      name: 'JavaScript',
      type: 'Language',
      link: 'https://javascript.info/',
      icon: <BiLogoJavascript />,
    },
    {
      name: 'Vue.js',
      note: 'Vue 3, Composition API, Pinia',
      type: 'Framework',
      link: 'https://vuejs.org/',
      icon: <SiVuedotjs />,
    },
    {
      name: 'HTML',
      type: 'Markup Language',
      link: 'https://www.w3schools.com/html/default.asp',
      icon: <IoLogoHtml5 />,
    },
    {
      name: 'CSS',
      type: 'Styling',
      link: 'https://css-tricks.com/almanac/',
      icon: <IoLogoCss3 />,
    },
    {
      name: 'SASS/SCSS',
      type: 'CSS Preprocessor',
      link: 'https://sass-lang.com/',
      icon: <IoLogoSass />,
    },
    {
      name: 'Tailwind CSS',
      type: 'CSS Framework',
      link: 'https://tailwindcss.com/',
      icon: <BiLogoTailwindCss />,
    },
    {
      name: 'Shadcn/UI',
      type: 'UI Components',
      link: 'https://ui.shadcn.com/',
      icon: <SiShadcnui />,
    },
    {
      name: 'Framer Motion',
      type: 'Animation',
      link: 'https://motion.dev/',
      icon: <SiFramer />,
    },
  ],
  'State/Data': [
    {
      name: 'Zustand',
      type: 'State Management',
      link: 'https://zustand-demo.pmnd.rs/',
    },
    {
      name: 'TanStack Query',
      type: 'Data Fetching',
      link: 'https://tanstack.com/query',
      icon: <SiReactquery />,
    },
    {
      name: 'React Hook Form',
      type: 'Forms',
      link: 'https://react-hook-form.com/',
      icon: <SiReacthookform />,
    },
    {
      name: 'Zod',
      type: 'Validation',
      link: 'https://zod.dev/',
      icon: <SiZod />,
    },
    {
      name: 'GraphQL',
      type: 'Query Language',
      link: 'https://graphql.org/',
      icon: <SiGraphql />,
    },
  ],
  'Backend/DB': [
    {
      name: 'Next.js API Routes',
      type: 'API',
      link: 'https://nextjs.org/docs/app/api-reference/file-conventions/route',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Supabase',
      type: 'Backend Platform',
      link: 'https://supabase.com/',
      icon: <RiSupabaseFill />,
    },
    {
      name: 'Prisma',
      type: 'ORM',
      link: 'https://www.prisma.io/',
      icon: <SiPrisma />,
    },
    {
      name: 'Drizzle ORM',
      type: 'ORM',
      link: 'https://orm.drizzle.team/',
      icon: <SiDrizzle />,
    },
    {
      name: 'Cloudflare Workers',
      note: 'Workers, D1, KV',
      type: 'Serverless & Storage',
      link: 'https://workers.cloudflare.com/',
      icon: <SiCloudflareworkers />,
    },
    {
      name: 'Better Auth',
      type: 'Authentication',
      link: 'https://www.better-auth.com/',
      icon: <SiBetterauth />,
    },
    {
      name: 'Sanity',
      type: 'Headless CMS',
      link: 'https://www.sanity.io/',
      icon: <SiSanity />,
    },
  ],
  Shopify: [
    {
      name: 'Remix',
      type: 'Framework',
      link: 'https://remix.run/',
      icon: <SiRemix />,
    },
    {
      name: 'Theme App Extensions',
      type: 'App Extensions',
      link: 'https://shopify.dev/docs/apps/build/online-store/theme-app-extensions',
      icon: <SiShopify />,
    },
    {
      name: 'Liquid',
      type: 'Template Language',
      link: 'https://shopify.dev/docs/api/liquid',
      icon: <SiShopify />,
    },
    {
      name: 'Polaris',
      type: 'Design System',
      link: 'https://polaris.shopify.com/',
      icon: <SiShopify />,
    },
    {
      name: 'Metafields',
      type: 'Custom Data',
      link: 'https://shopify.dev/docs/apps/build/custom-data',
      icon: <SiShopify />,
    },
    {
      name: 'Admin/Storefront GraphQL API',
      type: 'API',
      link: 'https://shopify.dev/docs/api',
      icon: <SiShopify />,
    },
  ],
  Mobile: [
    {
      name: 'React Native',
      type: 'Framework',
      link: 'https://reactnative.dev/',
      icon: <FaReact />,
    },
    {
      name: 'Expo',
      type: 'Platform',
      link: 'https://expo.dev/',
      icon: <SiExpo />,
    },
    {
      name: 'Nativewind',
      type: 'Styling',
      link: 'https://www.nativewind.dev/',
    },
  ],
  AI: [
    {
      name: 'OpenAI API',
      type: 'API',
      link: 'https://platform.openai.com/docs',
      icon: <SiOpenai />,
    },
    {
      name: 'Langchain',
      type: 'Framework',
      link: 'https://js.langchain.com/docs/get_started/introduction/',
      icon: <SiLangchain />,
    },
    {
      name: 'AI-Assisted Development',
      note: 'Claude Code, Cursor',
      type: 'Workflow',
    },
    {
      name: 'Project Rules',
      note: 'CLAUDE.md',
      type: 'Workflow',
    },
    {
      name: 'MCP Servers',
      note: 'e.g. Playwright for automated UI verification',
      type: 'Protocol',
      link: 'https://modelcontextprotocol.io/',
      icon: <SiModelcontextprotocol />,
    },
    {
      name: 'Critical Review of AI-Generated Code',
      type: 'Practice',
    },
  ],
  Integrations: [
    {
      name: 'Stripe',
      type: 'Payments',
      link: 'https://stripe.com/',
      icon: <BsStripe />,
    },
    {
      name: 'GitHub API',
      type: 'API',
      link: 'https://docs.github.com/en/rest',
      icon: <SiGithub />,
    },
    {
      name: 'OAuth',
      type: 'Authentication',
      link: 'https://oauth.net/2/',
    },
  ],
  'DevOps & Monitoring': [
    {
      name: 'Git/GitHub',
      type: 'Version Control',
      link: 'https://www.w3schools.com/git/default.asp',
      icon: <BiLogoGit />,
    },
    {
      name: 'Docker',
      type: 'Containers',
      link: 'https://www.docker.com/',
      icon: <SiDocker />,
    },
    {
      name: 'Vercel',
      type: 'Hosting',
      link: 'https://vercel.com/',
      icon: <SiVercel />,
    },
    {
      name: 'Cloudflare',
      type: 'CDN & Edge',
      link: 'https://www.cloudflare.com/',
      icon: <SiCloudflare />,
    },
    {
      name: 'Sentry',
      type: 'Error Monitoring',
      link: 'https://sentry.io/',
      icon: <SiSentry />,
    },
    {
      name: 'Grafana',
      type: 'Observability',
      link: 'https://grafana.com/',
      icon: <SiGrafana />,
    },
  ],
  Tools: [
    {
      name: 'Figma',
      type: 'Design',
      link: 'https://www.figma.com/',
      icon: <SiFigma />,
    },
    {
      name: 'Slack',
      type: 'Communication',
      link: 'https://slack.com/',
      icon: <SiSlack />,
    },
    {
      name: 'Linear',
      type: 'Project Management',
      link: 'https://linear.app/',
      icon: <SiLinear />,
    },
    {
      name: 'ClickUp',
      type: 'Project Management',
      link: 'https://clickup.com/',
      icon: <SiClickup />,
    },
    {
      name: 'Shortcut',
      note: 'Agile/Scrum',
      type: 'Project Management',
      link: 'https://www.shortcut.com/',
      icon: <SiShortcut />,
    },
  ],
}
