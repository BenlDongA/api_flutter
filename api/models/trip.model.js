const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: Number,
        required: true
    },
    solike: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
