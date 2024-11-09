const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Đảm bảo bạn có file .env để lưu trữ biến môi trường

const app = express();

// Sử dụng URL từ biến môi trường
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://cuong:cuong@cluster0.ya5c7.mongodb.net/flutter';

// Sử dụng async/await để kết nối MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL); // Không cần thêm các tùy chọn này nữa
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1); // Thoát ứng dụng nếu kết nối thất bại
    }
};

connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
}));

app.use('/uploads', express.static('uploads'));

// Import routes
const TripRoute = require('./api/routes/trip.route');
const usersRoute = require('./api/routes/users.route');
const homeRoute = require('./api/routes/home.route');


// Định nghĩa các route
app.use('/api/user', usersRoute);
app.use('/api/trip', TripRoute);
app.use('/api/home', homeRoute);


// Route gốc
app.get('/', (req, res) => res.send('API is running...'));

// Khởi động server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
