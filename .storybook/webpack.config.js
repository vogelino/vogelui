const path = require('path')

module.exports = async ({ config, mode }) => {
	config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules']

	return config
}
