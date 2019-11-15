// 引入express
const express = require('express');

// 创建新的路由器对象
const router = express.Router();

// 引入user
const User = require('./user');

// 进入子路由
router.use('/user',User);

// 导出路由对象
module.exports = router;