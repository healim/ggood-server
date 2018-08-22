const Router = require('koa-router')

const user = new Router();

user.get('/', ctx => {
  ctx.body = '유저'
})

module.exports = user