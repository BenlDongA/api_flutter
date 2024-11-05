// controller
const ImgHome = require('../models/home.model'); // Update path if necessary

const imgHomeController = {
    // Lấy danh sách tất cả các địa điểm
    getImgHome: async (req, res) => {
        try {
            const imgHomes = await ImgHome.find();
            res.status(200).json(imgHomes);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching images', error: err.message });
        }
    },

    // Tạo mới một địa điểm
    createImgHome: async (req, res) => {
        try {
            const newImgHome = new ImgHome(req.body);
            const savedImgHome = await newImgHome.save();
            res.status(201).json(savedImgHome);
        } catch (err) {
            res.status(500).json({ message: 'Error creating image home', error: err.message });
        }
    },

    // Xóa tất cả địa điểm
    deleteAllImgHomes: async (req, res) => {
        try {
            const result = await ImgHome.deleteMany({});
            res.status(200).json({ message: 'All image homes deleted successfully', result });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting all image homes', error: err.message });
        }
    }
}

module.exports = imgHomeController;
