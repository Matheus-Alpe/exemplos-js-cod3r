const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: './dist/pages',
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'pages/index.html',
            template: './src/pages/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'pages/login.html',
            template: './src/pages/login.html'
        }),
        new MiniCSSPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [ MiniCSSPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/, //pra ele n pegar os arquivos de node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            }
        ]
    }
};