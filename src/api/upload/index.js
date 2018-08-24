const Router = require('koa-router')

const upload = new Router()

upload.get('/', (ctx) => {
  ctx.body = '업로드'
})

module.exports = upload