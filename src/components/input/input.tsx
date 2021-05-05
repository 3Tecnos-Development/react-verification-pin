/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/indent */
import React, { forwardRef, useState } from "react";
import { IVerificationCode } from "src/types";
import { v4 as uuidv4 } from "uuid";
// import { isMobile } from "react-device-detect";
import * as S from "./styles/styled-input";

type internalInputType = "text" | "number";

const uuid = uuidv4();
export interface IInputProps {
  id: string;
  type?: internalInputType;
  width?: string;
  pattern?: RegExp;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<
  HTMLInputElement,
  IInputProps & IVerificationCode
>(
  (
    { type, id, width, status, pattern, onFocus, onChange, onKeyDown, onBlur },
    ref,
  ) => {
    const [value, setValue] = useState("");
    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const inputValue = (event.target as any).value;
        if (pattern) {
          const regex = new RegExp(pattern);
          if (regex.test(inputValue) || inputValue.length === 0) {
            setValue(inputValue);
            onChange(event);
          }
        } else {
          setValue(inputValue);
          onChange(event);
        }
      }
    };

    return (
      <S.StyledInput
        ref={ref}
        value={value}
        status={status}
        autoComplete={`autocomplete_off_${uuid}`} // Disable autocomplete hack
        type={type}
        name={id}
        id={id}
        width={width}
        maxLength={1}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
      />
    );
  },
);
