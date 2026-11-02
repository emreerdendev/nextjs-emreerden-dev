import { Experience } from '@/types/experience'

export const ExperienceData: Experience[] = [
  {
    name: 'Popupsmart',
    icon: '/assets/icons/popupsmart.svg',
    path: 'https://popupsmart.com/',
    date: '21 February 2024 - 27 December 2024',
    location: 'Ankara, Turkey',
    workType: 'Hybrid',
    positions: [
      {
        title: 'Software Developer',
        date: '22 July 2024 - 27 December 2024',
        projects: [
          {
            name: 'HR Assistant AI',
            path: 'https://hrassistantai.com/',
            description:
              'HR Assistant AI is an AI-powered tool designed to automate and streamline various HR tasks using artificial intelligence. It helps manage in-house questions with automated answers and reduce repetitive tasks.',
            whatIDid: [
              'Built authentication flows (forgot, reset and update password) and billing endpoints with Next.js API Routes.',
              'Integrated Stripe for payment processing.',
              'Developed reusable React hooks for animations, error handling, form validation and modal management.',
              'Built responsive UI for Auth, Billing, Profile and Dashboard pages.',
            ],
            stack: [
              'Next.js',
              'Next Auth',
              'TypeScript',
              'Redux / Redux Toolkit',
              'Zustand',
              'Tailwind CSS',
              'shadcn/ui package',
              'Langchain',
              'Prisma',
              'Stripe',
            ],
          },
          {
            name: 'LiveChatAI',
            path: 'https://livechatai.com/',
            description:
              'LiveChatAI, your ultimate AI bot architect. Harnessing the capabilities of ChatGPT, it tailors your data into an interactive chat widget for your website.',
            whatIDid: [
              'Built Next.js API endpoints for AI chat actions and managed database changes with Prisma (migrations, schema updates).',
              'Implemented data fetching and state management with TanStack Query (mutations), Zustand and React Context.',
              'Redesigned UX flows for user deletion and AI actions.',
              'Delivered responsive UI improvements and fixed production bugs across the dashboard.',
            ],
            stack: [
              'Next.js',
              'Next Auth',
              'TypeScript',
              'Redux / Redux Toolkit',
              'Zustand',
              'React-Query / Tanstack',
              'Tailwind CSS / SASS',
              'Langchain',
              'Prisma',
              'Stripe',
              'Posthog',
            ],
          },
        ],
      },
      {
        title: 'Intern Software Developer',
        date: '21 February 2024 - 22 July 2024',
        projects: [
          {
            name: 'Website Audit AI',
            path: 'https://websiteauditai.com/',
            description: 'AI-Powered Website Audit and CRO & UX Analysis',
            whatIDid: [
              `<b>Developed the entire project by myself</b>`,
              'Implemented user authentication and data storage with Supabase.',
              'Integrated OpenAI Vision API to analyze websites and generate audit insights through prompt engineering.',
              'Integrated Stripe payments and built PDF export for audit reports with Puppeteer.',
              'Developed a fully responsive UI.',
            ],
            stack: [
              'Next.js',
              'TypeScript',
              'Zustand',
              'Tailwind CSS',
              'shadcn/ui package',
              'Supabase',
              'OpenAI API',
              'Langchain',
              'Stripe',
              'Vercel',
              'Puppeteer',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Analyzify',
    icon: '/assets/icons/analyzify.png',
    path: 'https://analyzify.com/',
    date: '24 March 2025 - 15 May 2026',
    location: 'Tallinn, Harjumaa, Estonia',
    workType: 'Remote',
    positions: [
      {
        title: 'Frontend Developer',
        projects: [
          {
            name: 'Jens Hansen',
            path: 'https://www.jenshansen.com/',
            description:
              'Custom Shopify theme & interactive product configurator for a jeweller (maker of the LOTR "One Ring").',
            whatIDid: [
              'Built a 3D multi-step Ring Builder with an interactive WebGL/GLTF viewer - real-time model switching, live engraving preview, variant matching and pricing.',
              'Engineered a custom engraving system with an auto font-scaling fit engine and a Tengwar (Elvish) transcription module.',
              'Designed a unified Stone Quality selector (color/clarity from quality tiers) and multi-region ring sizing (UK/US/EU) with conversion and validation, all compatible with Shopify variants.',
              'Built advanced product-variant UX (dynamic pricing, out-of-stock handling, tooltips, metal-type detection) with responsive, mobile-first layouts from Figma.',
            ],
          },
          {
            name: 'Risify',
            path: 'https://apps.shopify.com/risify',
            description:
              'SEO & Structured-Data Shopify App (Admin App + Storefront Theme Extensions).',
            whatIDid: [
              'Developed core feature UIs - table management, navigation, and billing & SEO audit dashboards.',
              'Shipped an AI-powered Design Customization feature for automated storefront styling with live previews.',
              'Built a Schema.org JSON-LD engine with live preview, Rich Results testing, and storefront extensions for SEO injection.',
              'Built type-safe GraphQL flows (Code Generator), Shopify metafield management, and an accessible design-system component library reused across modules.',
              'Established a comprehensive unit testing suite (Mocking for Shopify & internal APIs) and drove performance optimizations — memoization, reduced query filtering,  faster metafield saving.',
            ],
          },
        ],
      },
    ],
  },
]
