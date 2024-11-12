
const ImgHome = require('../models/home.model'); 

const imgHomeController = {

    getImgHome: async (req, res) => {
        try {
            const imgHomes = await ImgHome.find();
            res.status(200).json(imgHomes);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching images', error: err.message });
        }
    },

  
    createImgHome: async (req, res) => {
        try {
            const newImgHome = new ImgHome(req.body);
            const savedImgHome = await newImgHome.save();
            res.status(201).json(savedImgHome);
        } catch (err) {
            res.status(500).json({ message: 'Error creating image home', error: err.message });
        }
    },

    
    deleteAllImgHomes: async (req, res) => {
        try {
            const result = await ImgHome.deleteMany({});
            res.status(200).json({ message: 'All image homes deleted successfully', result });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting all image homes', error: err.message });
        }
    },


    deleteImgHomeById: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedImgHome = await ImgHome.findByIdAndDelete(id);
            if (!deletedImgHome) {
                return res.status(404).json({ message: 'Image home not found' });
            }
            res.status(200).json({ message: 'Image home deleted successfully', deletedImgHome });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting image home by ID', error: err.message });
        }
    },

   
    updateImgHomeById: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedImgHome = await ImgHome.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedImgHome) {
                return res.status(404).json({ message: 'Image home not found' });
            }
            res.status(200).json({ message: 'Image home updated successfully', updatedImgHome });
        } catch (err) {
            res.status(500).json({ message: 'Error updating image home by ID', error: err.message });
        }
    }
}

module.exports = imgHomeController;
