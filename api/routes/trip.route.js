
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip.controller.js');

// Lấy danh sách tất cả địa điểm
router.get('/', tripController.gettrip);

// Tạo mới một địa điểm
router.post('/create', tripController.createTrip);
router.delete('/deleteAll', tripController.deleteAlltrips);

module.exports = router;