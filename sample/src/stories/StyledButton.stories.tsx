import type { Meta } from "@storybook/react";
import { StyledButton } from "../app/components/StyledButton";

const meta: Meta<typeof StyledButton> = {
  title: "StyledButton",
  component: StyledButton,
};
export default meta;

export const Primary = (props: any): React.JSX.Element => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  );
};

export const Success = (props: any): React.JSX.Element => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};

export const Transparent = (props: any): React.JSX.Element => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  );
};
