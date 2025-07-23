import type { Meta, StoryObj } from "@storybook/nextjs"
import { RecordLog } from "."
import { OperationalStatus, RecordItem } from "./types"

const meta = {
  title: "Layout Components/RecordLog",
  component: RecordLog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RecordLog>

export default meta
type Story = StoryObj<typeof meta>

const baseRecord: Omit<RecordItem, "operationalStatus"> = {
  userName: "Jason",
  count: 1,
  time: "Today 11:15 AM",
}

export const Edit: Story = {
  args: {
    recordItem: {
      ...baseRecord,
      operationalStatus: OperationalStatus.Edit,
    },
  },
}

export const Delete: Story = {
  args: {
    recordItem: {
      ...baseRecord,
      operationalStatus: OperationalStatus.Delete,
      count: 3,
    },
  },
}

export const Create: Story = {
  args: {
    recordItem: {
      ...baseRecord,
      operationalStatus: OperationalStatus.Create,
      count: 2,
    },
  },
}

export const MultipleRecords: Story = {
  args: {
    recordItem: {
      ...baseRecord,
      operationalStatus: OperationalStatus.Edit,
      count: 5,
    },
  },
}
