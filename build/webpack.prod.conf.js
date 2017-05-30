
var path = require('path');
var webpack = require('webpack');
var utils = require('./utils');
var config = require('./config');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = merge(baseWebpackConfig,{
	entry: {},
	devtool: 'false',
	output: {
		path: config.build.outputPath,
		//publicPath: 'http://localhost:1983/',
        publicPath: '',
		filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
	},
	module: {
		loaders: []
	},
    vue: {
        loaders: {}
    },
	plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //排除文件(static/lib)不打包
        new webpack.IgnorePlugin(new RegExp("(jquery.min|react)")),
		new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
        //new webpack.optimize.CommonsChunkPlugin("vendor", utils.assetsPath('js/[name].[chunkhash].js')),
	],
	devServer: {
		inline: true
	}
})


// 生成多种类型的css处理
Object.keys(utils.cssTypes).forEach(function(type) {
    // vue-loader
    webpackConfig.vue.loaders[type] = ExtractTextPlugin.extract('vue-style-loader', utils.cssTypes[type]);
    // module-loader
    webpackConfig.module.loaders.push({
        test: new RegExp('\\.' + type + '$'),
        loader: ExtractTextPlugin.extract("vue-style-loader", utils.cssTypes[type])
    })
});

var entries = utils.getEntries();

Object.keys(entries).forEach(function(name) {

    webpackConfig.entry[name] = entries[name];

    // 生成HtmlWebpackPlugin
    var plugin = new HtmlWebpackPlugin({
        filename: path.join(config.build.htmlShortPath, name + '.html'),
        template: config.build.templatePath,
        inject: true,
        chunks: ['vendor', name],
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: false
        }
    });

    webpackConfig.plugins.push(plugin);
})
module.exports = webpackConfig;

