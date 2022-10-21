const mongoose = require('mongoose')
const Schema = mongoose.Schema
const memberSchema = new Schema({
  fistName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('member', memberSchema)