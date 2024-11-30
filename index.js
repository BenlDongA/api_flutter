const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 

const app = express();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://cuong:cuong@cluster0.mc5n4.mongodb.net/';
mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to the database successfully'))
    .catch((error) => {
        console.error('Error connecting to the database', error);
        process.exit(1);
    });




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
}));

app.use('/uploads', express.static('uploads'));
const TripRoute = require('./api/routes/trip.route');
const usersRoute = require('./api/routes/users.route');
const homeRoute = require('./api/routes/home.route');


app.use('/api/user', usersRoute);
app.use('/api/trip', TripRoute);
app.use('/api/home', homeRoute);


app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
