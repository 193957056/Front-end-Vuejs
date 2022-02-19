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
            },
            { //图片文件的配置（仅适用于webpack5）
                test: /\.(gif|png|jpg|jpeg)/i,
                type: 'asset', //匹配上面的文件后，webpack会把他们当作静态资源处理打包，如果你设置的是asset模式，以8kb大小区分图片文件，小于8kb的，把图片文件转base64，打包进js中,大于8kb的，直接把图片文件输出到dist下
            },
            {
                test: /\.html/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            }
        ]
    }
};