/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import { Input, ShakeX, VerifyIcon } from "./components";
import { ThemeType, useTheme } from "./theme";
import { IVerificationCode, StatusType } from "./types";

export { StatusType };

const KEY_CODE = {
  backspace: 8,
  left: 37,
  right: 39,
};

type inputType = "number" | "text" | "numberAndText";

const pattern = {
  number: /^[0-9]+$/,
  text: /^[a-zA-Z]+$/,
  numberAndText: /^[A-Za-z0-9]+$/,
};

interface IVerificationCodeProps extends IVerificationCode {
  theme?: ThemeType;
  type: inputType;
  inputsNumber: number;
  title?: string;
  subTitle: string;
  autoFocus?: boolean;
  onFinish?: (code: string) => void;
}

export const VerificationCode: React.FC<IVerificationCodeProps> = ({
  theme = "easyPeasy",
  type,
  inputsNumber,
  title,
  subTitle,
  autoFocus = true,
  status,
  onFinish,
}) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const { themeSchema } = useTheme(theme);
  const [internalStatus, setInternalStatus] = useState<StatusType>("process");

  useEffect(() => {
    setInternalStatus(status);
  }, [status]);

  useEffect(() => {
    if (autoFocus) {
      (inputsRef.current[0] as any).focus();
    }
  }, []);

  const getIndexFromId = (id: string): number => parseInt(id.split("-")[1], 10);

  const handleInputKeyDown = (e: any) => {
    const { id, value } = e.target;
    const index = getIndexFromId(id);
    if (
      (e.keyCode === KEY_CODE.backspace && value.length === 0) ||
      e.keyCode === KEY_CODE.left
    ) {
      previous(index);
    } else if (e.keyCode === KEY_CODE.right) {
      next(index);
    }
  };

  const getCode = () => {
    const values: string[] = [];
    inputsRef.current.forEach(({ value }: any) => {
      values.push(value);
    });
    return values.join("");
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    const index = getIndexFromId(id);
    e.preventDefault();

    setInternalStatus("process");

    if (value.length > 0) {
      const code = getCode();
      if (onFinish && code.length === inputsNumber) {
        onFinish(code);
      } else {
        next(index);
      }
    }
  };

  const next = (inputIndex: number) => {
    if (inputIndex < inputsNumber - 1) {
      (inputsRef.current[inputIndex + 1] as any).focus();
    }
  };

  const previous = (inputIndex: number) => {
    if (inputIndex > 0) {
      (inputsRef.current[inputIndex - 1] as any).focus();
    }
  };

  return (
    <ThemeProvider theme={themeSchema}>
      <S.Container>
        <VerifyIcon status={internalStatus} />
        {title && <S.Title>{title}</S.Title>}
        {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}

        <S.Middle>
          <ShakeX shake={status === "error"}>
            {Array.from({ length: inputsNumber }, (_, k) => k).map((n) => {
              return (
                <Input
                  status={internalStatus}
                  id={`inputVC-${n}`}
                  ref={(el) => {
                    inputsRef.current[n] = el!;
                  }}
                  pattern={pattern[type]}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                />
              );
            })}
          </ShakeX>
        </S.Middle>
      </S.Container>
    </ThemeProvider>
  );
};
