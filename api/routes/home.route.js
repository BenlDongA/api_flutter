
const express = require('express');
const router = express.Router();
const imgHomeController = require('../controllers/home.controllers');
router.get('/', imgHomeController.getImgHome);
router.post('/', imgHomeController.createImgHome);
router.delete('/deleteAll', imgHomeController.deleteAllImgHomes);
router.delete('/:id', imgHomeController.deleteImgHomeById);
router.put('/:id', imgHomeController.updateImgHomeById);


module.exports = router;
