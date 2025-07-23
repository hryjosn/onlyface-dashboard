import { Icon, IconifyIcon } from "@iconify/react"
import { cn } from "~/lib/utils"

export const MenuIcon = ({
  icon,
  isSubItem,
}: {
  icon: string | IconifyIcon
  isSubItem: boolean
}) => (
  <Icon
    icon={icon}
    fontSize={isSubItem ? 10 : 22}
    className={cn({
      "mx-[6px]": isSubItem,
    })}
  />
)
