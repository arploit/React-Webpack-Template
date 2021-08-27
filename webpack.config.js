const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
}
module.exports = {
	mode: mode,

	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[hash][ext][query]',
	},

	module: {
		rules: [
			{
				test: /\>{png|jpe?g|gif|svg}$/i,
				type: 'asset/resource',
				parser: {
					dataUrlCondition: {
						maxSize: 30 * 1024,
					},
				},
			},
			{
				test: /\.scss$/i,
				use: [
					{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } },
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,

				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],

	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devtool: 'source-map',
	devServer: {
		static: './dist',
		hot: true,
	},
};
