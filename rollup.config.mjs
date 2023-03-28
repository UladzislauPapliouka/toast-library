import babel  from "@rollup/plugin-babel"
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'

export default [{
    input: './src/index.js',
    external: ['styled-components'],
    output: [
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named',
        }],
    plugins: [
        image(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        external(),
        resolve(),
        alias({
            resolve: ['.js', '.jsx'],
            entries: [
                {
                    find: "@",
                    replacement: "src",
                },
            ]
        }),
    ],
}]