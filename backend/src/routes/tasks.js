import express from 'express';

const router = express.Router();

// In-memory storage for MVP
const tasks = [];
const users = [
  { id: 'user-1', name: 'Sarah Johnson', email: 'sarah@example.com' },
  { id: 'user-2', name: 'Mike Chen', email: 'mike@example.com' },
  { id: 'user-3', name: 'Lisa Patel', email: 'lisa@example.com' }
];

// Helper to generate simple IDs
let taskIdCounter = 1;
const generateId = () => `task-${taskIdCounter++}`;

// GET /api/tasks - Get all tasks
router.get('/', (req, res) => {
  try {
    const { status, assignee } = req.query;

    let filteredTasks = [...tasks];

    // Filter by status if provided
    if (status && status !== 'all') {
      filteredTasks = filteredTasks.filter(task => task.status === status);
    }

    // Filter by assignee if provided
    if (assignee) {
      if (assignee === 'unassigned') {
        filteredTasks = filteredTasks.filter(task => !task.assignee_id);
      } else {
        filteredTasks = filteredTasks.filter(task => task.assignee_id === assignee);
      }
    }

    // Sort by created_at (newest first)
    filteredTasks.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    res.json({
      success: true,
      data: filteredTasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch tasks',
      code: 'SERVER_ERROR'
    });
  }
});

// GET /api/tasks/:id - Get single task
router.get('/:id', (req, res) => {
  try {
    const task = tasks.find(t => t.id === req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Task not found',
        code: 'NOT_FOUND'
      });
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch task',
      code: 'SERVER_ERROR'
    });
  }
});

// POST /api/tasks - Create new task
router.post('/', (req, res) => {
  try {
    const { title, description, assignee_id, creator_id, due_date } = req.body;

    // Validation
    if (!title || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required',
        code: 'VALIDATION_ERROR'
      });
    }

    if (!creator_id) {
      return res.status(400).json({
        success: false,
        error: 'Creator ID is required',
        code: 'VALIDATION_ERROR'
      });
    }

    // Find creator
    const creator = users.find(u => u.id === creator_id);
    if (!creator) {
      return res.status(404).json({
        success: false,
        error: 'Creator not found',
        code: 'NOT_FOUND'
      });
    }

    // Find assignee if provided
    let assignee = null;
    if (assignee_id) {
      assignee = users.find(u => u.id === assignee_id);
      if (!assignee) {
        return res.status(404).json({
          success: false,
          error: 'Assignee not found',
          code: 'NOT_FOUND'
        });
      }
    }

    const now = new Date().toISOString();

    const newTask = {
      id: generateId(),
      title: title.trim(),
      description: description || null,
      status: 'todo',
      assignee_id: assignee_id || null,
      assignee: assignee || null,
      creator_id,
      creator,
      due_date: due_date || null,
      created_at: now,
      updated_at: now,
      completed_at: null
    };

    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create task',
      code: 'SERVER_ERROR'
    });
  }
});

export default router;
