// routes/user.js

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller.js');

// Các route hiện tại
router.get('/', usersController.getusers);
router.post('/', usersController.createusers);
router.delete('/deleteAll', usersController.deleteAlluserss);

router.put('/:id', usersController.updateUser);  // Sửa người dùng
router.delete('/:id', usersController.deleteUser);  // Xóa người dùng

module.exports = router;
