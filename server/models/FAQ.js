const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: [true, 'Please add a question'],
            trim: true,
        },
        answer: {
            type: String,
            required: [true, 'Please add an answer'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('FAQ', faqSchema);
