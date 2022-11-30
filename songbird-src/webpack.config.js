const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
        //contentBase: path.join(__dirname, 'public'),
    }
}

module.exports = ({ develop }) => ({
    mode: develop ? 'development' : 'production',
    devtool: develop ? 'source-map' : false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext]',
    },
    module: {
        rules: [{
                test: /\.(?:ico|gif|png|jpg|jpeg|svg|mp3|wav)$/i,
                type: 'asset/resource',
            }, {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }, {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyPlugin({
            patterns: [{
                    from: 'public',
                    noErrorOnMissing: true,
                },
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                    noErrorOnMissing: true,
                }
            ],
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    ...devServer(develop),
})