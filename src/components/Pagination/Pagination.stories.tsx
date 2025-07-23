import type { Meta, StoryObj } from "@storybook/nextjs"
import { Pagination } from "./Pagination"

const meta = {
  title: "Basic Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    count: 10,
    shape: "rounded",
    color: "primary",
  },
}
