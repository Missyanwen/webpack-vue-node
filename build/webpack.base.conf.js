var path = require('path');
var utils = require('./utils');

module.exports = {
	resolve: {
		// 省略后缀
        extensions: ['', '.js', '.vue', '.less', '.css'],
        
        fallback: [path.join(__dirname, '../node_modules')],
		//别名
		alias: {
			'lib': path.resolve(__dirname, '../static/lib'),
            'jquery': path.resolve(__dirname, '../static/lib/jquery/jquery.min.js'),
		}
	},
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
	module: {
		loaders: [
			{test:/\.vue$/, loader: 'vue-loader'},
			{test: /\.json$/, loader: 'json'},
            {test:/\.html$/,loader: "html?attrs=img:src img:data-src"},
            {
                test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 1,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 1,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {test:/\.js$/, exclude: /(node_modules|lib)/, loader: 'babel-loader'}
		]
	}
}