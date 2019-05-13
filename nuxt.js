const { Nuxt } = require('nuxt-start')

const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

module.exports = nuxt.server.app
