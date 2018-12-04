const path = require('path');

module.exports = {
	entry: "./src/componentes/index.jsx",
	output: {
		path: path.resolve('dist'),
		filename: "bundle.js",
		publicPath: '/dist'
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["@babel/preset-react", '@babel/preset-env']
				}
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js','.jsx']
	}
}