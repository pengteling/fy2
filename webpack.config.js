//cnpm install webpack webpack-dev-server --save
//cnpm install css-loader style-loader file-loader extract-text-webpack-plugin raw-loader --save-dev
//cnpm install node-sass sass-loader less-loader autoprefixer-loader --save-dev
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    resolve: {
        alias: {
            "jquery": path.resolve(
                __dirname,
                "bower_components/jquery/dist/jquery"
            )
        // ,
        // "flexslider": path.resolve(
        //     __dirname,
        //     'bower_components/flexslider/jquery.flexslider-min'
        // )
        }
    },
    entry:
    // ["webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server", './js/index.js']
    {
        index: ['./js/index.js']
    // ,
    // custom: ['./js/custom.js'],
    },
    output: {
        path: './dist/',
        //publicPath: '/dist/', //调试时
        publicPath: './../', //发布时
        filename: './js/[name].js'
    },
    // devtool: "#inline-source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}')
            }

            , {
                test: /\.less$/,
                //loader: "style!css!less"
                loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}!less')
            }

            , {
                test: /\.scss$/,
                //loader: "style!css!less"
                //loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}!sass')
                loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}!sass')

            //loader:   'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}!sass'
            }

            , {
                test: /\.(png|jpe?g|gif|eot|svg|ttf|woff2?)$/,
                loader: "file?name=images/[name].[ext]"
            },
            {
                test: /\.html$/,
                loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
            }

        ]
    },
    plugins: [
        //提取公共commjs
        new webpack.optimize.CommonsChunkPlugin("commons", "js/commons.js"),
        //提取require的css 合并到某个文件
        new ExtractTextPlugin("./css/[name].css", {
            allChunks: true
        }),
        //jquery插件 
        new webpack.ProvidePlugin({
            "jQuery": path.resolve(
                __dirname,
                "bower_components/jquery/dist/jquery"
            ),
            "$": path.resolve(
                __dirname,
                "bower_components/jquery/dist/jquery"
            )
        }),
        //hot
        new webpack.HotModuleReplacementPlugin()
        ,
        //定义环境 程序中判断
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //压缩js 除$ jQuery
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$', 'jQuery']
            },
            compress: {
                warnings: false
            }
        })
    ]
}