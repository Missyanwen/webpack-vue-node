var path = require('path');
var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var compression = require('compression');
var ejs = require('ejs');
var routes = require('../node-server/controllers/index');
var config = require('./config');
var webpackConfig = require('./webpack.dev.conf');

var port = process.env.PORT || config.dev.port;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));
app.use(compression()); //开启 gzip

//webpack编译器
var compiler = webpack(webpackConfig);

//webpack-dev-server 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

//热更新中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

// 静态资源目录
var staticPath = '/' + config.build.resourcesShortPath;
app.use(staticPath, express.static('./static'));

//具体路由action
routes(app);

//var bs = require('browser-sync').create();
app.listen(port, function(){
    // bs.init({
    //     open: false,
    //     ui: false,
    //     notify: false,
    //     proxy: 'http://localhost:1983/',
    //     files: './views/**',
    //     port: port
    // });
    // console.log("node启动 监听端口：" + port);
});

process.on('SIGINT', function() {
    console.log('退出node进程');
    process.exit(0);
});