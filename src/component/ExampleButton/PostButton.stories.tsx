import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { PostButton } from "./PostButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-default-export
export default {
  title: "Example/PostButton",
  component: PostButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: { control: "select", options: ["today", "tommorow", "upcoming"] },
  },
} as ComponentMeta<typeof PostButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostButton> = (args) => (
  <PostButton {...args} />
);

export const PostTodayTodo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PostTodayTodo.args = {
  type: "today",
  onClick: () => {
    alert("今日のTODOを追加しました");
  },
};

export const PostTommorowTodo = Template.bind({});
PostTommorowTodo.args = {
  type: "tommorow",
  onClick: () => {
    alert("明日するTODOを追加しました");
  },
};

export const PostUpcomingTodo = Template.bind({});
PostUpcomingTodo.args = {
  type: "upcoming",
  onClick: () => {
    alert("今度するTODOを追加しました");
  },
};
