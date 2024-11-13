const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller.js');

router.get('/', usersController.getusers);
router.post('/', usersController.createSingleUser);
router.post('/create', usersController.createMultipleUsers);
router.delete('/deleteAll', usersController.deleteAllUsers);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
