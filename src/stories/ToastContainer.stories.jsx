import React from 'react';

import ToastContainer from '@components/ToastContainer';

export default {
    title: 'Example/ToastContainer',
    component: ToastContainer,
    // argTypes: {
    //     type: {
    //         defaultValue: 'info',
    //         options: ['info', 'warning', 'error', 'success'],
    //         control: { type: 'select' },
    //     },
    //     toastTitle: {
    //         defaultValue: 'Test',
    //     },
    //     toastDescription: {
    //         defaultValue: 'Description',
    //     },
    // },
};

function Template(args) {
    return <ToastContainer {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
