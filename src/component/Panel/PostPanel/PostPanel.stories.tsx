import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { PostPanel } from "./PostPanel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-default-export
export default {
  title: "Example/PostPanel",
  component: PostPanel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    value: { control: "string", options: "" },
  },
} as ComponentMeta<typeof PostPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostPanel> = (args) => (
  <PostPanel {...args} />
);

export const PostPanelSample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PostPanelSample.args = {
  onSubmit: (data) => {
    alert(JSON.stringify(data));
  },
};
