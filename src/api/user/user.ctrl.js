const UserInfo = require('models/UserInfo')

/**
 * 
 * @param {*} ctx 
 * 새로운 유저 정보 저장
 */
exports.joinUser = async (ctx) => {
  const { username, email, birthDate } = ctx.request.body
  
  const user = new UserInfo({
    username, email, birthDate
  })

  try {
    await user.save()
    ctx.body = user
  } catch(e) {
    ctx.throw(e, 500)
  }
} 

/**
 * 
 * @param {*} ctx 
 * 저장된 유저 리스트 조회
 */
exports.getUsersInfo = async (ctx) => {
  try {
    const user = await UserInfo.find().exec()
    ctx.body = user
  } catch(e){
    ctx.throw(e, 500)
  }
}

/**
 * 
 * @param {*} ctx 
 * 특정한 유저(id) 가져오기
 */
exports.getUserInfo = (ctx) => {

}

/**
 * 
 * @param {*} ctx 
 * 특정한 유저(id) 삭제
 */
exports.deleteUser = (ctx) => {

}