// model
const mongoose = require('mongoose');

const imgHomeSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true // URL or path to the image
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
