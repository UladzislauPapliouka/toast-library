const path = require('path')
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '../src');
        config.resolve.alias['@constants'] = path.resolve(__dirname, '../src/constants');
        config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
        config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks');
        return config;
    },
};
