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

// @desc    Create a new section
// @route   POST /api/sections
// @access  Private
const createSection = async (req, res) => {
    try {
        const { sectionName, title, subtitle, description, content, imageUrl } = req.body;

        if (!sectionName) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a section name',
            });
        }

        const sectionExists = await Section.findOne({ sectionName });

        if (sectionExists) {
            return res.status(400).json({
                success: false,
                message: 'Section already exists',
            });
        }

        const section = await Section.create({
            sectionName,
            title: title || '',
            subtitle: subtitle || '',
            description: description || '',
            content: content || {},
            imageUrl: imageUrl || '',
        });

        res.status(201).json({
            success: true,
            message: 'Section created successfully',
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
        const { title, subtitle, description, content, imageUrl } = req.body;

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
        section.content = content !== undefined ? content : section.content;
        section.imageUrl = imageUrl !== undefined ? imageUrl : section.imageUrl;

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
    createSection,
    updateSection,
};
