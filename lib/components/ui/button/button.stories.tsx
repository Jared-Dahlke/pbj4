import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
    size: {
      control: { type: "radio" },
    },
    isPill: {
      control: { type: "boolean" },
    },
  },
} as Meta;

export const Component = (args: ButtonProps) => (
  <Button {...args}>Default</Button>
);

Component.args = {
  variant: "default",
  size: "default",
  isPill: false,
};

// export const Variants = (args: ButtonProps) => (
//   <div className="flex flex-col space-y-4 mt-8">
//     <div>
//       <Button {...args} variant="outlined">
//         Outlined
//       </Button>
//     </div>
//     <div>
//       <Button {...args} variant="filled">
//         Filled
//       </Button>
//     </div>
//   </div>
// );

// Variants.args = {
//   color: 'primary',
// };

// export const Sizes = (args: ButtonProps) => (
//   <div className="flex flex-col space-y-4 mt-8">
//     <div>
//       <Button {...args} size="sm">
//         Small
//       </Button>
//     </div>
//     <div>
//       <Button {...args} size="md">
//         Medium
//       </Button>
//     </div>
//     <div>
//       <Button {...args} size="lg">
//         Large
//       </Button>
//     </div>
//   </div>
// );

// Sizes.args = {
//   variant: 'filled',
//   color: 'primary',
// };
