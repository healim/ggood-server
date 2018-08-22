const Router = require('koa-router')

const api = new Router()
const upload = require('./upload')
const user = require('./user')

api.use('/upload', upload.routes())
api.use('/user', user.routes())

module.exports = api