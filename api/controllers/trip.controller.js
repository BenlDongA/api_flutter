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
          const trips = req.body;
      
          // Kiểm tra xem dữ liệu có phải là mảng
          if (!Array.isArray(trips)) {
            return res.status(400).json({
              message: "Invalid input. Expected an array of trips.",
            });
          }
      
          // Kiểm tra từng chuyến đi trong mảng có đầy đủ trường bắt buộc
          const missingFields = trips.filter(
            (trip) =>
              !trip.name || !trip.avatar || !trip.price || !trip.date || !trip.duration
          );
      
          if (missingFields.length > 0) {
            return res.status(400).json({
              message: "Some trips have missing required fields.",
              missingFields: missingFields,
            });
          }
      
          // Lưu toàn bộ mảng chuyến đi vào database
          const savedTrips = await trip.insertMany(trips);
          res.status(201).json(savedTrips);
        } catch (err) {
          console.error("Error creating trips:", err);
          res.status(500).json({ message: "Error creating trips", error: err.message });
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
