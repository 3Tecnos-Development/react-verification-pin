export type StatusType = "process" | "wait" | "error" | "success";

export interface IVerificationPin {
  status: StatusType;
}
