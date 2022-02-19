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
    module: { //加载器配置
        rules: [ //规则
            { //一个具体的规则对象
                test: /\.css$/i, //匹配.css结尾的文件
                use: ["style-loader", "css-loader"] //然webpack使用这2个loader处理css文件
                    // 从右到做的，不能颠倒顺序
                    // css-loader:webpack解析css文件-把css代码一起打包进js中
                    // style-loader：css代码插入到DOM上（style标签）
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};