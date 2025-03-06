const express = require('express');
const { getReports, getReport, createReport, updateReport, deleteReport } = require('../controllers/reportController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, getReports);
router.get('/:id', protect, getReport);
router.post('/', protect, createReport);
router.put('/:id', protect, updateReport);
router.delete('/:id', protect, deleteReport);

module.exports = router;
