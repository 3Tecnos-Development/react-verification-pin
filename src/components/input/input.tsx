import React, { forwardRef } from "react";
// import { isMobile } from "react-device-detect";
import * as S from "./styles/input";

type internalInputType = "text" | "number";

export interface IInputProps {
  id: string;
  type?: internalInputType;
  width?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ type, id, width, onFocus, onChange, onKeyDown, onBlur }, ref) => {
    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <S.Input
        ref={ref}
        autoComplete="off"
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
