import { Button } from "nrmndev-fw";
import {
  typeDocGenerator,
  argTypesGenerator,
  childrenAsPropModifier,
} from "nrmndev-fw/utils";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/SampleButton",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: childrenAsPropModifier(),
    as: {
      description: "Polymorphic button can be rendered as:",
      control: "select",
      ...typeDocGenerator(["buttonAs"], "button"),
    },
    display: {
      description: "Variant Style of the button",
      control: "select",
      options: ["block", "inline-block"],
      table: {
        type: { summary: `"block" | "inline-block"` },
      },
    },
    variant: {
      description: "Variant Style of the button",
      control: "select",
      options: ["outline", "solid"],
      table: {
        type: { summary: `"outline" | "solid"` },
      },
    },
    ...argTypesGenerator(["color", "fontSize", "size", "padding", "margin"]),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    as: "button",
    children: "test",
    variant: "solid-primary",
    size: "md",
    //padding: "sm",
    fontSize: { value: 100 },
    color: "white",
    margin: { top: 10, bottom: 10 },
  },
};

// export const AsButton: Story = {
//   render: (args) => <Button {...args} />,
//   args: {
//     as: "button",
//     children: "test",
//     variant: "solid-primary",
//     size: "md",
//     //padding: "sm",
//     fontSize: { value: 100 },
//     color: "white",
//     margin: { top: 10, bottom: 10 },
//   },
// };
// export const WithObjectProps: Story = {
//   render: (args) => <Button {...args} />,
//   args: {
//     children: "Button with utility values as object",
//     color: "white",
//     padding: { top: 20, right: 30, bottom: 20, left: 30, unit: "px" },
//     fontSize: { value: 3.5, unit: "rem" },
//     margin: { top: 5, right: 5, bottom: 5, left: 5 },
//     onClick: () => {},
//   },
// };
// export const AsNavLink: Story = {
//   render: (args) => (
//     <MemoryRouter>
//       <Button {...args} />
//     </MemoryRouter>
//   ),
//   args: {
//     as: "navLink",
//     children: "Button as Anchor Link",
//     to: "",
//   },
// };
