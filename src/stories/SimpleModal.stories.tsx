import React from 'react';

import MwSimpleModal from '../components/common/MwSimpleModal/MwSimpleModal';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'SimpleModal',
  component: MwSimpleModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MwSimpleModal>;

const Template: ComponentStory<typeof MwSimpleModal> = (args) => <MwSimpleModal {...args} />;

export const ConfirmDialog = Template.bind({});
ConfirmDialog.args = {
  title: 'Remove item?',
  argTypes: { onClose: { action: 'onClose' }, onSubmit: { action: 'onSubmit' } },
  message: 'Are you sure you want to delete this movie?',
  className: 'mwDefaultModalContainer',
};
