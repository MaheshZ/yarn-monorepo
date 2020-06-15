import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import multiEntry from 'rollup-plugin-multi-entry';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import progress from 'rollup-plugin-progress';
import css from 'rollup-plugin-css-only'

let pluginOptions = [
  multiEntry(),
  resolve({
    jsnext: true,
    browser: true
  }),
  css({ output: 'bundle.css' }),
  babel({
    exclude: 'node_modules/**',
    presets: ["@babel/preset-react"]
  }),
  commonjs(),
  // eslint(),
  progress(),
  // uglify(),
  filesize({
    showGzippedSize: false,
  })
];


export default {
    input: './src/index.js',
    output: {
      name: 'main',   // for external calls (need exports)
      file: 'dist/js/index.min.js',
      format: 'umd',
    },
    plugins: pluginOptions,
  };