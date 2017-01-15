fis.config.set('project.ignore', [
  'output/**',
  'dist/**',
  'node_modules/**',
  '.git/**',
  'fis-conf.js',
  'npm-debug.log',
  'db.json',
])

fis.match('**.ts', {
  parser: fis.plugin('typescript', {
    module: 'commonjs',
    target: 'es2015',
    sourceMap: true,
  }),
  rExt: '.js'
})
