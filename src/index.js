require('dotenv').config()
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const mongoose = require('mongoose')

const {
  PORT: port = 4000,
  MONGO_URI: mongoURI
} = process.env

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true }) // DeprecationWarning (urrent URL string parser is deprecated)
  .then(() => {
    console.log( `connected to mongodb : ${mongoURI}`)
  })
  .catch((e) => {
    console.error(e)
  })

const app = new Koa()
app.use(bodyParser())
// // bodyparser 사용 이유 (타입 유지하면서 HTTP request body 가져옴)
// => TypeError: Cannot destructure property `username` of 'undefined' or 'null'.

const router = new Router()

const api = require('./api')
router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods)
app.listen(port, () => {
  console.log(`listening on ${port} `)
})