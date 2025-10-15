# Branch: demo-2-cursor-basic

## What This Branch Demonstrates

This branch shows **basic CRUD operations** implemented with features that **Cursor excels at**:
- Inline code suggestions and completions
- Multi-file awareness (frontend + backend)
- Context understanding across the codebase

## What Was Implemented

### Backend (Express API)
- ✅ `GET /api/tasks` - List all tasks with filtering
- ✅ `POST /api/tasks` - Create new task
- ✅ `GET /api/tasks/:id` - Get single task
- ✅ `GET /api/users` - List all users
- ✅ In-memory data storage (arrays)
- ✅ Input validation and error handling

### Frontend (React + Vite)
- ✅ `TaskList` component - Display tasks with status badges
- ✅ `TaskForm` component - Create new tasks with validation
- ✅ User assignment dropdown
- ✅ Due date picker
- ✅ Real-time API connection status

## Key Learnings: Cursor's Strengths

### 1. Inline Suggestions

When typing in Cursor, you'll see:
```javascript
// Type: "Create a new task"
// Cursor suggests: Full function implementation
const createTask = async (req, res) => { /* ... */ }
```

**Pro tip:** Accept suggestions with Tab, reject with Esc.

### 2. Multi-File Awareness

Cursor knows about related files:
- When you create `TaskList.jsx`, it suggests matching API calls to backend routes
- When you import a component, it autocompletes the correct path
- It understands your project structure without explicit context

### 3. CMD+K for Inline Edits

Highlight code + press `CMD+K`:
```
Prompt: "Add error handling to this function"
Cursor: Automatically adds try-catch and error states
```

### 4. Composer Mode (Multi-File Edits)

Use `CMD+Shift+K` to edit multiple files at once:
```
Prompt: "Add due date filtering to both backend and frontend"
Cursor: Edits backend/src/routes/tasks.js AND frontend/src/components/TaskList.jsx
```

## Workshop Demo Script (15 minutes)

### Part 1: Backend (7 min)

1. **Show empty `tasks.js` route file**
   - Start typing: `// GET /api/tasks`
   - Watch Cursor suggest the full endpoint
   - Accept and show how it infers Express patterns

2. **Add POST endpoint**
   - Type: `// POST /api/tasks - Create new task`
   - Cursor suggests validation, error handling
   - Point out how it matches the coding style from GET endpoint

3. **Show multi-file context**
   - Open `index.js`
   - Start importing `taskRoutes`
   - Cursor autocompletes from the file we just created

### Part 2: Frontend (8 min)

4. **Create TaskList component**
   - New file: `TaskList.jsx`
   - Type: `// Fetch tasks from API and display`
   - Cursor generates: useState, useEffect, fetch logic
   - Show how it knows the API endpoint from backend

5. **Add TaskForm component**
   - Use CMD+K: "Create a form to add new tasks"
   - Cursor generates entire form with validation
   - Point out: It inferred field names from backend model

6. **Fix a deliberate bug**
   - Remove `success` check from API response
   - In Cursor Chat: "Tasks aren't loading, help debug"
   - Show how Cursor identifies the issue

### Key Demo Moments

**"Aha" Moment 1:** When Cursor suggests exact API endpoint URLs from backend
**"Aha" Moment 2:** When Composer mode edits 3 files simultaneously
**"Aha" Moment 3:** When debugging chat finds the bug faster than manual inspection

## Cursor vs Other Tools

| Feature | Cursor | GitHub Copilot | Claude Code |
|---------|--------|----------------|-------------|
| Inline suggestions | ✅ Excellent | ✅ Good | ❌ No |
| Multi-file context | ✅ Yes | ⚠️ Limited | ✅ Yes |
| Chat debugging | ✅ Yes | ⚠️ Limited | ✅ Excellent |
| Autonomous agents | ❌ No | ❌ No | ✅ Yes |
| Plan mode | ❌ No | ❌ No | ✅ Yes |

## Common Questions

**Q: Does Cursor work offline?**
A: No, it requires internet to access AI models.

**Q: Can I use my own AI API key?**
A: Yes, Cursor supports custom OpenAI/Anthropic keys.

**Q: How does Cursor know my codebase?**
A: It indexes your files and uses them as context for suggestions.

**Q: Is it better than Copilot?**
A: Cursor has better multi-file awareness and chat debugging. Copilot integrates tighter with VS Code. Try both!

## Try It Yourself

### Exercise 1: Add Status Filter
Use Cursor to add status filtering (todo/in_progress/done) to the TaskList:
1. Highlight TaskList component
2. CMD+K: "Add a filter dropdown for task status"
3. Watch Cursor edit both state management and UI

### Exercise 2: Add Search
Ask Cursor Chat:
```
"Add a search bar to filter tasks by title. Update both frontend and backend."
```
Watch how it proposes changes to multiple files.

### Exercise 3: Fix Error Handling
Introduce an error (e.g., wrong API endpoint), then ask Cursor:
```
"Debug why tasks aren't loading"
```

## What's Not in This Branch (Coming in demo-3)

- ❌ Update (PUT) functionality
- ❌ Delete (DELETE) functionality
- ❌ Status change UI
- ❌ Advanced filtering

These will be added in `demo-3-cursor-fullstack`.

## How to Run This Branch

### Terminal 1: Start Backend
```bash
cd backend
npm install  # First time only
npm run dev
```
Backend runs on http://localhost:3000

### Terminal 2: Start Frontend
```bash
cd frontend
npm install  # First time only
npm run dev
```
Frontend runs on http://localhost:5173

### Test the API
```bash
# Create a task
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Cursor integration",
    "creator_id": "user-1",
    "assignee_id": "user-2",
    "due_date": "2025-10-20"
  }'

# Get all tasks
curl http://localhost:3000/api/tasks
```

## Next Steps

After this branch, move to:
- **demo-3-cursor-fullstack** - Complete CRUD with Cursor Composer
- **demo-4-claude-planning** - Transition to Claude Code with planning

---

**Branch created:** 2025-10-15
**Demonstrates:** Cursor IDE for basic CRUD operations
**Next branch:** `demo-3-cursor-fullstack`
