import React from 'react';

import Button from '@components/Button/Button';
import ToastContainer from '@components/ToastContainer';
import Singleton from '@service/singleton';

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
    color: {
      control: { type: 'color' },
    },
    margin: {
      defaultValue: undefined,
      control: { type: 'text' },
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
  color,
  margin,
}) {
  const createToast = () =>
    Singleton.createToast({
      title: toastTitle,
      position: toastPosition,
      type,
      animationName,
      description: toastDescription,
      slideDirection,
      duration,
      color,
      margin,
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
