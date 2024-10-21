const trip = require('../models/trip.model');

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
            const newTrip = new trip(req.body); // Đổi tên biến
            const savedTrip = await newTrip.save();
            res.status(201).json(savedTrip);
        } catch (err) {
            res.status(500).json({ message: 'Error creating trip', error: err.message });
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
    }
}

module.exports = tripController;
