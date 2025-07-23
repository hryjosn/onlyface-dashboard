import { Stack } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/nextjs"
import { Typography } from "./Typography"

const meta: Meta = {
  title: "Basic Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj

export const Headings: Story = {
  render: () => (
    <div>
      <Typography variant="h1">Heading1</Typography>
      <Typography variant="h2">Heading2</Typography>
      <Typography variant="h3">Heading3</Typography>
      <Typography variant="h4">Heading4</Typography>
    </div>
  ),
}
export const Texts: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="button">button</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="overline">overline</Typography>
    </Stack>
  ),
}
