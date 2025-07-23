import type { Meta, StoryObj } from "@storybook/nextjs"
import { HyperLink } from "."
import { Typography } from "../Typography/Typography"

const meta = {
  title: "Basic Components/HyperLink",
  component: HyperLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    underline: {
      control: "select",
      options: ["always", "hover", "none"],
    },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof HyperLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <HyperLink {...args}>Default HyperLink</HyperLink>,
}

export const CombinedExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <HyperLink href="#" variant="primary" underline="always">
        primary-underline-always
      </HyperLink>
      <HyperLink href="#" variant="secondary" underline="hover">
        secondary-underline-hover
      </HyperLink>
      <HyperLink href="#" variant="primary" underline="none">
        primary-underline-none
      </HyperLink>
      <Typography variant="h3">
        <HyperLink href="#" variant="primary" underline="hover">
          This is a hyperLink within a Typography component.
        </HyperLink>{" "}
      </Typography>
    </div>
  ),
}
