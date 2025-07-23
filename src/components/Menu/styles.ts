import { styled, SxProps, Theme } from "@mui/material"
import MuiListItem, { ListItemProps } from "@mui/material/ListItem"
import { hexToRGBA } from "~/lib/legacy/hex-to-rgba"

export const ListItem = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
  width: "auto",
  padding: "8px 16px",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.active, &.active:hover": {
    backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
  },
  "&.active .MuiTypography-root": {
    fontWeight: 500,
  },
  "&:focus-visible": {
    outline: 0,
    backgroundColor: theme.palette.action.focus,
  },
}))

const PADDING_LEFT_BASE = 16
const calculatePadding = (level: number): string =>
  `${Math.max(PADDING_LEFT_BASE, level * PADDING_LEFT_BASE - PADDING_LEFT_BASE)}px`

export const getMenuItemStyles = ({
  hasChildren,
  level,
}: {
  hasChildren: boolean
  level: number
}): SxProps<Theme> => {
  if (hasChildren) {
    return {
      paddingLeft: calculatePadding(level),
      "&.active, &.active:hover": {
        backgroundColor: "action.hover",
        "&:focus-visible": {
          backgroundColor: (theme) =>
            hexToRGBA(theme.palette.primary.main, 0.24),
        },
      },
      "& .MuiListItemIcon-root": {
        marginRight: 0,
      },
    }
  }

  return {
    paddingLeft: calculatePadding(level),
    "&.active, &.active:hover": {
      boxShadow: (theme) =>
        `0px 2px 6px ${hexToRGBA(theme.palette.primary.main, 0.48)}`,
      background: (theme) =>
        `linear-gradient(72.47deg, ${theme.palette.primary.main} 22.16%, ${hexToRGBA(
          theme.palette.primary.main,
          0.7
        )} 76.47%)`,
      "&:focus-visible": {
        background: (theme) =>
          `linear-gradient(72.47deg, ${theme.palette.primary.dark} 22.16%, ${hexToRGBA(
            theme.palette.primary.dark,
            0.7
          )} 76.47%)`,
      },
      "& .MuiTypography-root, & .MuiListItemIcon-root": {
        color: "common.white",
      },
    },
    "& .MuiListItemIcon-root": {
      marginRight: 0,
    },
  }
}
