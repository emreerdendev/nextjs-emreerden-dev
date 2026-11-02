export interface Tool {
  name: string
  link: string
  category: string
}

export type BrowserPlatform = 'Firefox' | 'Chrome'

export interface BrowserExtension {
  name: string
  link?: string
  category: string
  platforms: {
    name: BrowserPlatform
    link?: string
  }[]
}

export interface Kit {
  name: {
    title: string
    specs: string
  }
  type: string
}
