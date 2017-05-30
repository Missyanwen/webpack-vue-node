
var path = require('path');
var webpack = require('webpack');
var utils = require('./utils');
var config = require('./config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = merge(baseWebpackConfig,{
	entry: {},
	devtool: 'source-map',
	output: {
		path: config.build.outputPath,
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		loaders: []
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
	],
	devServer: {
		inline: true
	}
})


// 生成多种类型的css处理
Object.keys(utils.cssTypes).forEach(function(type) {
    webpackConfig.module.loaders.push({
        test: new RegExp('\\.' + type + '$'),
        loader: 'vue-style-loader' + '!' + utils.cssTypes[type]
    });
});

var entries = utils.getEntries();

Object.keys(entries).forEach(function(name) {

    webpackConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(entries[name]);
    // 生成HtmlWebpackPlugin
    var plugin = new HtmlWebpackPlugin({
        filename: name + '.html',
        template: path.join(__dirname, 'views/'+ name +'/index.html'),
        inject: true,
        chunks: ['common', name]
    });

    webpackConfig.plugins.push(plugin);
})
module.exports = webpackConfig;

