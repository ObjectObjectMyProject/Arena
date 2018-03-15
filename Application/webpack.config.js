const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: 'js/app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        hotReload: false,
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        publicPath: '/',
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: 'src/index.html'
        }),
        new WriteFileWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/fonts', to: './fonts' },
            { from: 'src/img', to: './img' }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            slick: 'slick-carousel',
            Tether: 'tether', tether: 'tether'
        })
    ]
};