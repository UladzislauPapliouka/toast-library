import React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '@components/ErrorBoudaries/index.jsx';
import Toast from '@components/Toast/index.jsx';
import positions from '@constants/positions.js';
import singleton from '@constants/singleton.js';
import * as sizes from '@constants/sizes.js';
import useToasts from '@hooks/useToasts.js';

import { ToastContainerWrapper, ToastPositionWrapper } from './styled';

const ToastContainer = () => {
  const { toasts } = useToasts();
  return ReactDOM.createPortal(
    <ErrorBoundary>
      <ThemeProvider
        theme={{
          colors: singleton.toastTheme,
          sizes,
          containerMargin: singleton.getInstance().containerMargin,
        }}
      >
        <ToastContainerWrapper>
          {Object.keys(positions).map((positionName) => (
            <ToastPositionWrapper
              key={positionName}
              data-cy={positions[positionName]}
            >
              {toasts.map((t) => {
                const handleClose = () =>
                  singleton.getInstance().removeToast(t.id);
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
            </ToastPositionWrapper>
          ))}
        </ToastContainerWrapper>
      </ThemeProvider>
    </ErrorBoundary>,
    document.body,
  );
};
export default ToastContainer;
