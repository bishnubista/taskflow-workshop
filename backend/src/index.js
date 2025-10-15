import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks.js';
import userRoutes from './routes/users.js';
import labelRoutes from './routes/labels.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'TaskFlow API is running' });
});

// API Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/labels', labelRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`TaskFlow API listening on port ${PORT}`);
});

export default app;
