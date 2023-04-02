import babel  from "@rollup/plugin-babel"
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';


export default [{
    input: './src/index.js',
    output: [
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named',
        }],
    plugins: [
        nodeResolve(),
        alias({
            entries: [
                {
                    find: "@",
                    replacement: "src",
                },
                {
                    find: "@constants",
                    replacement: "src/constants",
                },
                {
                    find: "@components",
                    replacement: "src/components",
                },
                {
                    find: "@hooks",
                    replacement: "src/hooks",
                },
                {
                    find: "@utils",
                    replacement: "src/utils",
                },
                {
                    find: "@service",
                    replacement: "src/service",
                },

            ]
        }),
        external(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
      terser({
          maxWorkers: 6
      })
    ],
    external: ["react", "react-dom",'styled-components']
}]