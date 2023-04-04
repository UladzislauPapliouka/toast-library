import { ThemeProvider } from 'styled-components';
import { colorsTheme, sizes } from '@constants';

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
