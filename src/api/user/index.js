const Router = require('koa-router')
const userCtrl = require('./user.ctrl')

const user = new Router();

user.post('/', userCtrl.joinUser)
user.get('/', userCtrl.getUsersInfo)
user.get('/:id', userCtrl.getUserInfo)
user.get('/:id', userCtrl.deleteUser)

module.exports = user