import styled, { css } from "styled-components";
import { IVerificationCode } from "../../../types";

export const inputError = css`
  border-color: ${({ theme }) => theme.colors.error.primary};
  box-shadow: ${({ theme }) => theme.colors.error.secondary};
  background-color: ${({ theme }) => theme.colors.error.secondary};
  color: ${({ theme }) => theme.colors.error.primary};
`;

export const inputHover = css`
  background-color: ${({ theme }) => theme.input.hover.backgroundColor};
  box-shadow: ${({ theme }) => theme.input.hover.boxShadow};
`;

export const inputFocus = css`
  background-color: ${({ theme }) => theme.input.focus.backgroundColor};
  box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
  border-color: ${({ theme }) => theme.input.focus.borderColor};
`;

export const StyledInput = styled.input<IVerificationCode>`
  background-color: ${({ theme }) => theme.input.backgroundColor};
  color: ${({ theme }) => theme.colors.process.primary};
  -webkit-appearance: none; /* box-shadow Iphone */
  box-shadow: 0;
  text-transform: uppercase;
  padding: 12px 10px;
  text-align: center;
  border: 1px solid transparent;
  outline: 0;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-bottom: 14px;
  border-radius: 8px;
  width: 55px;
  height: 65px;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 22px;

  &:hover {
    ${({ status }) => status === "process" && inputHover}
  }

  &:focus {
    ${({ status }) => status === "process" && inputFocus}
  }

  ${({ status }) => status === "error" && inputError}
`;
