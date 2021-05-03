export type StatusType = "process" | "wait" | "error" | "success";

export interface IStatus {
  status: StatusType;
}
