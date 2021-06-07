module.exports = {
	plugins: {
		autoprefixer: {},
		"postcss-px2rem-exclude": {
			remUnit: 14.4,
			exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件
		}
	}
}
