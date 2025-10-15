# Branch: demo-3-cursor-composer

## What This Branch Demonstrates

**Cursor Composer for multi-file features** - showing how to implement a full feature across backend and frontend using Composer mode (CMD+I).

## What's in This Branch

### New: Full Labels Feature
- ✅ Backend: Complete Labels CRUD API
  - GET /api/labels - List all labels
  - POST /api/labels - Create label
  - PUT /api/labels/:id - Update label
  - DELETE /api/labels/:id - Delete label
- ✅ Frontend: Label management UI
  - Create labels with color picker
  - Edit existing labels
  - Delete labels with confirmation
  - Display labels as colored badges

### Foundation (from demo-1 & demo-2)
- ✅ Task CRUD with label support
- ✅ User management
- ✅ Task assignment
- ✅ Backend API (Express)
- ✅ Frontend UI (React)

## Workshop Flow

This is **Phase 3** of the progressive workshop:
1. demo-1: Plan with ChatGPT + basic app
2. demo-2: Quick feature with Cursor CMD+K
3. **demo-3** ← You are here: Full feature with Cursor Composer
4. demo-4: Enhance with Claude Code

## Hands-On Exercise

See `TASK.md` in this branch for the attendee exercise:
- Use Cursor Composer to improve the Labels feature
- Add visual enhancements (better colors, styling)
- Time: 10 minutes

## Key Learning

### When to Use Cursor Composer (CMD+I)
✅ **Good for:**
- Multi-file features (backend + frontend)
- Coordinated changes across related files
- Adding new features that touch multiple components
- Refactoring that spans multiple files

❌ **Not ideal for:**
- Single-file tweaks (use CMD+K instead)
- Large architectural changes (needs planning)
- Changes requiring deep context of entire codebase

### Composer Workflow
1. Press `CMD+I` (or `CTRL+I` on Windows) for floating window
   - Or `CMD+Shift+I` for full-screen mode
2. Type your feature request: "Add label filtering to tasks"
3. Composer identifies all files that need changes
4. Review proposed changes across all files
5. Accept all or cherry-pick specific changes
6. Composer applies changes and shows diffs

### What Composer Did Here
For the Labels feature, Composer handled:
1. **Backend** (`backend/src/routes/labels.js`):
   - Created full CRUD API
   - Added validation
   - Added error handling
2. **Backend** (`backend/src/index.js`):
   - Imported and registered label routes
3. **Backend** (`backend/src/routes/tasks.js`):
   - Added label_ids field to task model
4. **Frontend** (`frontend/src/components/LabelManager.jsx`):
   - Created complete label management UI
   - Added CRUD operations
   - Styled components
5. **Frontend** (`frontend/src/App.jsx`):
   - Imported and rendered LabelManager

That's **5 files** modified/created in one conversation!

## How to Run

```bash
# Terminal 1: Backend
cd backend && npm install && npm run dev

# Terminal 2: Frontend
cd frontend && npm install && npm run dev
```

Open http://localhost:5173

### Try the Labels Feature
1. Click "New Label" button
2. Enter name (e.g., "Bug", "Feature", "Urgent")
3. Pick a color
4. Click "Create"
5. Edit or delete labels as needed

## Next Step

After completing the exercise:
```bash
git checkout demo-4-claude-enhancement
```

See how to use Claude Code for planning and enhancement!

---

**Branch created:** 2025-10-15
**Demonstrates:** Cursor Composer for multi-file implementation
**Next branch:** `demo-4-claude-enhancement`
