// model
const mongoose = require('mongoose');

const imgHomeSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    locationName: {
        type: String,
        required: true
    },
    countryName: {
        type: String,
        required: true
    },
    tpye_home: {  
        type: String,
        required: false 
    }
}, { timestamps: true });

module.exports = mongoose.model('ImgHome', imgHomeSchema);
