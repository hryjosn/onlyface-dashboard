import type { Meta, StoryObj } from "@storybook/nextjs"
import { Chip } from "./Chip"

const meta = {
  title: "Basic Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Rounded: Story = {
  render: () => (
    <div className="space-x-2">
      <Chip rounded label="Primary" skin="light" color="primary" />
      <Chip rounded label="Secondary" skin="light" color="secondary" />
      <Chip rounded label="Success" skin="light" color="success" />
      <Chip rounded label="Error" skin="light" color="error" />
      <Chip rounded label="Warning" skin="light" color="warning" />
      <Chip rounded label="Info" skin="light" color="info" />
    </div>
  ),
}
