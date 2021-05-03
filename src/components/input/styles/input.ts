import styled from "styled-components";

interface IProps {
  showStyledError?: boolean;
  showRequired?: boolean;
}

export const Input = styled.input<IProps>`
  background-color: ${({ theme }) => theme.input.backgroundColor};
  color: ${({ theme }) => theme.input.color};
  -webkit-appearance: none; /* box-shadow Iphone */
  box-shadow: 0;
  text-transform: uppercase;
  padding: 12px 20px;
  text-align: left;
  border: 1px solid transparent;
  outline: 0;
  font-weight: 350;
  transition: all 0.3s ease;
  margin-bottom: 14px;
  border-radius: 8px;
  width: 55px;
  height: 65px;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.input.hover.backgroundColor};
    box-shadow: ${({ theme }) => theme.input.hover.boxShadow};
  }

  &:focus {
    background-color: ${({ theme }) => theme.input.focus.backgroundColor};
    box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
    border-color: ${({ theme }) => theme.input.focus.borderColor};
  }
`;
