const mongoose = require('mongoose')
const { Schema } = mongoose

const UserInfo = new Schema({
  username: String,
  email: String,
  birthDate: String,
  joinedDate: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('UserInfo', UserInfo)