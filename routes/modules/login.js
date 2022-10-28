const express = require('express')
const router = express.Router()
const User = require('../../models/member')

router.get('/', (req, res) => {
  res.render('login')
})
router.post('/', (req, res) => {
  // 從DB比對帳密是否正確
  User.findOne({ $and: [{ email: req.body.userEmail }, { password: req.body.userPassword }] })
    .then(Userdata => {
      // 比對正確進入歡迎頁面(home)
      if (!Userdata) {
        let incorrect = true
        return res.render('login', { wrongMessage: 'The username or password you entered is incorrect, please try again.', incorrect })
      }
      // 比對不正確
      // 提示username 或 password錯誤，並回到登入畫面

      return res.render('home', { firstName: Userdata.firstName })
    })
})

module.exports = router