const HtmlWebpackPlugin=require("html-webpack-plugin");

const path = require("path")

module.exports = {
    mode:"production",
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "bundle"), // 出口路径
        filename: "bundle.js" // 出口文件名
    },
    module:{
        rules:[{
            test: /\.css$/,
            use:["style-loader","css-loader"]
        },{
            test: /\.less$/,
            use:[ "style-loader","css-loader","less-loader"]
        },
        {
            test: /\.(gif|ipg|png|svg|ico)$/,
            type:'asset/resource'
        }
    ]
},
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
    filename: 'index.html'
        }),
        
    ],
    devServer:{
        //当你serve以后，自动的打开默认的浏览器运行
        open:true,
        //默认端口号是8080，可以设置的范围【0,65535】
        port:666
    }
}
