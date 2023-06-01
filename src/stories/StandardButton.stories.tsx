import type { Meta } from "@storybook/react";
import { StandardButton } from "../components";

const meta: Meta<typeof StandardButton> = {
  title: "StandardButton",
  component: StandardButton,
};
export default meta;

export const Primary = (props: any): React.JSX.Element => {
  return (
    <StandardButton {...props} variant="primary">
      Primary
    </StandardButton>
  );
};

export const Success = (props: any): React.JSX.Element => {
  return (
    <StandardButton {...props} variant="success">
      Success
    </StandardButton>
  );
};

export const Transparent = (props: any): React.JSX.Element => {
  return (
    <StandardButton {...props} variant="transparent">
      Transparent
    </StandardButton>
  );
};
