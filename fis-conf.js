fis.match('**.ts', {
  parser: fis.plugin('typescript', {
    module: 'commonjs',
    target: 'es2015',
    sourceMap: true,
  }),
  rExt: '.js'
})
