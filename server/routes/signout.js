var express = require('express');
var router = express.Router();

// var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', function(req, res, next) {
  // 清空 session 中用户信息
  // req.session.user = null;
  // req.flash('success', '登出成功');
  // // 登出成功后跳转到主页
  // res.redirect('/posts');
  var obj = { "origin" : "sign out page date from server" };
  res.send(obj);
});

module.exports = router;
