'use strict'

module.exports = (api) => {
	api.cache(true)

	return {
		presets: ['babel-preset-expo'],
	}
}
