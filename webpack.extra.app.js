var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require("./webpack.extra.js");


var appConfig = merge(config, {
    "plugins": [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/default.html',
            inject: false
        })
    ]
});

module.exports = appConfig;