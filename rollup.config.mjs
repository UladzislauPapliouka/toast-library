import babel  from "@rollup/plugin-babel"
import nodeResolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import * as path from 'path';


export default [{
    input: './src/index.js',
    output: [
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named',
        }],
    plugins: [

        alias({
            entries: [
                {
                    find: "@",
                    replacement: path.resolve("src"),
                },
                {
                    find: "@constants",
                    replacement: path.resolve("src/constants"),
                },
                {
                    find: "@components",
                    replacement: path.resolve("src/components"),
                },
                {
                    find: "@hooks",
                    replacement: path.resolve("src/hooks"),
                },
                {
                    find: "@utils",
                    replacement: path.resolve("src/utils"),
                },
                {
                    find: "@service",
                    replacement: path.resolve("src/service"),
                },

            ]
        }),
        external(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        nodeResolve({extensions: ['.js', '.jsx', '.mjs', '.json'], browser: true }),
      terser({
          maxWorkers: 6
      })
    ],
    external: ["react", "react-dom",'styled-components']
}]
