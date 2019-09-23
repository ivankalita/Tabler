const merge = require('webpack-merge')
var webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: []
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
})
module.exports.devtools = '#source-map'