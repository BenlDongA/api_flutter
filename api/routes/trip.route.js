// trip.route.js
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip.controller.js');
router.get('/', tripController.gettrip);
router.post('/', tripController.createTrip);
router.delete('/:id', tripController.deleteTrip); 
router.delete('/deleteAll', tripController.deleteAlltrips);
router.put('/:id', tripController.updateTrip); // Route cho chức năng update

module.exports = router;
