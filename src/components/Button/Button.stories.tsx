import { Icon } from "@iconify/react"
import { Stack } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/nextjs"
import { Button } from "."

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Basic Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text", "tonal"],
      control: { type: "select" },
    },
    color: {
      options: [null, "secondary", "info", "success", "warning", "error"],
      mapping: {
        null: undefined,
      },
      control: { type: "select" },
    },
    size: {
      options: [null, "small", "medium", "large"],
      mapping: {
        null: undefined,
      },
      control: { type: "select" },
    },
    endIcon: {
      options: [null, "send", "trash", "plus", "edit"],
      mapping: {
        send: <Icon icon="tabler:send" />,
        trash: <Icon icon="tabler:trash" />,
        plus: <Icon icon="tabler:plus" />,
        edit: <Icon icon="tabler:edit" />,
        null: undefined,
      },
      control: {
        type: "select",
      },
    },
    startIcon: {
      options: [null, "send", "trash", "plus", "edit"],
      mapping: {
        send: <Icon icon="tabler:send" />,
        trash: <Icon icon="tabler:trash" />,
        plus: <Icon icon="tabler:plus" />,
        edit: <Icon icon="tabler:edit" />,
        null: undefined,
      },
      control: {
        type: "select",
      },
    },
  },
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const CommonButton: Story = {
  args: {
    children: "Info",
    variant: "contained",
    color: "primary",
    size: "medium",
  },
}

export const ButtonsWithIcon: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="contained" endIcon={<Icon icon="tabler:send" />}>
        Send
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Icon icon="tabler:trash" />}
      >
        Delete
      </Button>
    </Stack>
  ),
}
