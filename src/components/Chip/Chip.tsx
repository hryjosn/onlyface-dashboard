// ** MUI Imports
import MuiChip from "@mui/material/Chip"

// ** Third Party Imports
import clsx from "clsx"

// ** Types
import { ChipProps } from "./types"

// ** Hooks Imports
import useBgColor, { UseBgColorType } from "~/lib/legacy/hooks/useBgColor"

export const Chip = (props: ChipProps) => {
  // ** Props
  const { sx, skin, color, rounded } = props

  // ** Hook
  const bgColors = useBgColor()

  const colors: UseBgColorType = {
    primary: { ...bgColors.primaryLight },
    secondary: { ...bgColors.secondaryLight },
    success: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
    warning: { ...bgColors.warningLight },
    info: { ...bgColors.infoLight },
  }

  const propsToPass = { ...props }

  propsToPass.rounded = undefined

  return (
    <MuiChip
      {...propsToPass}
      variant="filled"
      className={clsx({
        "MuiChip-rounded": rounded,
        "MuiChip-light": skin === "light",
      })}
      sx={skin === "light" && color ? Object.assign(colors[color], sx) : sx}
    />
  )
}
