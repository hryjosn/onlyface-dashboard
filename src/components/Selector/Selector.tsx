// ** MUI Imports
import { TextFieldProps } from "@mui/material/TextField"
import { TextFieldStyled } from "~/components/TextField/styles"

export const Selector = (props: TextFieldProps) => {
  // ** Props
  const { size = "small", ref, ...rest } = props

  return (
    <TextFieldStyled
      size={size}
      inputRef={ref}
      {...rest}
      variant="filled"
      slotProps={{ inputLabel: { shrink: true } }}
    />
  )
}
