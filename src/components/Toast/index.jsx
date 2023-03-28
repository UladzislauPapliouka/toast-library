import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import ToastWrapper, { CloseButton } from './styled';
import toastIcons from './config';

function Toast({ type }) {
    return (
        <ToastWrapper type={type}>
            {toastIcons[type]}
            Test1
            <CloseButton>
                <RxCross2 />
            </CloseButton>
        </ToastWrapper>
    );
}
Toast.defaultProps = {
    type: 'info',
};
Toast.propTypes = {
    type: 'info' | 'warning' | 'error' | 'success',
};
export default Toast;
