import express from 'express';

const router = express.Router();

// Pre-seeded users for MVP
const users = [
  {
    id: 'user-1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    created_at: '2025-10-01T00:00:00Z'
  },
  {
    id: 'user-2',
    name: 'Mike Chen',
    email: 'mike@example.com',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    created_at: '2025-10-01T00:00:00Z'
  },
  {
    id: 'user-3',
    name: 'Lisa Patel',
    email: 'lisa@example.com',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    created_at: '2025-10-01T00:00:00Z'
  }
];

// GET /api/users - Get all users
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: users
  });
});

// GET /api/users/:id - Get single user
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found',
      code: 'NOT_FOUND'
    });
  }

  res.json({
    success: true,
    data: user
  });
});

export default router;
