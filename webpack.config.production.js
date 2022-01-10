const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
    mode:"production",

    entry: path.join(__dirname , "src/index.jsx"),

    output: {
        filename: "[name].js", 
        path:path.resolve(__dirname , 'build'),
        publicPath : "/",
    },
    module : {
        rules : [
            {
                test:  /\.css$/, //regex
                use: ["style-loader" ,"css-loader"]
            } ,
            {
                test: /\.(js|jsx)$/,
                exclude : /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                use:[
                    {
                        loader:'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath: 'Assets/',
                            publicPath : "Assets/"
                        }
                    }
                ]

        
            },
 
            {
                test:/\.html$/,
                exclude: /node_modules/,
                use:['html-loader']
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
      },
    resolve : {
        extensions:['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules : ['src' , 'node_modules'],
        fallback : {
            "path": require.resolve("path-browserify")
        }
    },

    plugins :[
        new HtmlWebPackPlugin({
            template : path.join(__dirname , 'src/index.html')
        }),

        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : JSON.stringify("production"),
                EMAILER : JSON.stringify(process.env.MAILER)
            }
        })
    ]

}