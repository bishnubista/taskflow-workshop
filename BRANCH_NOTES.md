# Branch: demo-1-chatgpt-planning

## What This Branch Demonstrates

**ChatGPT for product planning** + **Basic CRUD implementation** - showing how to plan features with AI before building.

## What's in This Branch

### Working Application
- ✅ Basic task CRUD (Create, Read)
- ✅ User management
- ✅ Task assignment
- ✅ Backend API (Express)
- ✅ Frontend UI (React)

### ChatGPT Planning Docs
- ✅ `docs/labels-feature-plan.md` - ChatGPT brainstorm for Labels feature
- ✅ `docs/labels-api-design.md` - API design for Labels
- ✅ Shows planning workflow before coding

## Workshop Flow

This is **Phase 1** of the progressive workshop:
1. **demo-1** ← You are here: Plan with ChatGPT + basic app
2. demo-2: Add features with Cursor
3. demo-3: Build Labels with Cursor Composer
4. demo-4: Enhance with Claude Code

## Hands-On Exercise

See `TASK.md` in this branch for the attendee exercise:
- Use ChatGPT to plan a "Task Priority" feature
- Compare your plan to the Labels plan provided
- Time: 5 minutes

## Key Learning

✅ **Always plan before coding**
- ChatGPT helps structure your thoughts
- Creates clear requirements and API contracts
- Saves debugging time later

❌ **Don't just start coding**
- Without a plan, features drift
- Hard to estimate or track progress
- More bugs and rework

## How to Run

```bash
# Terminal 1: Backend
cd backend && npm install && npm run dev

# Terminal 2: Frontend
cd frontend && npm install && npm run dev
```

Open http://localhost:5173

## Next Step

After planning your feature with ChatGPT:
```bash
git checkout demo-2-cursor-basic
```

See how to implement features quickly with Cursor!

---

**Branch created:** 2025-10-15
**Demonstrates:** ChatGPT planning + working foundation
**Next branch:** `demo-2-cursor-basic`
