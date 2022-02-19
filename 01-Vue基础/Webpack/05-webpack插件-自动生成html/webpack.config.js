const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js', //入口
    output: { //出口
        path: path.resolve(__dirname, 'dist'), //出口路径文件夹名字
        filename: 'bundle.js', //出口文件名字
    },
    plugins: [
        new HtmlWebpackPlugin({ //plugin插件配置
            template: './public/index.html'
        })
    ],
};