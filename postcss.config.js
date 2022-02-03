module.exports = {
    plugins: {
      'postcss-preset-env': {
        stage: 0,
        browsers: 'last 2 versions',
        autoprefixer: { grid: true },
      },
      'cssnano': {
        preset: 'default',
      },
      'postcss-import': {},
      'postcss-nested': {}
    },
}