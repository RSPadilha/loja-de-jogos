const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: "./src/componentes/index.jsx",
	output: {
		filename: "bundle.js"

	},
	mode: "development",
	rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
    }]
}