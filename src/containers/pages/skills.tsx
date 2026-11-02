'use client'

import { useState } from 'react'
//
import { motion } from 'framer-motion'
//
import { Skills } from '@/constants/pages/skills'
//
import PageHeaderComponent from '@/components/page-header'
import TruncatedTooltip from '@/components/truncated-tooltip'
import { Button } from '@/components/ui/button'
import WhatIUseTable, {
  WhatIUseNameCell,
  WhatIUseTableRow,
} from '@/components/whatiuse-table'
//
import { cn } from '@/lib/utils'
import { skillCategories, type Skill, type SkillCategory } from '@/types/skills'

const columns = [
  { label: 'Name', className: 'flex-1' },
  { label: 'Type', className: 'w-1/3' },
]

const SkillRow = ({ skill }: { skill: Skill }) => {
  return (
    <WhatIUseTableRow>
      <div className="flex min-w-0 flex-1 items-center gap-x-2">
        {/* Empty slot keeps names aligned when a skill has no icon */}
        <span className="h-4 w-4 shrink-0 [&>svg]:h-4 [&>svg]:w-4">
          {skill.icon}
        </span>
        <span className="text-nowrap">
          <WhatIUseNameCell name={skill.name} link={skill.link} />
        </span>
        {skill.note && (
          <>
            <span className="text-zinc-500 dark:text-zinc-500">{'>'}</span>
            <TruncatedTooltip text={skill.note} />
          </>
        )}
      </div>
      <div className="w-1/3">{skill.type}</div>
    </WhatIUseTableRow>
  )
}

const SkillsPageComponent = () => {
  const [tab, setTab] = useState<SkillCategory>('Frontend')

  return (
    <main className="Skills Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="skills"
          pageDescription="Skills I know, I use and currently continue to learn"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          className="no-scrollbar flex w-full max-w-max overflow-x-auto rounded-md border bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-800"
        >
          {skillCategories.map((b) => (
            <Button
              key={b}
              onClick={() => setTab(b)}
              variant={'secondary'}
              size={'sm'}
              className={cn(
                'h-8 w-full text-nowrap hover:text-zinc-500 dark:hover:text-zinc-400',
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
          {Skills[tab].map((skill) => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </WhatIUseTable>
      </div>
    </main>
  )
}

export default SkillsPageComponent
