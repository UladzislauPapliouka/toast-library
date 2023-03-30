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

function Toast({
    type,
    toastTitle,
    toastDescription,
    handleClose,
    duration,
    slideDirection,
    animationName,
}) {
    return (
        <ToastWrapper
            type={type}
            duration={duration}
            slideDirection={slideDirection}
            animationName={animationName}
            draggable
            onDragEnd={handleClose}
            onClick={(e) => e.stopPropagation()}
        >
            {toastIcons[type]}
            <ToastDataWrapper>
                <ToastTitle>{toastTitle.slice(0, 29)}</ToastTitle>
                {toastDescription && (
                    <ToastDescription>
                        {toastDescription.slice(0, 89)}
                    </ToastDescription>
                )}
            </ToastDataWrapper>
            <CloseButton
                onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }}
            >
                <RxCross2 />
            </CloseButton>
        </ToastWrapper>
    );
}
Toast.propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    toastTitle: PropTypes.string.isRequired,
    toastDescription: PropTypes.string,
    handleClose: PropTypes.func,
    duration: PropTypes.number,
    slideDirection: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    animationName: PropTypes.string | undefined,
};
Toast.defaultProps = {
    type: 'info',
    toastDescription: 'Description',
    handleClose: () => {},
    duration: 3000,
    slideDirection: 'top',
    animationName: undefined,
};
export default Toast;
