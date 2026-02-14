const Amenity = require('../models/Amenity');

// @desc    Get all amenities
// @route   GET /api/amenities
// @access  Public
const getAllAmenities = async (req, res) => {
    try {
        const amenities = await Amenity.find({}).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: amenities.length,
            data: amenities,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Create amenity
// @route   POST /api/amenities
// @access  Private
const createAmenity = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a title',
            });
        }

        const amenity = await Amenity.create({
            title,
            description: description || '',
        });

        res.status(201).json({
            success: true,
            message: 'Amenity created successfully',
            data: amenity,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Update amenity
// @route   PUT /api/amenities/:id
// @access  Private
const updateAmenity = async (req, res) => {
    try {
        const { title, description } = req.body;

        const amenity = await Amenity.findById(req.params.id);

        if (!amenity) {
            return res.status(404).json({
                success: false,
                message: 'Amenity not found',
            });
        }

        amenity.title = title !== undefined ? title : amenity.title;
        amenity.description = description !== undefined ? description : amenity.description;

        const updatedAmenity = await amenity.save();

        res.status(200).json({
            success: true,
            message: 'Amenity updated successfully',
            data: updatedAmenity,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Delete amenity
// @route   DELETE /api/amenities/:id
// @access  Private
const deleteAmenity = async (req, res) => {
    try {
        const amenity = await Amenity.findById(req.params.id);

        if (!amenity) {
            return res.status(404).json({
                success: false,
                message: 'Amenity not found',
            });
        }

        await amenity.deleteOne();

        res.status(200).json({
            success: true,
            message: 'Amenity deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

module.exports = {
    getAllAmenities,
    createAmenity,
    updateAmenity,
    deleteAmenity,
};
