import styled, { keyframes } from "styled-components";
import { IShakeXProps } from "../types/i-shake-props";

const animation = keyframes`
    0%{transform:translateZ(0)}
    10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}
    20%,40%,60%,80%{transform:translate3d(10px,0,0)}
`;

export const AnimatedShakeX = styled.div<IShakeXProps>`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${({ shake }) => (shake ? animation : "")};
`;
