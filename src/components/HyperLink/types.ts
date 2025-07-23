import { VariantProps } from "class-variance-authority"
import { LinkProps } from "next/link"
import { linkStyles } from "."

export interface HyperLinkProps
  extends LinkProps,
    VariantProps<typeof linkStyles> {
  className?: string
  children?: React.ReactNode
}
