require('shelljs/global');

var path = require('path');
var fs = require('fs');
var ora = require('ora');
var webpack = require('webpack');
var utils = require('./utils');
var config = require('./config');
var webpackConfig = require('./webpack.prod.conf');

// Loading 动画
var spinner = ora('开始构建生产环境...');
spinner.start();

// 清空输出目录
rm('-rf', config.build.outputPath);

// 复制static到输出目录
utils.copyDir('./static/*', config.build.resourcesPath);
// 构建
webpack(webpackConfig, function(err, stats) {
    spinner.stop();
    if (err) throw err;

    // 输出编译结果
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n');
})