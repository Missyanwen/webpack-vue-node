#### nodejs+express+vue开发前端单页
>用express启用web服务,启动监听webpack热更新
```
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

```
> webpack的配置也分为开发webpack.dev.conf和正式webpack.prod.cof
> 打包将static复制到打包文件的目录下
```
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
```
  >先npm下载依赖
  npm install
  >启动开发环境
  npm run dev
  >运行localhost:1983
