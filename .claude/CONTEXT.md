# TaskFlow Project Context

## Project Overview

TaskFlow is a workshop demo application showcasing AI-assisted development tools. It's a task management system with labels, built progressively across 4 demo branches.

## Architecture

### Backend (Express.js)
- **Framework**: Express.js with ES6 modules
- **Storage**: In-memory arrays (no database for simplicity)
- **API Pattern**: RESTful with `{ success, data/error }` response format
- **Port**: 3000

### Frontend (React + Vite)
- **Framework**: React 18 with hooks
- **Bundler**: Vite
- **Styling**: Inline CSS-in-JS (no CSS framework)
- **Port**: 5173

## Coding Conventions

### Backend
```javascript
// Always use ES6 imports
import express from 'express';

// Consistent response format
res.json({ success: true, data: result });
res.status(400).json({ success: false, error: 'Message', code: 'ERROR_CODE' });

// Always add validation
if (!requiredField) {
  return res.status(400).json({ ... });
}
```

### Frontend
```javascript
// Use functional components with hooks
function MyComponent() {
  const [state, setState] = useState(null);

  // Fetch on mount
  useEffect(() => {
    fetchData();
  }, []);
}

// Inline styles for simplicity
const styles = {
  container: { padding: '20px' }
};
```

## Key Constraints

1. **No external databases**: Use in-memory arrays only
2. **No CSS frameworks**: Keep it simple with inline styles
3. **No authentication**: Out of scope for workshop
4. **Educational focus**: Code clarity over performance
5. **Workshop-friendly**: Features should be completable in 5-15 minutes

## Data Models

### Task
```javascript
{
  id: 'task-1',
  title: string,
  description: string | null,
  status: 'todo' | 'in_progress' | 'done',
  assignee_id: string | null,
  creator_id: string,
  due_date: string | null,
  label_ids: string[],
  created_at: ISO8601,
  updated_at: ISO8601,
  completed_at: ISO8601 | null
}
```

### Label
```javascript
{
  id: 'label-1',
  name: string,
  color: '#RRGGBB',
  created_at: ISO8601
}
```

## Feature Implementation Guidelines

When adding new features:

1. **Start with backend API first**
   - Add routes to `/backend/src/routes/`
   - Add validation
   - Return consistent response format

2. **Then build frontend**
   - Create component in `/frontend/src/components/`
   - Use hooks for state management
   - Handle loading/error states

3. **Keep it simple**
   - Workshop attendees should understand the code
   - Avoid over-engineering
   - Inline styles are fine

4. **Test manually**
   - Start both servers
   - Test happy path and error cases
   - Verify in browser

## Common Patterns

### Creating a new resource
```javascript
// Backend
router.post('/api/resources', (req, res) => {
  // 1. Validate input
  // 2. Check for duplicates
  // 3. Create resource
  // 4. Return 201 with resource
});

// Frontend
const handleCreate = async () => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  if (result.success) {
    // Update state
  }
};
```

## Workshop Context

This project is used to teach:
- **Demo 1**: ChatGPT for planning
- **Demo 2**: Cursor CMD+K for quick edits
- **Demo 3**: Cursor Composer for multi-file features
- **Demo 4**: Claude Code for planning & enhancement

Each demo builds on the previous one.
