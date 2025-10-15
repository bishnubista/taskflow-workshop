# Branch: demo-2-cursor-basic

## What This Branch Demonstrates

**Cursor CMD+K for quick feature additions** - showing how to use inline AI edits to add a simple feature quickly.

## What's in This Branch

### Same Foundation as Demo-1
- ✅ Basic task CRUD (Create, Read)
- ✅ User management
- ✅ Task assignment
- ✅ Backend API (Express)
- ✅ Frontend UI (React)

### No New Features Yet
This branch has the same code as demo-1. The exercise is to ADD a new feature using Cursor.

## Workshop Flow

This is **Phase 2** of the progressive workshop:
1. demo-1: Plan with ChatGPT + basic app ← Built on this
2. **demo-2** ← You are here: Quick feature with Cursor CMD+K
3. demo-3: Build Labels with Cursor Composer
4. demo-4: Enhance with Claude Code

## Hands-On Exercise

See `TASK.md` in this branch for the attendee exercise:
- Use Cursor CMD+K to add a "Clear Completed" button
- Learn inline AI editing workflow
- Time: 5 minutes

## Key Learning

### When to Use Cursor CMD+K
✅ **Good for:**
- Single-file edits
- Small feature additions (button, form field)
- Quick refactoring
- Bug fixes in one function

❌ **Not ideal for:**
- Multi-file features (use Composer instead)
- Large refactors across codebase
- Features requiring planning

### CMD+K Workflow
1. Highlight the code you want to modify
2. Press `CMD+K` (or `CTRL+K` on Windows)
3. Type what you want: "Add a Clear Completed button"
4. Cursor suggests changes
5. Accept (Enter) or reject (Esc)

## How to Run

```bash
# Terminal 1: Backend
cd backend && npm install && npm run dev

# Terminal 2: Frontend
cd frontend && npm install && npm run dev
```

Open http://localhost:5173

## Next Step

After completing the exercise:
```bash
git checkout demo-3-cursor-composer
```

See how to build a full Labels feature with Cursor Composer!

---

**Branch created:** 2025-10-15
**Demonstrates:** Cursor CMD+K for quick feature additions
**Next branch:** `demo-3-cursor-composer`
