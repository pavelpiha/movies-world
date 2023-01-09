import React from 'react';

import { ArrowDownIcon } from '../components/common/icons/ArrowDownIcon/ArrowDownIcon';
import { CrossIcon } from '../components/common/icons/CrossIcon/CrossIcon';
import MwButton from '../components/common/MwButton/MwButton';
import { RED_COLOR } from '../constants/constants';

import { ComponentMeta, ComponentStory } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: MwButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MwButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MwButton> = (args) => <MwButton {...args} />;

export const SubmitButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SubmitButton.args = {
  buttonName: 'Submit',
  className: 'mwSubmitButton',
  argTypes: { onClick: { action: 'onClick' } },
  type: 'submit',
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  buttonName: 'Cancel',
  className: 'mwCancelButton',
  type: 'reset',
};

export const CloseButton = Template.bind({});
CloseButton.args = {
  buttonName: 'Close',
  className: 'mwCloseButton',
  type: 'button',
  children: <CrossIcon className="mwCloseIcon" />,
};

export const ArrowDownButton = Template.bind({});
ArrowDownButton.args = {
  buttonName: 'Dropdown',
  className: 'mwArrowDownButton',
  type: 'button',
  children: <ArrowDownIcon className="mwArrowDownIcon" fill={RED_COLOR} />,
};

export const SearchButton = Template.bind({});
SearchButton.args = {
  buttonName: 'Search',
  className: 'mwSearchButton',
  type: 'button',
};
