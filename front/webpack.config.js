module.exports = {
	entry: "./src/componentes/index.jsx",
	output: {
		filename: "bundle.js"
	},
	mode: "development",
	module: {
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ["@babel/preset-react", '@babel/preset-env']
			}
		}]
	},
	resolve: {
		extensions: ['.js','.jsx']
	}
	// watch: true
}
