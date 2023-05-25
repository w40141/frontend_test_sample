import type { Meta } from "@storybook/react";
import { CustomButton } from "../../app/components/CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "StyledButton",
  component: CustomButton,
};
export default meta;

export const Primary = (props: any): React.JSX.Element => {
  return (
    <CustomButton {...props} variant="primary">
      Primary
    </CustomButton>
  );
};

export const Success = (props: any): React.JSX.Element => {
  return (
    <CustomButton {...props} variant="success">
      Success
    </CustomButton>
  );
};

export const Transparent = (props: any): React.JSX.Element => {
  return (
    <CustomButton {...props} variant="transparent">
      Transparent
    </CustomButton>
  );
};
