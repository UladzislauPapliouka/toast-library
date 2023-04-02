import React from 'react';
import PropTypes from 'prop-types';

import positions from '../../../constants/positions';
import singleton from '../../../constants/singleton.js';
import Toast from '../../Toast';

function ToastsList({ toasts, positionName }) {
  return (
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
        }) => {
          const handleClose = () => singleton.getInstance().removeToast(id);
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
              />
            )
          );
        },
      )}
    </>
  );
}
ToastsList.propTypes = {
  positionName: PropTypes.string,
  toasts: PropTypes.array,
};
ToastsList.defaultProps = {
  positionName: '',
  toasts: [],
};
export default ToastsList;
