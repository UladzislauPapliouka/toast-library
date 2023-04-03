import React from 'react';
import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';

import toastIcons from './config';
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
  color,
  margin,
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
      color={color}
      margin={margin}
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
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success']).isRequired,
  toastTitle: PropTypes.string.isRequired,
  toastDescription: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  slideDirection: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
    .isRequired,
  animationName: PropTypes.string.isRequired,
  color: PropTypes.string | undefined,
  margin: PropTypes.string | undefined,
};
Toast.defaultProps = {
  color: undefined,
  margin: undefined,
};
export default Toast;
