'use client'

import { useState } from 'react'
//
import { motion } from 'framer-motion'
import { FaChrome, FaFirefoxBrowser } from 'react-icons/fa6'
//
import { Browser } from '@/constants/pages/whatiuse/browser'
import { VSCode } from '@/constants/pages/whatiuse/vscode'
//
import PageHeaderComponent from '@/components/page-header'
import { Button } from '@/components/ui/button'
import WhatIUseTable, {
  WhatIUseNameCell,
  WhatIUseTableRow,
} from '@/components/whatiuse-table'
//
import { cn } from '@/lib/utils'
import type { BrowserExtension } from '@/types/whatiuse'

const tabs = ['Browser', 'Code'] as const
type Tab = (typeof tabs)[number]

const browserColumns = [
  { label: 'Name', className: 'flex-1' },
  { label: 'Category', className: 'w-1/3' },
  { label: 'Platform', className: 'w-14 shrink-0 text-right' },
]

// Same widths as the Browser table (with an empty slot where Platform sits)
// so the Category column stays in place when switching tabs.
const codeColumns = [
  { label: 'Name', className: 'flex-1' },
  { label: 'Category', className: 'w-1/3' },
  { label: '', className: 'w-14 shrink-0' },
]

const platformIcons = {
  Firefox: FaFirefoxBrowser,
  Chrome: FaChrome,
}

const PlatformCell = ({
  platforms,
}: {
  platforms: BrowserExtension['platforms']
}) => {
  return (
    <div className="flex items-center justify-end gap-x-4">
      {platforms.map((platform) => {
        const Icon = platformIcons[platform.name]
        return platform.link ? (
          <a
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform.name}
            title={platform.name}
            className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
          >
            <Icon className="h-4 w-4" />
          </a>
        ) : (
          <span
            key={platform.name}
            aria-label={platform.name}
            title={platform.name}
          >
            <Icon className="h-4 w-4" />
          </span>
        )
      })}
    </div>
  )
}

const ExtensionsPageComponent = () => {
  const [tab, setTab] = useState<Tab>('Browser')

  return (
    <main className="Extensions Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="extensions"
          pageDescription="Useful and efficient Browser and Code Editor Extensions I use"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          className="flex w-full max-w-72 rounded-md border bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-800"
        >
          {tabs.map((b) => (
            <Button
              key={b}
              onClick={() => setTab(b)}
              variant={'secondary'}
              size={'sm'}
              className={cn(
                'h-8 w-full hover:text-zinc-500 dark:hover:text-zinc-400',
                {
                  'bg-white hover:bg-white hover:text-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-50':
                    tab === b,
                }
              )}
            >
              {b}
            </Button>
          ))}
        </motion.div>

        {tab === 'Browser' ? (
          <WhatIUseTable columns={browserColumns}>
            {Browser.map((item, index) => (
              <WhatIUseTableRow key={index}>
                <div className="flex-1">
                  <WhatIUseNameCell name={item.name} link={item.link} />
                </div>
                <div className="w-1/3">{item.category}</div>
                <div className="w-14 shrink-0">
                  <PlatformCell platforms={item.platforms} />
                </div>
              </WhatIUseTableRow>
            ))}
          </WhatIUseTable>
        ) : (
          <WhatIUseTable columns={codeColumns}>
            {VSCode.map((item, index) => (
              <WhatIUseTableRow key={index}>
                <div className="flex-1">
                  <WhatIUseNameCell name={item.name} link={item.link} />
                </div>
                <div className="w-1/3">{item.category}</div>
                <div className="w-14 shrink-0" />
              </WhatIUseTableRow>
            ))}
          </WhatIUseTable>
        )}
      </div>
    </main>
  )
}

export default ExtensionsPageComponent
