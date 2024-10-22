
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

// Lấy danh sách tất cả địa điểm
router.get('/', usersController.getusers);
router.post('/create', usersController.createusers);
router.delete('/deleteAll', usersController.deleteAlluserss);
// router.post('/login', usersController.loginUser);

module.exports = router;