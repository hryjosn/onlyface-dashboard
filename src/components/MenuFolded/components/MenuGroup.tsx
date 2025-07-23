import Image from "next/image"
import { Menu } from "~/components/Menu"
import { MenuItemData } from "~/components/Menu/types"
import { Typography } from "~/components/Typography/Typography"

export const MenuGroup = ({
  title,
  menuGroupData,
  isCollapsed,
}: {
  title: string
  menuGroupData: MenuItemData[]
  isCollapsed?: boolean
}) => {
  return (
    <>
      {isCollapsed ? (
        <div className="flex items-center justify-center px-6 pt-2 pb-1">
          <Image src="/separator.svg" alt={title} width={22} height={22} />
        </div>
      ) : (
        <Typography
          variant="subtitle2"
          sx={{
            color: "text.disabled",
            marginLeft: "16px",
          }}
        >
          {title}
        </Typography>
      )}

      <Menu data={menuGroupData} isCollapsed={isCollapsed} />
    </>
  )
}
