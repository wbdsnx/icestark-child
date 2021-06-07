const path = require('path');
const themeColor = '#FF6A00'
const bgColor = '#20BF8E'
module.exports = {
	publicPath: '/',
	lintOnSave: false,
	filenameHashing: false,
	runtimeCompiler: true,
	css: {
		loaderOptions: {
			css: {},
			// 	postcss: {
			// 		plugins: [
			// 	require('postcss-px2rem-exclude')({
			// 		remUnit: 15,
			// 		exclude: /node_modules|folder_name/i
			// 	})
			// ]
			// 	},
			less: {
				modifyVars: {
					'primary-color': '#20BF8E'
				},
				javascriptEnabled: true,
				globalVars: {
					themeColor,
					bgColor
				}
			}
		}
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.json', '.vue'],
			alias: {
				'@': path.resolve(__dirname, 'src/'),
			},
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			library: "njkt",
			libraryTarget: "umd",
			chunkFilename: './js/[name].js'
		},
	},
	chainWebpack: (config) => {
		config.optimization.delete('splitChunks');
	},
};
