const express = require('express');
const router = express.Router();
const {
    getAllFAQs,
    createFAQ,
    updateFAQ,
    deleteFAQ,
} = require('../controllers/faqController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllFAQs);
router.post('/', authMiddleware, createFAQ);
router.put('/:id', authMiddleware, updateFAQ);
router.delete('/:id', authMiddleware, deleteFAQ);

module.exports = router;
