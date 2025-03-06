const express = require('express');
const { getChecklists, getChecklist, createChecklist, updateChecklist, deleteChecklist } = require('../controllers/checklistController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, getChecklists);
router.get('/:id', protect, getChecklist);
router.post('/', protect, createChecklist);
router.put('/:id', protect, updateChecklist);
router.delete('/:id', protect, deleteChecklist);

module.exports = router;