import type { Meta, StoryObj } from "@storybook/nextjs"
import { useState } from "react"
import { MenuFolded } from "."
import { MenuGroupData } from "./types"

const meta = {
  title: "Layout Components/MenuFolded",
  component: MenuFolded,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MenuFolded>

export default meta
type Story = StoryObj<typeof meta>

const mockData: MenuGroupData[] = [
  {
    title: "Dashboard",
    children: [
      {
        label: "Analysis",
        icon: "tabler:chart-pie",
        children: [
          {
            label: "Sub Analysis 1",
            link: "/dashboard/analysis/sub1",
          },
          {
            label: "Sub Analysis 2",
            isActive: true,
            link: "/dashboard/analysis/sub2",
          },
        ],
      },
      {
        label: "Workbench",
        icon: "tabler:layout-dashboard",
        children: [
          {
            label: "Sub Workbench 1",
            link: "/dashboard/workbench/sub1",
          },
          {
            label: "Sub Workbench 2",
            link: "/dashboard/workbench/sub2",
          },
        ],
      },
    ],
  },
  {
    title: "System Management",
    children: [
      {
        label: "User Management",
        icon: "tabler:users",
        children: [
          {
            label: "User List",
            link: "/system/users",
          },
          {
            label: "User Roles",
            link: "/system/users/roles",
          },
        ],
      },
      {
        label: "Role Management",
        icon: "tabler:shield",
        link: "/system/roles",
      },
    ],
  },
]

export const Default: Story = {
  args: {
    data: mockData,
    isCollapsed: false,
  },
}

export const Collapsed: Story = {
  args: {
    data: mockData,
    isCollapsed: true,
  },
}

const CollapsedWithHover = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MenuFolded data={mockData} isCollapsed={!isHovered} />
    </div>
  )
}

export const HoverToExpand: Story = {
  args: {
    data: mockData,
    isCollapsed: true,
  },
  render: () => <CollapsedWithHover />,
}
