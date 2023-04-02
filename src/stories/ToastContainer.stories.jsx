import React from 'react';

import ToastContainer from '@components/ToastContainer';

import Button from '../components/Button/Button';
import Singleton from '../constants/singleton';

export default {
  title: 'Example/ToastContainer',
  component: ToastContainer,
  argTypes: {
    type: {
      defaultValue: 'info',
      options: ['info', 'warning', 'error', 'success'],
      control: { type: 'select' },
    },
    toastTitle: {
      defaultValue: 'Test',
      control: { type: 'text' },
    },
    toastDescription: {
      defaultValue: 'Description',
      control: { type: 'text' },
    },
    animationName: {
      defaultValue: 'opacity',
      options: ['opacity', 'slide'],
      control: { type: 'select' },
    },
    toastPosition: {
      defaultValue: 'top-left',
      options: ['top-left', 'top-right', 'bottom-right', 'bottom-left'],
      control: { type: 'select' },
    },
    slideDirection: {
      defaultValue: 'top',
      options: ['left', 'right', 'bottom', 'top'],
      control: { type: 'select' },
    },
    duration: {
      defaultValue: 3000,
      control: { type: 'number' },
    },
  },
};

function Template({
  type,
  toastTitle,
  toastDescription,
  animationName,
  toastPosition,
  slideDirection,
  duration,
  ...args
}) {
  const createToast = () =>
    Singleton.getInstance().createToast({
      title: toastTitle,
      position: toastPosition,
      type,
      animationName,
      description: toastDescription,
      slideDirection,
      duration,
    });
  return (
    <div>
      <ToastContainer />
      <Button onClick={createToast} data-cy="createToast">
        Create toast
      </Button>
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {};
