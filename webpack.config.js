const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
    mode:"development", 
    entry: path.join(__dirname , "src/index.jsx"), 
    output: {
        filename: "[name].js",
        path:path.resolve(__dirname , 'dev'),
        publicPath : "/",
    },
    module : {
        rules : [
            {
                test:  /\.css$/,
                use: ["style-loader" ,"css-loader"]
            } ,
            {
                test: /\.jsx?$/,
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
        historyApiFallback: true, // tell webpack to fallback for every path to your entry point: if not will get cannot get /home error
      },
    resolve : {
        extensions:['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss','.png', '.jpg', '.jpeg'],  //generate all possible path to the modules
        modules : ['src' , 'node_modules'],
    },
    plugins :[
        new HtmlWebPackPlugin({  //create a html file to server webpack bundles includes in the body the script tag
            template : path.join(__dirname , 'src/index.html')
        })
        ,
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : JSON.stringify("development"),
                EMAILER : JSON.stringify(process.env.MAILER)
            }
        }),

    ]

}