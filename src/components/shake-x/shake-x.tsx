import React from "react";
import * as S from "./styles";
import { IShakeXProps } from "./types/i-shake-props";

export const ShakeX: React.FC<IShakeXProps> = ({ shake, children }) => {
  return <S.AnimatedShakeX shake={shake}>{children}</S.AnimatedShakeX>;
};
