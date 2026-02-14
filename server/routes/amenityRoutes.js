const express = require('express');
const router = express.Router();
const {
    getAllAmenities,
    createAmenity,
    updateAmenity,
    deleteAmenity,
} = require('../controllers/amenityController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllAmenities);
router.post('/', authMiddleware, createAmenity);
router.put('/:id', authMiddleware, updateAmenity);
router.delete('/:id', authMiddleware, deleteAmenity);

module.exports = router;
