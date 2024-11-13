const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller.js');

router.get('/', usersController.getusers);
router.post('/', usersController.createusers);
router.delete('/deleteAll', usersController.deleteAlluserss);

router.put('/:id', usersController.updateUser);  
router.delete('/:id', usersController.deleteUser); 

module.exports = router;