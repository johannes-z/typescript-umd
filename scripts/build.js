const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.js'],
  outfile: './tmp/build.js',
  minify: true,
  bundle: true,
  format: 'esm'
}).catch(() => process.exit(1))