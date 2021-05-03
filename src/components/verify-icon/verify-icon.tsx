/* eslint-disable no-nested-ternary */
import React from "react";
import { BiLock, BiLockOpen } from "react-icons/bi";
import { IStatus } from "../../types";
import * as S from "./styles";

export const VerifyIcon: React.FC<IStatus> = ({ status }) => {
  return (
    <S.Wrapped status={status}>
      <S.SonarWave status={status} />
      {status === "success" ? <BiLockOpen /> : <BiLock />}
    </S.Wrapped>
  );
};
