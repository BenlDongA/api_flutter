const users = require('../models/users.model.js');

const usersController = {
    getusers: async (req, res) => {
        try {
            const usersList = await users.find();
            res.status(200).json(usersList);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching users', error: err.message });
        }
    },

    createSingleUser: async (req, res) => {
        try {
            const { email, name, password, countryName } = req.body;
            if (!email || !name || !password || !countryName) {
                return res.status(400).json({ message: 'All fields (email, name, password, countryName) are required' });
            }
            const existingUser = await users.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const newUser = new users({ email, name, password, countryName });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (err) {
            res.status(500).json({ message: 'Error creating user', error: err.message });
        }
    },
    
    createMultipleUsers: async (req, res) => {
        try {
            const usersData = req.body;

            if (!Array.isArray(usersData)) {
                return res.status(400).json({ message: 'Input should be an array of user objects' });
            }

            for (const user of usersData) {
                const { email, name, password, countryName } = user;
                if (!email || !name || !password || !countryName) {
                    return res.status(400).json({ message: 'Each user must have email, name, password, and countryName' });
                }
                const existingUser = await users.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ message: `Email ${email} already exists` });
                }
            }

            const savedUsers = await users.insertMany(usersData);
            res.status(201).json(savedUsers);
        } catch (err) {
            res.status(500).json({ message: 'Error creating users', error: err.message });
        }
    },

    deleteAllUsers: async (req, res) => {
        try {
            const result = await users.deleteMany({});
            res.status(200).json({ message: 'All users deleted successfully', result });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting all users', error: err.message });
        }
    },

    deleteUser: async (req, res) => {
        const userId = req.params.id;

        try {
            const deletedUser = await users.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting user', error: err.message });
        }
    },

    updateUser: async (req, res) => {
        const userId = req.params.id;
        const updates = req.body;

        try {
            const updatedUser = await users.findByIdAndUpdate(userId, updates, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json({ message: 'Error updating user', error: err.message });
        }
    }
};

module.exports = usersController;