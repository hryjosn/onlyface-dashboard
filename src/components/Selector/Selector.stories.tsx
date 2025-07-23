import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import type { Meta, StoryObj } from "@storybook/nextjs"
import { Selector } from "./Selector"

const meta = {
  title: "Basic Components/Selector",
  component: Selector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Box
      sx={{
        "& > *": {
          mt: (theme) => `${theme.spacing(6)} !important`,
          mr: (theme) => `${theme.spacing(6)} !important`,
        },
      }}
    >
      <Selector
        select
        defaultValue=""
        label="Age"
        id="select-helper"
        helperText="With label + helper text"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Selector>
    </Box>
  ),
}
export const WithError: Story = {
  render: () => (
    <Box>
      <Selector
        error
        select
        defaultValue=""
        label="Age"
        id="select-error"
        helperText="Error"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Selector>
    </Box>
  ),
}
export const WithoutLabel: Story = {
  render: () => (
    <Box>
      <Selector
        select
        defaultValue=""
        id="select-without-label"
        helperText="Without label"
        slots={{ select: undefined }}
        slotProps={{
          select: {
            displayEmpty: true,
            inputProps: { "aria-label": "Without label" },
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Selector>
    </Box>
  ),
}

export const Required: Story = {
  render: () => (
    <Box>
      <Selector
        select
        required
        defaultValue=""
        label="Age"
        id="select-required"
        helperText="Required"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Selector>
    </Box>
  ),
}
