require('dotenv').config()

const {
  PORT: port = 4000,
  MONGO_URI = mongoURI
} = process.env

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const api = require('./api')
router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods)
app.listen(port, () => {
  console.log(`listening on ${port} `)
})