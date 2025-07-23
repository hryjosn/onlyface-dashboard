import { Box } from "@mui/material"
import { cn } from "~/lib/utils"
import { MenuGroup } from "./components/MenuGroup"
import { MenuGroupData } from "./types"

export const MenuFolded = ({
  isCollapsed,
  data,
}: {
  isCollapsed?: boolean
  data: MenuGroupData[]
}) => {
  return (
    <Box
      className={cn(
        "shadow-elevation scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 max-h-60 overflow-x-hidden overflow-y-auto py-5 transition-[width] duration-250 ease-in-out",
        {
          "w-[82px]": isCollapsed,
          "w-[262px]": !isCollapsed,
        }
      )}
    >
      {data.map((item, index) => (
        <MenuGroup
          key={index}
          title={item.title}
          menuGroupData={item.children}
          isCollapsed={isCollapsed}
        />
      ))}
    </Box>
  )
}
