import React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '@components/ErrorBoudaries';
import ToastsList from '@components/ToastsList';
import positions from '@constants/positions';
import * as sizes from '@constants/sizes';
import useToasts from '@hooks/useToasts';
import singleton from '@service/singleton';

import { ToastContainerWrapper, ToastPositionWrapper } from './styled';

const ToastContainer = () => {
  const { toasts } = useToasts();
  return ReactDOM.createPortal(
    <ErrorBoundary>
      <ThemeProvider
        theme={{
          colors: singleton.toastTheme,
          sizes,
          containerMargin: singleton.containerMargin,
        }}
      >
        <ToastContainerWrapper>
          {Object.keys(positions).map((positionName) => (
            <ToastPositionWrapper
              key={positionName}
              data-cy={positions[positionName]}
              position={positions[positionName]}
            >
              <ToastsList toasts={toasts} positionName={positionName} />
            </ToastPositionWrapper>
          ))}
        </ToastContainerWrapper>
      </ThemeProvider>
    </ErrorBoundary>,
    document.body,
  );
};
export default ToastContainer;
