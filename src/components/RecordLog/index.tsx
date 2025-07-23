import { Box } from "@mui/material"
import { Typography } from "~/components/Typography/Typography"
import { OperationalStatus, RecordItem } from "./types"

const statusColorMap = {
  [OperationalStatus.Edit]: "text-warning-700",
  [OperationalStatus.Delete]: "text-danger-500",
  [OperationalStatus.Create]: "text-success-700",
}

export const RecordLog = ({ recordItem }: { recordItem: RecordItem }) => {
  const { userName, operationalStatus, time, count } = recordItem
  const recordText = count === 1 ? "record" : "records"

  return (
    <Box>
      <Typography variant="h5">
        {`${userName} `}
        <span className={statusColorMap[operationalStatus]}>
          {operationalStatus}
        </span>
        {` ${count}`} {recordText} in User
      </Typography>
      <Typography
        sx={{
          color: "text.disabled",
        }}
      >
        {time}
      </Typography>
    </Box>
  )
}
