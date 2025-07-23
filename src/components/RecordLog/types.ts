export interface RecordItem {
  userName: string
  count: number
  operationalStatus: OperationalStatus
  time: string
}

export enum OperationalStatus {
  Edit = "edit",
  Delete = "delete",
  Create = "create",
}
