const Router = require('koa-router')

const upload = new Router()

const test = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params
  }
}

upload.get('/', test)
upload.get('/:id', test)

module.exports = upload