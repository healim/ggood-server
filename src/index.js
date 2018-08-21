require('dotenv').config()

const {
  PORT: port = 4000,
  MONGO_URI = mongoURI
} = process.env

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(port, () => {
  console.log(`listening on ${port} `)
})