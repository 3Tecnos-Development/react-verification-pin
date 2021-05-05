import styled, { keyframes } from "styled-components";
import { IVerificationPin } from "../../../types";

const animation = keyframes`
    0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

export const Spinner = styled.div<IVerificationPin>`
  position: absolute;
  display: ${({ status }) => (status === "wait" ? "inline-block" : "none")};
  width: 80px;
  height: 80px;
  top: -8px;
  left: 50%;
  margin-left: -48px;
  z-index: 999;
  opacity: 0.5;

  &:after {
    content: " ";
    display: block;
    width: 80px;
    height: 80px;
    margin: 8px;
    border-radius: 50%;
    border: 2px solid;
    border-color: ${({ theme, status }) => theme.colors[status].primary}
      transparent ${({ theme, status }) => theme.colors[status].primary}
      transparent;
    animation: ${animation} 1s linear infinite;
  }
`;
