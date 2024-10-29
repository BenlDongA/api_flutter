const express = require('express');
const router = express.Router();
const imageController = require('../controllers/img.controller');

// Get list of images
router.get('/', imageController.getImages);

// Add a new image
router.post('/', imageController.upload, imageController.addImage); // Thêm middleware upload

// Delete an image
router.delete('/:id', imageController.deleteImage);

module.exports = router;
