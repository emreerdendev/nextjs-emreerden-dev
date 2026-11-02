export const skillCategories = [
  'Frontend',
  'State/Data',
  'Backend/DB',
  'Shopify',
  'Mobile',
  'AI',
  'Integrations',
  'DevOps & Monitoring',
  'Tools',
] as const

export type SkillCategory = (typeof skillCategories)[number]

export interface Skill {
  name: string
  note?: string
  type: string
  link?: string
  icon?: React.ReactNode
}
