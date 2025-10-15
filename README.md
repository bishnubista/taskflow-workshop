# Demo 3: Multi-File Features with Cursor Composer

Learn how to use Cursor Composer for features that span multiple files.

## What You'll Learn

Use Cursor Composer (CMD+I) to enhance the Labels feature - perfect for coordinated changes across backend and frontend.

## What's in This Branch

✅ **New: Complete Labels Feature** (already implemented)
- Backend: Full Labels CRUD API (`/api/labels`)
- Frontend: LabelManager component with color picker
- Multi-file implementation example

✅ **Foundation** (from demos 1-2)
- Task CRUD with label support
- User management
- Task assignment

## Quick Start

```bash
# Terminal 1: Start backend
cd backend
npm install
npm run dev

# Terminal 2: Start frontend
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## Hands-On Exercise

See **[TASK.md](./TASK.md)** for the complete step-by-step exercise (10 minutes).

**Your task:** Choose ONE enhancement to add using Cursor Composer:
- Option A: Add label filtering to tasks
- Option B: Show labels as colored badges on tasks
- Option C: Add label presets for quick creation

## Learning Resources

- **[BRANCH_NOTES.md](./BRANCH_NOTES.md)** - When to use Composer, multi-file workflow
- **[TASK.md](./TASK.md)** - Detailed exercise with 3 enhancement options

## What's Different from Demo 2?

- **Demo 2:** Cursor CMD+K for single-file edits
- **Demo 3:** Cursor Composer for multi-file features (backend + frontend)

**Key difference:** Composer coordinates changes across multiple related files

## Composer Quick Reference

```
1. Press CMD+I (or CTRL+I on Windows)
2. Describe your feature: "Add label filtering to tasks"
3. Composer identifies files to change
4. Review proposed changes
5. Accept all or cherry-pick changes
```

## Example: What Composer Did Here

The Labels feature required changes in **5 files**:
1. `backend/src/routes/labels.js` - CRUD API
2. `backend/src/index.js` - Route registration
3. `backend/src/routes/tasks.js` - Add label_ids field
4. `frontend/src/components/LabelManager.jsx` - UI component
5. `frontend/src/App.jsx` - Render component

Composer handled all of this in one conversation!

## Next Step

After completing the exercise, move to demo-4 for planning and autonomous implementation:

```bash
git checkout demo-4-claude-enhancement
```

---

**Branch Focus:** Cursor Composer for multi-file features
**Exercise Time:** 10 minutes
**Next Branch:** `demo-4-claude-enhancement` (planning & context engineering)
