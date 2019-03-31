const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },



    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 4200
    },



    plugins: [
        new HtmlWebpackPlugin ({
            inject: true,
            template: 'index.html'
        })
    ],


    devtool: 'eval-source-map'
};