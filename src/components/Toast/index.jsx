import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import PropTypes from 'prop-types';
import ToastWrapper, {
    CloseButton,
    ToastDataWrapper,
    ToastDescription,
    ToastTitle,
} from './styled';
import toastIcons from './config';

function Toast({ type, toastTitle, toastDescription }) {
    return (
        <ToastWrapper type={type}>
            {toastIcons[type]}
            <ToastDataWrapper>
                <ToastTitle>{toastTitle.slice(0, 29)}</ToastTitle>
                {toastDescription && (
                    <ToastDescription>
                        {toastDescription.slice(0, 89)}
                    </ToastDescription>
                )}
            </ToastDataWrapper>
            <CloseButton>
                <RxCross2 />
            </CloseButton>
        </ToastWrapper>
    );
}
Toast.propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    toastTitle: PropTypes.string.isRequired,
    toastDescription: PropTypes.string,
};
Toast.defaultProps = {
    type: 'info',
    toastDescription: 'Description',
};
export default Toast;
