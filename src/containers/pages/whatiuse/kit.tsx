'use client'

import { useState } from 'react'
//
import { motion } from 'framer-motion'
//
import PageHeaderComponent from '@/components/page-header'
import TruncatedTooltip from '@/components/truncated-tooltip'
import { Button } from '@/components/ui/button'
import WhatIUseTable, { WhatIUseTableRow } from '@/components/whatiuse-table'
//
import { Equipment, Gear, Setup } from '@/constants/pages/whatiuse/kit'
//
import { cn } from '@/lib/utils'
import type { Kit } from '@/types/whatiuse'

const tabs = ['Gear', 'Setup', 'Equipment'] as const
type Tab = (typeof tabs)[number]

const tabData: Record<Tab, Kit[]> = {
  Gear,
  Setup,
  Equipment,
}

const columns = [
  { label: 'Name/Specs', className: 'w-[60%]' },
  { label: 'Type', className: 'w-1/3' },
]

const KitRow = ({ item }: { item: Kit }) => {
  return (
    <WhatIUseTableRow>
      <div className="flex w-[60%] items-center gap-x-2">
        <span className="text-nowrap">{item.name.title} </span>
        <span className="text-zinc-500 dark:text-zinc-500">{'>'}</span>{' '}
        <TruncatedTooltip text={item.name.specs} />
      </div>
      <div className="w-1/3">{item.type}</div>
    </WhatIUseTableRow>
  )
}

const KitPageComponent = () => {
  const [tab, setTab] = useState<Tab>('Gear')

  return (
    <main className="Kit Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="kit"
          pageDescription="List of my Gear, Setup and Equipment"
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

        <WhatIUseTable columns={columns}>
          {tabData[tab].map((item, index) => (
            <KitRow key={index} item={item} />
          ))}
        </WhatIUseTable>
      </div>
    </main>
  )
}

export default KitPageComponent
