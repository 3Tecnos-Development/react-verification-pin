/* eslint-disable no-nested-ternary */
import React from "react";
import { BiLock, BiLockOpen } from "react-icons/bi";
import { IVerificationCode } from "../../types";
import * as S from "./styles";

export const VerifyIcon: React.FC<IVerificationCode> = ({ status }) => {
  return (
    <S.Wrapped status={status}>
      <S.SonarWave status={status} />
      {status === "success" ? <BiLockOpen /> : <BiLock />}
    </S.Wrapped>
  );
};
