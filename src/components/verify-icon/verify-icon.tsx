/* eslint-disable no-nested-ternary */
import React from "react";
import { BiLock, BiLockOpen } from "react-icons/bi";
import { IVerificationPin } from "../../types";
import * as S from "./styles";

export const VerifyIcon: React.FC<IVerificationPin> = ({ status }) => {
  return (
    <>
      <S.Spinner status={status} />
      <S.Wrapped status={status}>
        <S.SonarWave status={status} />
        {status === "success" ? <BiLockOpen /> : <BiLock />}
      </S.Wrapped>
    </>
  );
};
