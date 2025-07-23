import { IconifyIcon } from "@iconify/react"

export interface MenuItemData {
  label: string
  icon?: string | IconifyIcon
  children?: MenuItemData[]
  link?: string
  isActive?: boolean
}
