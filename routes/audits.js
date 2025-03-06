const express = require('express');
const { getAudits, getAudit, createAudit, updateAudit, deleteAudit } = require('../controllers/auditController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, getAudits);
router.get('/:id', protect, getAudit);
router.post('/', protect, createAudit);
router.put('/:id', protect, updateAudit);
router.delete('/:id', protect, deleteAudit);

module.exports = router;