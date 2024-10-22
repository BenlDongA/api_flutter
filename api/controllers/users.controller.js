

const users = require('../models/users.model');

const usersController = {
    // Lấy danh sách tất cả các địa điểm
    getusers: async (req, res) => {
        try {
            const userss = await users.find();
            res.status(200).json(userss);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching users', error: err.message });
        }
    },

    // Tạo mới một user
    createusers: async (req, res) => {
        try {
            const newUser = new users(req.body); // Đổi tên biến để tránh trùng lặp
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (err) {
            res.status(500).json({ message: 'Error creating user', error: err.message });
        }
    },
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await users.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }
            const isMatch = await bcrypt.compare(password, user.password); // So sánh password
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }
            res.status(200).json({ message: 'Login successful', user });
        } catch (err) {
            res.status(500).json({ message: 'Error logging in', error: err.message });
        }
    },

    // Xóa tất cả users
    deleteAlluserss: async (req, res) => {
        try {
            const result = await users.deleteMany({}); // Xóa tất cả các users
            res.status(200).json({ message: 'All users deleted successfully', result });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting all users', error: err.message });
        }
    }
}

module.exports = usersController;