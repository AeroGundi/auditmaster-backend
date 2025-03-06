const express = require('express');
const { register, login, getMe } = require('../controllers/authController'); // Asegurar que los controladores existen
const { protect } = require('../middleware/auth'); // Middleware de autenticación

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
