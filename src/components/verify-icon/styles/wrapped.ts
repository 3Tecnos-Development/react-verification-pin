/* eslint-disable no-nested-ternary */
import styled, { keyframes } from "styled-components";
import { IVerificationCode } from "../../../types";

const pulse = keyframes`
    0%{transform:scaleX(1)}
    50%{transform:scale3d(1.20,1.20,1.20)}
    to{transform:scaleX(1)}
`;

export const Wrapped = styled.div<IVerificationCode>`
  background-color: ${({ theme, status }) => theme.colors[status].secondary};
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -40px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 30px;

  & svg {
    color: ${({ theme, status }) => theme.colors[status].primary};
    display: block;
    margin: auto;
    font-size: 40px;
    margin-top: 20px;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: ${({ status }) => (status === "error" ? pulse : "")};
  }
`;
