const developmentConfig = require('./config/webpack/webpack.dev')
const productionConfig = require('./config/webpack/webpack.prod')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = () => (isDevelopment ? developmentConfig : productionConfig)
