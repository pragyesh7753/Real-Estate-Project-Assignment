const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema(
    {
        sectionName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        content: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Section', sectionSchema);
