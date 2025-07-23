import { Typography } from "~/components/Typography/Typography"

export const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <Typography className="text-center">
      ©{copyright} by Travel Expert
    </Typography>
  )
}
