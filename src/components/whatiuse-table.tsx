'use client'

import React from 'react'
//
import { motion } from 'framer-motion'
//
import { cn } from '@/lib/utils'

type Column = {
  label: string
  className: string
}

type TableProps = {
  columns: Column[]
  children: React.ReactNode
}

/** Bordered table shell shared by the What I Use pages. Each column's
 * className sets its width so header and row cells line up. */
const WhatIUseTable = ({ columns, children }: TableProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 5 * 0.1 }}
      className="w-full overflow-auto"
    >
      <div className="w-full min-w-max rounded-lg border dark:border-zinc-700">
        <div className="flex h-11 w-full select-none items-center gap-x-4 border-b px-4 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
          {columns.map((column) => (
            <div key={column.label} className={column.className}>
              {column.label}
            </div>
          ))}
        </div>

        {children}
      </div>
    </motion.div>
  )
}

type RowProps = {
  children: React.ReactNode
  className?: string
}

export const WhatIUseTableRow = ({ children, className }: RowProps) => {
  return (
    <div
      className={cn(
        'flex h-11 w-full items-center gap-x-4 border-b px-4 text-sm text-zinc-950 last:border-b-0 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800',
        className
      )}
    >
      {children}
    </div>
  )
}

type NameCellProps = {
  name: string
  link?: string
}

/** Item name, rendered as an external link only when a link exists. */
export const WhatIUseNameCell = ({ name, link }: NameCellProps) => {
  if (!link) return <span>{name}</span>

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-offset-4 transition-colors hover:text-zinc-500 hover:underline dark:hover:text-zinc-400"
    >
      {name}
    </a>
  )
}

export default WhatIUseTable
