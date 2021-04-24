import React from "react";

import GetStarted from "./GetStarted";

export default {
  title: "Pages/GetStarted",
  component: GetStarted,
};

const Template = (args) => <GetStarted {...args} />;

export const Default = Template.bind({});
Default.args = {};
