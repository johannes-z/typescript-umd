const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.js'],
  outfile: './public/build.js',
  minify: true,
  bundle: true,
  target: 'es5',
  format: 'iife',
  globalName: '__export__',
  banner: {
    js: `
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define([], factory);
  } else {
      // Browser globals
      root.typescript = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {`
  },
  footer: {
    js: `return __export__; }));`
  },
}).catch(() => process.exit(1))