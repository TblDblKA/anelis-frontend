const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const webpack = require('webpack')

module.exports = {
configureWebpack: {
    plugins: [
        new SpriteLoaderPlugin({
            plainSprite: true
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.svg$/,
            //     loader: 'vue-svg-loader'
            // }
        ]
    },
    resolve: {
        alias: {
            'components': path.join(__dirname, 'src/components')
        }
    }
},
chainWebpack: (config) => {
    config.module
        .rule('svg')
        .test(/\.(svg)(\?.*)?$/)
        .use('file-loader')
        .loader('svg-sprite-loader')
        .options({
            extract: true,
            // outputPath: 'img/sprites/',
            // publicPath: 'img/sprites/',
            spriteFilename: 'sprite.[contenthash:8].svg'
        })
}
}