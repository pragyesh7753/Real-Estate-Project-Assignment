const FAQ = require('../models/FAQ');

// @desc    Get all FAQs
// @route   GET /api/faqs
// @access  Public
const getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find({}).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: faqs.length,
            data: faqs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Create FAQ
// @route   POST /api/faqs
// @access  Private
const createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        if (!question || !answer) {
            return res.status(400).json({
                success: false,
                message: 'Please provide both question and answer',
            });
        }

        const faq = await FAQ.create({
            question,
            answer,
        });

        res.status(201).json({
            success: true,
            message: 'FAQ created successfully',
            data: faq,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Update FAQ
// @route   PUT /api/faqs/:id
// @access  Private
const updateFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        const faq = await FAQ.findById(req.params.id);

        if (!faq) {
            return res.status(404).json({
                success: false,
                message: 'FAQ not found',
            });
        }

        faq.question = question !== undefined ? question : faq.question;
        faq.answer = answer !== undefined ? answer : faq.answer;

        const updatedFAQ = await faq.save();

        res.status(200).json({
            success: true,
            message: 'FAQ updated successfully',
            data: updatedFAQ,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Delete FAQ
// @route   DELETE /api/faqs/:id
// @access  Private
const deleteFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);

        if (!faq) {
            return res.status(404).json({
                success: false,
                message: 'FAQ not found',
            });
        }

        await faq.deleteOne();

        res.status(200).json({
            success: true,
            message: 'FAQ deleted successfully',
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
    getAllFAQs,
    createFAQ,
    updateFAQ,
    deleteFAQ,
};
