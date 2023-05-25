import { css, styled } from "styled-components";

const variants = {
  primary: {
    color: "#ffffff",
    backgroundColor: "#1D3461",
    border: "none",
  },
  success: {
    color: "#ffffff",
    backgroundColor: "#5AB203",
    border: "none",
  },
  transparent: {
    color: "#111111",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
};

interface StyledButtonProps {
  variant: keyof typeof variants;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    const style = variants[variant];
    return css`
      color: ${style.color},
      backgroundColor: ${style.backgroundColor},
      border: ${style.border},
    `;
  }}

  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
