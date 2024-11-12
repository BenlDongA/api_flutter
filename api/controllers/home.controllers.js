const Home = require('../models/home.model');

// Get all images
exports.getImgHome = async (req, res) => {
  try {
    const homes = await Home.find();
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

// Create a new home
exports.createImgHome = async (req, res) => {
  try {
    const newHome = new Home(req.body);
    await newHome.save();
    res.status(201).json(newHome);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create data' });
  }
};

// Update a home by ID
exports.updateImgHomeById = async (req, res) => {
  try {
    const updatedHome = await Home.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedHome) {
      return res.status(404).json({ error: 'Home not found' });
    }
    res.status(200).json(updatedHome);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update data' });
  }
};

// Delete a home by ID
exports.deleteImgHomeById = async (req, res) => {
  try {
    const deletedHome = await Home.findByIdAndDelete(req.params.id);
    if (!deletedHome) {
      return res.status(404).json({ error: 'Home not found' });
    }
    res.status(200).json({ message: 'Home deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete data' });
  }
};

// Delete all homes
exports.deleteAllImgHomes = async (req, res) => {
  try {
    await Home.deleteMany();
    res.status(200).json({ message: 'All homes deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete data' });
  }
};
