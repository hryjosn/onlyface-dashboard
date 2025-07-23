"use client"
import { TextFieldProps } from "@mui/material/TextField"
import { TextFieldStyled } from "./styles"

const TextField = (props: TextFieldProps) => {
  const { size = "small", variant = "filled", slotProps, ...rest } = props
  return (
    <TextFieldStyled
      size={size}
      {...rest}
      variant={variant}
      slotProps={{
        ...slotProps,
        inputLabel: {
          ...(slotProps?.inputLabel || {}),
          shrink: true,
        },
      }}
    />
  )
}

export { TextField }
