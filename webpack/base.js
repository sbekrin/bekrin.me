import path from 'path';

export default {
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '..', 'dist')
	},
	resolve: {
		root: [
			path.resolve(__dirname, '..', 'app'),
			path.resolve(__dirname, '..', 'node_modules')
		],
		extensions: [ '', '.js', '.jsx', '.styl' ]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel?cacheDirectory&presets=es2015',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file'
			},
			{
				test: /\.ejs$/,
				loader: 'ejs'
			}
		]
	},
	plugins: []
};