import React from 'react';
import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';

import toastIcons from './config.jsx';
import {
  CloseButton,
  ToastDataWrapper,
  ToastDescription,
  ToastTitle,
  ToastWrapper,
} from './styled';

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
      data-cy={toastTitle}
    >
      {toastIcons[type]}
      <ToastDataWrapper>
        <ToastTitle>{toastTitle}</ToastTitle>
        {toastDescription && (
          <ToastDescription>{toastDescription}</ToastDescription>
        )}
      </ToastDataWrapper>
      <CloseButton onClick={handleClose}>
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
