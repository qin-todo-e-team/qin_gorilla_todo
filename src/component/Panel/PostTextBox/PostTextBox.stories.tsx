import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { PostTextBox } from "./PostTextBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-default-export
export default {
  title: "Example/PostTextBox",
  component: PostTextBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    value: { control: "string", options: "" },
  },
} as ComponentMeta<typeof PostTextBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostTextBox> = (args) => (
  <PostTextBox {...args} />
);

export const PostTextboxSample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PostTextboxSample.args = {};
