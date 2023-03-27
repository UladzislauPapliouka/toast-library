import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/index.jsx',
    output: [
        {
            file: 'build/index.jsx',
            format: "cjs",
            sourcemap: true
        },
        {
            file: 'build/index.es.js',
            format: "esm",
            sourcemap: true
        }
    ],
    plugins:[
        nodeResolve({
            extensions: [".js",".jsx"],
          }),
          babel({
            presets: ["@babel/preset-react"],
          }),
          replace({
            'process.env.NODE_ENV': JSON.stringify( 'development' )
          }),
          commonjs(),
          // serve({
          //   open: true,
          //   verbose: true,
          //   contentBase: ["", "public"],
          //   host: "localhost",
          //   port: 3000,
          // }),
          // livereload({ watch: "build" }),
    ]
};
