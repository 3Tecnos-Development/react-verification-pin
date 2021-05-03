/* eslint-disable no-nested-ternary */
import styled from "styled-components";
import { IStatus } from "../../../types";

export const Wrapped = styled.div<IStatus>`
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
  }
`;
