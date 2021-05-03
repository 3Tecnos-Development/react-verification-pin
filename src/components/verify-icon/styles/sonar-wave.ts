/* eslint-disable no-nested-ternary */

import styled, { keyframes } from "styled-components";
import { Wrapped } from "./wrapped";
import { IStatus } from "../../../types";

const animation = keyframes`
    0%{
        opacity: 0.6;
    }
    100%{
        transform: scale(3);
        opacity: 0;
    }
`;

export const SonarWave = styled(Wrapped)<IStatus>`
  background-color: ${({ theme, status }) => theme.colors[status].secondary};
  display: ${({ status }) =>
    status === "error" || status === "success" ? "block" : "none"};
  animation: ${animation} 2s linear;
  position: absolute;
  top: 0;
  opacity: 0;
  z-index: -1;
`;
