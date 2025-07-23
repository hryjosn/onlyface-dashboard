import { cva } from "class-variance-authority"
import Link from "next/link"
import { cn } from "~/lib/utils"
import { HyperLinkProps } from "./types"

export const linkStyles = cva("transition-colors duration-200", {
  variants: {
    variant: {
      primary: "text-primary-600 hover:text-primary-700",
      secondary: "text-secondary-600 hover:text-secondary-700",
    },
    underline: {
      always: "underline",
      hover: "hover:underline",
      none: "no-underline",
    },
  },
  defaultVariants: {
    variant: "primary",
    underline: "hover",
  },
})

export const HyperLink = ({
  variant,
  underline,
  className,
  children,
  ...props
}: HyperLinkProps) => {
  return (
    <Link
      className={cn(linkStyles({ variant, underline }), className)}
      {...props}
    >
      {children}
    </Link>
  )
}
