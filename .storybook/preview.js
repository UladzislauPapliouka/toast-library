import { ThemeProvider } from 'styled-components';
import * as sizes from '../src/constants/sizes';
import colorsTheme from '../src/constants/theme';

export const parameters = {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={{ colors: colorsTheme, sizes }}>
            <Story />
        </ThemeProvider>
    ),
];