const Section = require('../models/Section');

// @desc    Get all sections
// @route   GET /api/sections
// @access  Public
const getAllSections = async (req, res) => {
    try {
        const sections = await Section.find({});

        res.status(200).json({
            success: true,
            count: sections.length,
            data: sections,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Get section by sectionName
// @route   GET /api/sections/:sectionName
// @access  Public
const getSectionByName = async (req, res) => {
    try {
        const section = await Section.findOne({ sectionName: req.params.sectionName });

        if (!section) {
            return res.status(404).json({
                success: false,
                message: 'Section not found',
            });
        }

        res.status(200).json({
            success: true,
            data: section,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Update section
// @route   PUT /api/sections/:id
// @access  Private
const updateSection = async (req, res) => {
    try {
        const { title, subtitle, description } = req.body;

        const section = await Section.findById(req.params.id);

        if (!section) {
            return res.status(404).json({
                success: false,
                message: 'Section not found',
            });
        }

        // Update fields
        section.title = title !== undefined ? title : section.title;
        section.subtitle = subtitle !== undefined ? subtitle : section.subtitle;
        section.description = description !== undefined ? description : section.description;

        const updatedSection = await section.save();

        res.status(200).json({
            success: true,
            message: 'Section updated successfully',
            data: updatedSection,
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
    getAllSections,
    getSectionByName,
    updateSection,
};
