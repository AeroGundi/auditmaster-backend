const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// Importación correcta de rutas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const checklistRoutes = require('./routes/checklists');
const auditRoutes = require('./routes/audits');
const reportRoutes = require('./routes/reports');
const notificationRoutes = require('./routes/notifications');

// Uso correcto de rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/checklists', checklistRoutes);
app.use('/api/audits', auditRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/notifications', notificationRoutes);

app.get('/', (req, res) => res.send('API AuditMaster Pro funcionando'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
