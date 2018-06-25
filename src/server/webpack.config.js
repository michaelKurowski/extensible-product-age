const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PugWebpackPlugin = require('pug-loader')
const ApplyWebpackPlugin = require('apply-loader')
const CssWebpackPlugin = require('css-loader')
const SassWebpackPlugin = require('sass-loader')
const StyleWebpackPlugin = require('style-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const JsonWebpackPlugin = require('json-loader')
const BabelWebpackPlugin = require('babel-loader')
const UrlWebpackPlugin = require('url-loader')
const IstanbulWebpackPlugin = require('istanbul-instrumenter-loader')

module.exports = {
    entry: {
        main: ['./main.sass', './index.js']
    },
    context: __dirname + '/webFrontend',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            core: path.resolve(__dirname, './webFrontend/core'),
            theme: path.resolve(__dirname, './webFrontend/theme'),
            mainAppProvider: path.resolve(__dirname, './webFrontend/mainAppProvider.js'),
            mainAppCoreProvider: path.resolve(__dirname, './webFrontend/mainAppCoreProvider.js'),
            assets: path.resolve(__dirname, './webFrontend/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015'
                        ]
                    }
                },
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                },
                enforce: 'post',
                exclude: /node_modules$/,
            },
            { test: /\.pug$/, use: ['apply-loader', 'pug-loader'] },
            { test: /\.sass$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }) 
            },
            { test: /\.json$/, use: 'json-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!pug-loader!webFrontend/index.pug'
        }),
        new ExtractTextPlugin('styles.css')
    ]
}