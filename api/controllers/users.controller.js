const users = require('../models/users.model');

const usersController = {
    // Lấy danh sách tất cả các địa điểm
    getusers: async (req, res) => {
        try {
            const userss = await users.find();
            res.status(200).json(userss);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching userss', error: err.message });
        }
    },

    // Tạo mới một địa điểm
    createusers: async (req, res) => {
        try {
            const users = new users(req.body);
            const savedusers = await users.save();
            res.status(201).json(savedusers);
        } catch (err) {
            res.status(500).json({ message: 'Error creating users', error: err.message });
        }
    },

    // Xóa tất cả địa điểm
    deleteAlluserss: async (req, res) => {
        try {
            const result = await users.deleteMany({}); // Xóa tất cả các địa điểm
            res.status(200).json({ message: 'All userss deleted successfully', result });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting all userss', error: err.message });
        }
    }
}

module.exports = usersController;
