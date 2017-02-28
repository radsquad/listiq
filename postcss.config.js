module.exports = {
  plugins: [
    // TODO: enable postcss-modules when moved to React
    // require('postcss-modules')({
    //   globalModulePaths: [/common.css/],
    // }),
    require('precss'),
    require('autoprefixer')
  ]
}
