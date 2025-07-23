import { Icon } from "@iconify/react"
import { InputAdornment } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/nextjs"
import { TextField } from "."

const meta = {
  title: "Basic Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel", "url"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    error: {
      control: "boolean",
      description: "Indicates whether the text field has an error",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the text field",
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
  },
}

export const Required: Story = {
  args: {
    label: "Required TextField",
    required: true,
    defaultValue: "Hello World",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled TextField",
    disabled: true,
    defaultValue: "Hello World",
  },
}

export const ReadOnly: Story = {
  args: {
    label: "Read Only TextField",
    InputProps: { readOnly: true },
    defaultValue: "Hello World",
  },
}

export const Password: Story = {
  args: {
    label: "Password TextField",
    type: "password",
  },
}

export const Number: Story = {
  args: {
    label: "Number TextField",
    type: "number",
  },
}

export const Error: Story = {
  args: {
    label: "Error TextField",
    error: true,
    defaultValue: "Error",
    helperText: "This field has an error",
  },
}

export const WithStartAdornment: Story = {
  args: {
    label: "With Start Adornment",
    placeholder: "Placeholder",
    slotProps: {
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <Icon icon="tabler:search" />
          </InputAdornment>
        ),
      },
    },
  },
}

export const WithEndAdornment: Story = {
  args: {
    label: "With End Adornment",
    placeholder: "Placeholder",
    slotProps: {
      input: {
        endAdornment: <InputAdornment position="end">KG</InputAdornment>,
      },
    },
  },
}

export const CombinedExample: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <TextField label="Default" />
      <TextField id="outlined-basic" label="Outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField required label="Required" defaultValue="Hello World" />
      <TextField disabled label="Disabled" defaultValue="Hello World" />
      <TextField label="Read Only" defaultValue="Hello World" />
      <TextField type="password" label="Password" />
      <TextField type="number" label="Number" />
      <TextField label="Label" placeholder="Placeholder" />
      <TextField label="Search field" type="search" />
      <TextField label="Helper text" helperText="Some important text" />
      <TextField label="Size" defaultValue="Small" />
      <TextField label="Size" size="medium" defaultValue="Medium" />
      <TextField
        label="Error"
        error
        defaultValue="Error"
        helperText="This field has an error"
      />
      <TextField
        label="With Start Adornment"
        placeholder="Placeholder"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="tabler:search" />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        label="With End Adornment"
        placeholder="Placeholder"
        slotProps={{
          input: {
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          },
        }}
      />
    </div>
  ),
}
