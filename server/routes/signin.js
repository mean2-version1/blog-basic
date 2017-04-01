var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var UserModel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/', function(req, res, next) {
  //res.render('signin');
  var obj = {"origin" : "sign page from server"};
  // res.setHeader('Content-Type', 'application/json');
  res.send(obj);
});

// POST /signin 用户登录
router.post('/', function(req, res, next) {
  var name = req.fields.username;
  var password = req.fields.password;
  var data = {};

  UserModel.getUserByName(name)
    .then(function (user) {
      if (!user) {
        data = {"validity": false, "msg" : "Username does not exist"};
        return res.send(data);
      }
      // 检查密码是否匹配
      if (sha1(password) !== user.password) {
        data = {"validity": false, "msg" : "Password does not exist"};
        return res.send(data);
      }

      data = {"validity": true, "msg" : "Log in successfully!"};
      // 用户信息写入 session
      delete user.password;
      req.session.user = user;
      // 跳转到主页
      res.send(data);
    })
    .catch(next);
});

module.exports = router;
