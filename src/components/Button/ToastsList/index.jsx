import React from 'react';
import PropTypes from 'prop-types';

import positions from '../../../constants/positions';
import singleton from '../../../constants/singleton.js';
import Toast from '../../Toast';

function ToastsList({ toasts, positionName }) {
  return (
    <>
      {toasts.map((t) => {
        const handleClose = () => singleton.getInstance().removeToast(t.id);
        return t.position === positions[positionName] ? (
          <Toast
            key={t.id}
            toastTitle={t.title}
            toastDescription={t.description}
            type={t.type}
            duration={t.duration}
            animationName={t.animationName}
            slideDirection={t.slideDirection}
            handleClose={handleClose}
          />
        ) : null;
      })}
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
