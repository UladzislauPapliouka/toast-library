import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import * as sizes from './constants/sizes';
import colors from './constants/colors';

ReactDOM.render(
    <ThemeProvider theme={{ colors, sizes }}>
        <App />
    </ThemeProvider>,
    document.querySelector('#root'),
);

export default App;
