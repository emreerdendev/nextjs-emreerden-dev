import type { Metadata } from 'next'
import React from 'react'
//
import ExtensionsComponent from '@/containers/pages/whatiuse/extensions'

export const metadata: Metadata = {
  title: 'Extensions - Emre Erden',
  description: "Emre Erden's Browser and Code Editor Extensions",
}

const ExtensionsPage = () => {
  return <ExtensionsComponent />
}

export default ExtensionsPage
