import React from 'react';
import PropTypes from 'prop-types';

import Toast from '@components/Toast';
import { positions } from '@constants';
import singleton from '@service/singleton';

const ToastsList = ({ toasts, positionName }) => (
  <>
    {toasts.map(
      ({
        id,
        title,
        description,
        type,
        duration,
        animationName,
        slideDirection,
        position,
        margin,
        color,
      }) => {
        const handleClose = () => singleton.removeToast(id);
        return (
          position === positions[positionName] && (
            <Toast
              key={id}
              toastTitle={title}
              toastDescription={description}
              type={type}
              duration={duration}
              animationName={animationName}
              slideDirection={slideDirection}
              handleClose={handleClose}
              margin={margin}
              color={color}
              position={position}
            />
          )
        );
      },
    )}
  </>
);
ToastsList.propTypes = {
  positionName: PropTypes.string,
  toasts: PropTypes.array,
};
ToastsList.defaultProps = {
  positionName: '',
  toasts: [],
};
export default React.memo(ToastsList);
