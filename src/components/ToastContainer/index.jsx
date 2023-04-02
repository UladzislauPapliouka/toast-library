import React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '@components/ErrorBoudaries/index.jsx';
import positions from '@constants/positions.js';
import singleton from '@constants/singleton.js';
import * as sizes from '@constants/sizes.js';
import useToasts from '@hooks/useToasts.js';

import ToastsList from '../Button/ToastsList';

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
