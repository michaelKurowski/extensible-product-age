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

module.exports = {
    entry: './index.js',
    context: __dirname + '/webFrontend',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
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
                        ],
                        plugins: [
                            ['transform-private', {
                                pattern: '^_'
                            }]
                        ]
                    }
                },
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
};