
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

// Lấy danh sách tất cả địa điểm
router.get('/', usersController.getusers);

// Tạo mới một địa điểm
router.post('/create', usersController.createusers);
router.delete('/deleteAll', usersController.deleteAlluserss);

module.exports = router;