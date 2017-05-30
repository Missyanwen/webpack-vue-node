
var path = require('path');

var config = {
    build: {
        // 打包输出路径
        outputPath: path.resolve(__dirname, '../../output/wanghuatong'),
        // html模版路径，基于根路径
        templatePath: 'template.html',
        // html文件输出路径，基于outputPath
        htmlShortPath: '/',
        // 资源输出路径，基于outputPath
        resourcesShortPath: 'resources'
    },
    dev: {
        port: 1983,
        // 接口代理
        proxyTable: {
            '/pyxis': {
                target: 'http://pyxis.orion.meizu.com:8090',
                changeOrigin: false
            },
            '/views,/vizql,/trusted': {
                target: 'http://10.3.155.217',
                changeOrigin: true
            },
            '/ori': {
                target: 'http://ori.meizu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/ori/report/rest/index/get/index/by/privId/and/posId' : '/report/rest/index/get/index/by/privId/and/posId'           // remove base path
                }
            }
        }
    }
};

config.build.resourcesPath = path.join(config.build.outputPath, config.build.resourcesShortPath);
config.build.serverPath = path.join(config.build.outputPath, 'node-server');

module.exports = config;