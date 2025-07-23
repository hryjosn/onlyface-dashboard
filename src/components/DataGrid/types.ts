import { ThemeColor } from "~/lib/legacy/theme/types"

export interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}
