import TabContext from "@mui/lab/TabContext"

import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import type { Meta, StoryObj } from "@storybook/nextjs"
import { SyntheticEvent, useState } from "react"

const meta = {
  title: "Basic Components/TabsNav",

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>("1")

    const handleChange = (event: SyntheticEvent, newValue: string) => {
      setValue(newValue)
    }
    return (
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="simple tabs example">
          <Tab value="1" label="Tab 1" />
          <Tab value="2" label="Tab 2" />
          <Tab disabled value="3" label="Disabled" />
        </TabList>
        <TabPanel value="1">
          <Typography>
            Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice
            sugar plum. Cotton candy wafer wafer jelly cake caramels brownie
            gummies.
          </Typography>
        </TabPanel>
        <TabPanel value="2">
          <Typography>
            Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie
            gummi bears jujubes candy canes. Chupa chups sesame snaps halvah.
          </Typography>
        </TabPanel>
        <TabPanel value="3">
          <Typography>
            Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa
            chups. Macaroon ice cream tootsie roll carrot cake gummi bears.
          </Typography>
        </TabPanel>
      </TabContext>
    )
  },
}
