const express = require('express');
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth'); // ← Asegurar que está bien importado

const router = express.Router();

router.get('/', protect, authorize('Administrador'), getUsers);
router.get('/:id', protect, getUser);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, authorize('Administrador'), deleteUser);

module.exports = router;
