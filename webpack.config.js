const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        filename: '[name].[contenthash].js',
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Fun game!",
            filename: 'index.html',
            template: path.resolve( __dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js'],
            exclude: 'node_modules'
        }),
    ],
    devServer: {
        open: true
    },
    devtool: 'inline-source-map'
};
