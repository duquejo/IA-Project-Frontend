const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Fun game!",
            template: path.resolve( __dirname, './public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    devServer: {
        open: true
    },
    devtool: 'eval-source-map'
};
