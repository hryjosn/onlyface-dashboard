import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import FormHelperText from "@mui/material/FormHelperText"
import FormLabel from "@mui/material/FormLabel"
import type { Meta, StoryObj } from "@storybook/nextjs"
import { ChangeEvent, useState } from "react"
import { Checkbox } from "./Checkbox"
const meta = {
  title: "Basic Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxesBasic: Story = {
  render: () => (
    <FormGroup row>
      <FormControlLabel
        label="Checked"
        control={<Checkbox defaultChecked name="basic-checked" />}
      />
      <FormControlLabel
        label="Unchecked"
        control={<Checkbox name="basic-unchecked" />}
      />
      <FormControlLabel
        disabled
        label="Disabled Checked"
        control={<Checkbox defaultChecked name="basic-disabled-checked" />}
      />
      <FormControlLabel
        disabled
        label="Disabled Unchecked"
        control={<Checkbox name="basic-disabled-unchecked" />}
      />
    </FormGroup>
  ),
}
export const CheckboxesColors: Story = {
  render: () => (
    <FormGroup row>
      <FormControlLabel
        label="Primary"
        control={<Checkbox defaultChecked name="color-primary" />}
      />
      <FormControlLabel
        label="Secondary"
        control={
          <Checkbox defaultChecked name="color-secondary" color="secondary" />
        }
      />
      <FormControlLabel
        label="Success"
        control={
          <Checkbox defaultChecked name="color-success" color="success" />
        }
      />
      <FormControlLabel
        label="Error"
        control={<Checkbox defaultChecked name="color-error" color="error" />}
      />
      <FormControlLabel
        label="Warning"
        control={
          <Checkbox defaultChecked name="color-warning" color="warning" />
        }
      />
      <FormControlLabel
        label="Info"
        control={<Checkbox defaultChecked name="color-info" color="info" />}
      />
    </FormGroup>
  ),
}
export const Sizes: Story = {
  render: () => (
    <FormGroup row>
      <FormControlLabel
        label="Small"
        sx={{ "& svg": { height: 20, width: 20 } }}
        control={<Checkbox defaultChecked name="size-small" />}
      />
      <FormControlLabel
        label="Default"
        control={<Checkbox defaultChecked name="size-default" />}
      />
    </FormGroup>
  ),
}
interface StateType {
  [key: string]: boolean
}

export const ShowError: Story = {
  render: () => {
    const [state, setState] = useState<StateType>({
      gilad: true,
      jason: false,
      antoine: false,
    })
    // ** Vars
    const { gilad, jason, antoine } = state
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [event.target.name]: event.target.checked })
    }
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl sx={{ mt: 4, mr: 4 }}>
          <FormLabel>Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Gilad Gray"
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
            />
            <FormControlLabel
              label="Jason Killian"
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
            />
            <FormControlLabel
              label="Antoine Llorca"
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
            />
          </FormGroup>
          <FormHelperText
            sx={{ mx: 0, fontSize: (theme) => theme.typography.body2.fontSize }}
          >
            Be careful
          </FormHelperText>
        </FormControl>
        <FormControl required error={error} sx={{ mt: 4 }}>
          <FormLabel>Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Gilad Gray"
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
            />
            <FormControlLabel
              label="Jason Killian"
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
            />
            <FormControlLabel
              label="Antoine Llorca"
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
            />
          </FormGroup>
          <FormHelperText
            sx={{ mx: 0, fontSize: (theme) => theme.typography.body2.fontSize }}
          >
            You can display an error
          </FormHelperText>
        </FormControl>
      </Box>
    )
  },
}
