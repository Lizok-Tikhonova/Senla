const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV ==='development'?'development':'production'
console.log(mode);
module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, './dist'), 
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true, 
    },
    module:{
        rules:[
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
                type: 'asset/resource'
            }
        ]
    },
    mode,
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', 
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }), 
    ],
    devServer: {
        hot: true,
    },
    performance:{
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }

}