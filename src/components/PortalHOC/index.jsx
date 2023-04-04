import React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '@components/ErrorBoudaries';
import { sizes } from '@constants';
import singleton from '@service/singleton';

const portalHOC = (Component) => () =>
  ReactDOM.createPortal(
    <ErrorBoundary>
      <ThemeProvider
        theme={{
          colors: singleton.toastTheme,
          sizes,
        }}
      >
        <Component />
      </ThemeProvider>
    </ErrorBoundary>,
    document.body,
  );

export default portalHOC;
