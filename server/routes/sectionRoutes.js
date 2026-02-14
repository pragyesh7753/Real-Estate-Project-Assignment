const express = require('express');
const router = express.Router();
const {
    getAllSections,
    getSectionByName,
    updateSection,
} = require('../controllers/sectionController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllSections);
router.get('/:sectionName', getSectionByName);
router.put('/:id', authMiddleware, updateSection);

module.exports = router;
