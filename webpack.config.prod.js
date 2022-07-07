const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'production',
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
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                ] 
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Fun game!',
            filename: 'index.html',
            template: path.resolve( __dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        { discardComments: { removeAll: true } }
                    ],
                },
            }),
            new TerserPlugin({
                    parallel: true,
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            [
                                'svgo',
                                {
                                    plugins: [
                                        {
                                            name: 'removeViewBox',
                                            active: false,
                                        },
                                        {
                                            name: 'addAttributesToSVGElement',
                                            params: {
                                                attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            })
        ],
    },
    devtool: 'source-map',
};

TerserPlugin