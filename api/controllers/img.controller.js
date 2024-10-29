const multer = require('multer');
const Image = require('../models/img.model');

// Cấu hình Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Đường dẫn thư mục nơi lưu trữ hình ảnh
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Tạo tên tệp duy nhất
    }
});


const upload = multer({ storage: storage });

// Show list of images
exports.getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch images' });
    }
};

// Add a new image (từ ổ cứng)
exports.addImage = (req, res) => {
    const { description } = req.body;
    const url = req.file.path; // Lấy đường dẫn tệp đã tải lên

    const newImage = new Image({ url, description });
    newImage.save()
        .then(() => res.status(201).json(newImage))
        .catch(() => res.status(500).json({ message: 'Failed to add image' }));
};

// Delete an image
exports.deleteImage = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedImage = await Image.findByIdAndDelete(id);
        if (!deletedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete image' });
    }
};

// Export multer middleware
exports.upload = upload.single('image'); // 'image' là tên trường trong form
