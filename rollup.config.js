import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-node-polyfills';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: {
    file: 'public/build.js',
    name: 'typescript',
    format: 'umd'
  },
  plugins: [
    // nodeGlobals(),
    nodePolyfills(),
    resolve({
    }),
    commonjs()
    // terser()
  ]
};