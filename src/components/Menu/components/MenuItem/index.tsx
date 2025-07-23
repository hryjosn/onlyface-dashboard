"use client"
import { Box, Collapse } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { getMenuItemStyles, ListItem } from "~/components/Menu/styles"
import { MenuItemData } from "~/components/Menu/types"
import themeConfig from "~/lib/legacy/theme/themeConfig"
import { cn } from "~/lib/utils"
import { MenuItemContent } from "./components/MenuItemContent"

export const MenuItem = ({
  item,
  level = 1,
  isCollapsed,
}: {
  item: MenuItemData
  level?: number
  isCollapsed?: boolean
}) => {
  const icon = item.icon || themeConfig.navSubItemIcon
  const [open, setOpen] = useState(false)
  const hasChildren = (item.children?.length ?? 0) > 0

  const handleClick = () => setOpen(!open)

  return (
    <>
      <ListItem
        className={cn({ active: item.isActive || open })}
        sx={getMenuItemStyles({ hasChildren, level })}
      >
        {item.link ? (
          <Link
            href={item.link}
            className={cn("flex w-full items-center", {
              "justify-center": isCollapsed,
              "justify-between gap-x-2": !isCollapsed,
            })}
          >
            <MenuItemContent
              icon={icon}
              label={item.label}
              open={open}
              hasChildren={hasChildren}
              isCollapsed={isCollapsed}
            />
          </Link>
        ) : (
          <Box
            className={cn("flex w-full items-center", {
              "justify-center": isCollapsed,
              "justify-between gap-x-2": !isCollapsed,
            })}
            onClick={handleClick}
          >
            <MenuItemContent
              icon={icon}
              label={item.label}
              open={open}
              hasChildren={hasChildren}
              isCollapsed={isCollapsed}
            />
          </Box>
        )}
      </ListItem>
      {hasChildren && !isCollapsed && (
        <Collapse in={open} className="mt-1 space-y-1">
          {item.children!.map((child, index) => (
            <MenuItem key={index} item={child} level={level + 1} />
          ))}
        </Collapse>
      )}
    </>
  )
}
