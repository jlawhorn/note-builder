import React from 'react';

import { Logo } from './Logo';

export default {
  title: 'Basics/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  siteName: 'Note Builder',
};
