import React from 'react'
//
import { Stack } from '@/constants/pages/whatiuse/stack'
//
import PageHeaderComponent from '@/components/page-header'
import WhatIUseTable, {
  WhatIUseNameCell,
  WhatIUseTableRow,
} from '@/components/whatiuse-table'

const columns = [
  { label: 'Name', className: 'w-1/2' },
  { label: 'Category', className: 'w-1/2' },
]

const StackPageComponent = () => {
  return (
    <main className="Stack Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="stack"
          pageDescription="Useful, efficient Tools and Resources I use"
        />

        <WhatIUseTable columns={columns}>
          {Stack.map((item, index) => (
            <WhatIUseTableRow key={index}>
              <div className="w-1/2">
                <WhatIUseNameCell name={item.name} link={item.link} />
              </div>
              <div className="w-1/2">{item.category}</div>
            </WhatIUseTableRow>
          ))}
        </WhatIUseTable>
      </div>
    </main>
  )
}

export default StackPageComponent
