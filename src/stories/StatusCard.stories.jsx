import React from 'react';
import StatusCard from '../components//StatusCard';

export default {
  title: 'Components/StatusCard',
  component: StatusCard,
  argTypes: {
    color: {
      control: 'select',
      options: ['maroon', 'saffron', 'navy']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
};

const Template = (args) => <StatusCard {...args} />;

export const MaroonSmall = Template.bind({});
MaroonSmall.args = {
  code: 'A-044',
  label: 'Current',
  color: 'maroon',
  size: 'small'
};

export const SaffronMedium = Template.bind({});
SaffronMedium.args = {
  code: 'B-210',
  label: 'Pending',
  color: 'saffron',
  size: 'medium'
};

export const NavyLarge = Template.bind({});
NavyLarge.args = {
  code: 'C-999',
  label: 'Completed',
  color: 'navy',
  size: 'large'
};

export const Playground = Template.bind({});
Playground.args = {
  code: 'D-101',
  label: 'Active',
  color: 'maroon',
  size: 'medium'
};