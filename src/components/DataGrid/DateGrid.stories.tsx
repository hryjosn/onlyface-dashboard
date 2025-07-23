import { Box } from "@mui/material"
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import type { Meta, StoryObj } from "@storybook/nextjs"
import { useState } from "react"
import { Button } from "~/components/Button/index"
import { Chip } from "~/components/Chip/index"
import { Typography } from "~/components/Typography/Typography"
import { DataGrid } from "."
import { rows } from "./static-data"
import { StatusObj } from "./types"

const meta = {
  title: "Basic Components/DataGrid",
  component: DataGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataGrid>

export default meta
type Story = StoryObj<typeof meta>

const statusObj: StatusObj = {
  1: { title: "current", color: "primary" },
  2: { title: "professional", color: "success" },
  3: { title: "rejected", color: "error" },
  4: { title: "resigned", color: "warning" },
  5: { title: "applied", color: "info" },
}

const columns: GridColDef[] = [
  {
    flex: 0.25,
    minWidth: 290,
    field: "full_name",
    headerName: "Name",
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params
      return (
        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Box
            sx={{
              mr: 3,
              fontSize: ".8rem",
              width: "1.875rem",
              height: "1.875rem",
              borderRadius: "50%",
              backgroundColor: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {row.full_name.charAt(0).toUpperCase()}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              noWrap
              variant="body2"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              {row.full_name}
            </Typography>
            <Typography noWrap variant="caption">
              {row.email}
            </Typography>
          </Box>
        </Box>
      )
    },
  },
  {
    flex: 0.175,
    minWidth: 120,
    headerName: "Date",
    field: "start_date",
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {params.row.start_date}
        </Typography>
      </Box>
    ),
  },
  {
    flex: 0.15,
    minWidth: 110,
    field: "salary",
    headerName: "Salary",
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {params.row.salary}
        </Typography>
      </Box>
    ),
  },
  {
    flex: 0.1,
    field: "age",
    minWidth: 80,
    headerName: "Age",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {params.row.age}
        </Typography>
      </Box>
    ),
  },
  {
    flex: 0.2,
    minWidth: 140,
    field: "status",
    headerName: "Status",
    renderCell: (params: GridRenderCellParams) => {
      const status = statusObj[params.row.status]

      return (
        <Chip
          rounded
          size="small"
          skin="light"
          color={status.color}
          label={status.title}
          sx={{ "& .MuiChip-label": { textTransform: "capitalize" } }}
        />
      )
    },
  },
  {
    flex: 0.125,
    minWidth: 140,
    field: "actions",
    headerName: "Actions",
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => {
            const row = params.row
            alert(`Name: ${row.full_name}`)
          }}
        >
          Get Name
        </Button>
      )
    },
  },
]

export const Default: Story = {
  args: {
    columns,
    rows,
    pageSizeOptions: [5, 10, 20],
  },
  render: () => {
    const [paginationModel, setPaginationModel] = useState({
      page: 0,
      pageSize: 7,
    })

    return (
      <DataGrid
        checkboxSelection
        columns={columns}
        rows={rows}
        pageSizeOptions={[5, 10, 20]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    )
  },
}
