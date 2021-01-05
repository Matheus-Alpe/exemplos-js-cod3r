const devMode = process.env.NODE_ENV !== 'production';
// const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    // mode: 'production' //retorna um main minificado,
    // mode: 'development',
    mode: devMode ? 'development': 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins : [
        new MiniCSSExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [
            {
                // test: /\.css$/, //pega arquivo com a extensão .css
                test: /\.s?[ac]ss$/, //pega arquivo com a extensão .css, .scss e .sass
                use: [
                    MiniCSSExtractPlugin.loader,
                    //'style-loader', //adiciona CSS a DOM injetando a tag <style>
                    'css-loader', //interpreta @import, url()...
                    'sass-loader',
                ]
            }, 
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}

"http://files.cod3r.com.br/curso-web/logo.png"