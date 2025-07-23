import List from "@mui/material/List"
import { MenuItem } from "./components/MenuItem"
import { MenuItemData } from "./types"

export const Menu = ({
  data,
  isCollapsed,
}: {
  data: MenuItemData[]
  isCollapsed?: boolean
}) => {
  return (
    <List>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} isCollapsed={isCollapsed} />
      ))}
    </List>
  )
}
