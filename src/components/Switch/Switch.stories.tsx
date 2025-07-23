import type { Meta, StoryObj } from "@storybook/nextjs"
import { Switch } from "./Switch"

const meta = {
  title: "Basic Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
}
export const NotChecked: Story = {
  args: {},
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
