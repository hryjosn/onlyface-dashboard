import { Icon, IconifyIcon } from "@iconify/react"
import { Box, ListItemIcon } from "@mui/material"
import { Typography } from "~/components/Typography/Typography"
import themeConfig from "~/lib/legacy/theme/themeConfig"
import { cn } from "~/lib/utils"
import { MenuIcon } from "./MenuIcon"

export const MenuItemContent = ({
  icon,
  label,
  open,
  hasChildren,
  isCollapsed,
}: {
  icon: string | IconifyIcon
  label: string
  open: boolean
  hasChildren: boolean
  isCollapsed?: boolean
}) => (
  <>
    <Box className="m-0 flex items-center gap-x-2">
      <ListItemIcon
        className={cn("text-secondary", {
          "text-primary": open,
        })}
      >
        <MenuIcon icon={icon} isSubItem={icon === themeConfig.navSubItemIcon} />
      </ListItemIcon>
      {!isCollapsed && (
        <Typography
          className={cn({
            "text-primary": open,
            "text-secondary": !open,
          })}
        >
          {label}
        </Typography>
      )}
    </Box>
    {hasChildren && !isCollapsed && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: open ? "text.secondary" : "text.disabled",
        }}
      >
        <Icon
          icon={open ? "tabler:chevron-down" : "tabler:chevron-right"}
          fontSize={18}
        />
      </Box>
    )}
  </>
)
