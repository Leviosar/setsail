const StatsPlugin = require('stats-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new StatsPlugin('stats.json', {
                chunkModules: true
            })
        ]
    }
}