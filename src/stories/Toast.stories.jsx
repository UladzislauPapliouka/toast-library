import React from 'react';

import Toast from '@components/Toast';

export default {
    title: 'Example/Toast',
    component: Toast,
    argTypes: {
        type: {
            defaultValue: 'info',
            options: ['info', 'warning', 'error', 'success'],
            control: { type: 'select' },
        },
        toastTitle: {
            defaultValue: 'Test',
        },
        toastDescription: {
            defaultValue: 'Description',
        },
        animationName: {
            defaultValue: 'slide',
        },
    },
};

function Template(args) {
    return <Toast {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
};
export const Error = Template.bind({});
Error.args = {
    type: 'error',
};
export const Success = Template.bind({});
Success.args = {
    type: 'success',
};
