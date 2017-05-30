require('shelljs/global');
var child = require('child_process');
var path = require('path');
var glob = require('glob');
var config = require('./config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	//入口文件
	getEntries: function() {
		var files = glob.sync('src/app/**/main.js'),
			entries = {};

		files.forEach(function(filepath){
			var split = filepath.split('/');
			var name = split[split.length - 2];
			entries[name] = './' + filepath;
		})
		return entries;
	},
    //静态目录存放路径
	assetsPath: function(_path) {
        return path.posix.join(config.build.resourcesShortPath, _path);
    },
    copyDir: function(source, target) {
        rm('-rf', target);
        mkdir('-p', target);
        cp('-R', source, target);
    },
	cssTypes: {
		css: 'css-loader',
		less: 'css-loader!less-loader'
	},

}