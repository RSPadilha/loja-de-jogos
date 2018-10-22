module.exports = {
	entry: "./src/componentes/index.jsx",
	output: {
		path: '/dist',
		publicPath: '/dist',
		filename: "bundle.js"
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
	resolve: {
		extensions: ['.js','.jsx']
	}
	// watch: true
}