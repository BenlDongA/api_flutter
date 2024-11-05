// route
const express = require('express');
const router = express.Router();
const imgHomeController = require('../controllers/home.controllers');

// Lấy danh sách tất cả địa điểm
router.get('/', imgHomeController.getImgHome);

// Tạo mới một địa điểm
router.post('/create', imgHomeController.createImgHome);
router.delete('/deleteAll', imgHomeController.deleteAllImgHomes);

module.exports = router;
