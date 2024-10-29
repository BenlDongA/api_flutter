const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');


const MONGODB_URL='mongodb+srv://cuong:cuong@cluster0.ya5c7.mongodb.net/flutter'


// Sử dụng async/await để kết nối MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1); // Thoát ứng dụng nếu kết nối thất bại
    }
};


connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

const TripRoute = require('./api/routes/trip.route')
const usersRoute = require('./api/routes/users.route')
const imageRoutes = require('./api/routes/img.route');
app.use("/api/user",usersRoute)
// app.use("/api/user/login",usersRoute)
app.use("/api/trip",TripRoute)
app.use('/api/image', imageRoutes);
app.get('/',(req,res) => res.send(""))


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});