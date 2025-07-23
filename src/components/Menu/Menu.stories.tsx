import type { Meta, StoryObj } from "@storybook/nextjs"
import { Menu } from "."
import { menuData, singleLevelData } from "./constants"

const meta = {
  title: "Basic Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: menuData,
  },
}

export const SingleLevel: Story = {
  args: {
    data: singleLevelData,
  },
}
