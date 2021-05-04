export type StatusType = "process" | "wait" | "error" | "success";

export interface IVerificationCode {
  status: StatusType;
}
