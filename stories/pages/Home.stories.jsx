import React from 'react';

import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  siteName: 'Note Builder',
};
