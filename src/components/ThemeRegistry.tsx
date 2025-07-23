"use client"

import { ThemeProvider, createTheme } from "@mui/material"
import { ReactNode } from "react"
import { initialSettings, themeOptions } from "~/lib/legacy/theme/themeOptions"

const theme = createTheme(themeOptions(initialSettings, "light"))

export function ThemeRegistry({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
