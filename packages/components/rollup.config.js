import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import multiEntry from 'rollup-plugin-multi-entry';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import progress from 'rollup-plugin-progress';
import css from 'rollup-plugin-css-only';
const { terser } = require('rollup-plugin-terser');

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
  filesize({
    showGzippedSize: false,
  })
];

console.log('NODE_ENV', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production'){
  pluginOptions.push(terser())
}

export default {
    input: './src/index.js',
    output: {
      name: 'main',   // for external calls (need exports)
      file: 'dist/js/index.min.js',
      format: 'umd',
    },
    plugins: pluginOptions,
  };