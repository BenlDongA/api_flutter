// trip.controller.js
const trip = require('../models/trip.model.js');
const mongoose = require('mongoose');
const tripController = {
    // Lấy danh sách tất cả các địa điểm
    gettrip: async (req, res) => {
        try {
            const trips = await trip.find();
            res.status(200).json(trips);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching trips', error: err.message });
        }
    },

    // Tạo mới một địa điểm
    createTrip: async (req, res) => {
        try {
            const newTrip = new trip(req.body);
            const savedTrip = await newTrip.save();
            res.status(201).json(savedTrip);
        } catch (err) {
            res.status(500).json({ message: 'Error creating trip', error: err.message });
        }
    },
    deleteTrip: async (req, res) => {
        const { id } = req.params; // Lấy ID từ params

        try {
            const deletedTrip = await trip.findByIdAndDelete(id);
            if (!deletedTrip) {
                return res.status(404).json({ message: 'Trip not found' });
            }
            res.status(200).json({ message: 'Trip deleted successfully' });
        } catch (err) {
            console.error('Error deleting trip:', err);
            res.status(500).json({ message: 'Error deleting trip', error: err.message });
        }
    },
    // Xóa tất cả địa điểm
    deleteAlltrips: async (req, res) => {
        try {
            const result = await trip.deleteMany({}); // Xóa tất cả các địa điểm
            res.status(200).json({ message: 'All trips deleted successfully', result });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting all trips', error: err.message });
        }
    },
    updateTrip: async (req, res) => {
        const { id } = req.params; // Lấy ID từ params
        const updateData = req.body; // Lấy dữ liệu cần cập nhật từ body
    
        try {
            // Tìm chuyến đi theo ID và cập nhật dữ liệu
            const updatedTrip = await trip.findByIdAndUpdate(id, updateData, { new: true });
            
            if (!updatedTrip) {
                return res.status(404).json({ message: 'Trip not found' });
            }
    
            res.status(200).json(updatedTrip);
        } catch (err) {
            console.error('Error updating trip:', err);
            res.status(500).json({ message: 'Error updating trip', error: err.message });
        }
    }
    
};

module.exports = tripController;
