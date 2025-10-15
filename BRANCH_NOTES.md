# Branch: demo-4-claude-enhancement

## What This Branch Demonstrates

**Claude Code for planning and complex features** - showing how context engineering and planning mode enable sophisticated feature implementation.

## What's in This Branch

### New: Context Engineering Files
- ✅ `.claude/CONTEXT.md` - Project context for Claude Code
- ✅ `.claude/README.md` - Explanation of context files
- ✅ `PLAN.md` - Detailed analytics feature plan

### Foundation (from demos 1-3)
- ✅ Full Labels CRUD feature
- ✅ Task management with labels
- ✅ User assignment
- ✅ Backend API (Express)
- ✅ Frontend UI (React)

## Workshop Flow

This is **Phase 4** (Final) of the progressive workshop:
1. demo-1: Plan with ChatGPT + basic app
2. demo-2: Quick feature with Cursor CMD+K
3. demo-3: Full feature with Cursor Composer
4. **demo-4** ← You are here: Planning & enhancement with Claude Code

## Hands-On Exercise

See `TASK.md` in this branch for the attendee exercise:
- Use Claude Code to implement the Analytics Dashboard
- Learn planning mode and context engineering
- Time: 20 minutes

## Key Learning

### What Makes Claude Code Different?

| Feature | ChatGPT | Cursor | Claude Code |
|---------|---------|--------|-------------|
| Code generation | ❌ No | ✅ Yes | ✅ Yes |
| Multi-file editing | ❌ No | ✅ Yes | ✅ Yes |
| Planning mode | ⚠️ Manual | ❌ No | ✅ Built-in |
| Context engineering | ⚠️ Manual | ⚠️ Limited | ✅ Automatic |
| Autonomous agents | ❌ No | ❌ No | ✅ Yes |
| Codebase understanding | ❌ No | ⚠️ Good | ✅ Excellent |

### When to Use Claude Code

✅ **Claude Code excels at:**
- Complex features requiring planning
- Features needing deep codebase understanding
- Architectural decisions
- Refactoring across many files
- Long-running autonomous tasks
- Building features from scratch with context

❌ **Not ideal for:**
- Quick single-line edits (use Cursor CMD+K)
- When you know exactly what to change (use Cursor)
- Simple copy-paste tasks
- Exploratory coding without clear requirements

### Context Engineering

Claude Code reads project context from:

1. **`.claude/CONTEXT.md`**
   - Project architecture
   - Coding conventions
   - Data models
   - Common patterns

2. **`PLAN.md` files**
   - Feature specifications
   - Implementation phases
   - Success criteria

3. **Existing code**
   - Analyzes patterns
   - Understands relationships
   - Follows established conventions

**Why this matters:**
- Reduces repetitive explanations
- Ensures consistency
- Improves first-attempt accuracy
- Faster implementation

### Planning Mode Workflow

1. **Create PLAN.md**
   - Define feature clearly
   - Break into phases
   - List success criteria

2. **Use Claude Code Plan Mode**
   - Command: "Read PLAN.md and review the analytics feature"
   - Claude analyzes feasibility
   - Suggests improvements
   - Identifies risks

3. **Implement Phase-by-Phase**
   - "Implement Phase 1 from PLAN.md"
   - Test after each phase
   - Iterate if needed

4. **Validate**
   - Claude can run tests autonomously
   - Identifies issues before you do
   - Suggests fixes

## How to Run

```bash
# Terminal 1: Backend
cd backend && npm install && npm run dev

# Terminal 2: Frontend
cd frontend && npm install && npm run dev
```

Open http://localhost:5173

## What's Different in Demo-4?

### Before (Demos 1-3)
- You tell the AI what to do step-by-step
- Manual coordination across files
- You verify everything manually

### After (Demo-4)
- AI reads the plan and understands the full context
- AI proposes the approach
- AI implements autonomously with validation
- You review and approve

**Example Comparison:**

**Cursor Composer** (Demo-3):
```
You: "Add label filtering - update TaskList.jsx to add dropdown,
update backend to accept ?label query param, filter tasks by label_ids"
```

**Claude Code** (Demo-4):
```
You: "Implement the analytics dashboard from PLAN.md"

Claude: *reads PLAN.md, reads .claude/CONTEXT.md*
"I'll implement Phase 1 first: backend analytics API.
Based on the context, I'll create backend/src/routes/analytics.js
following the existing route patterns. Should I proceed?"

You: "Yes"

Claude: *implements Phase 1*
"Phase 1 complete. Ready for Phase 2?"
```

## The Analytics Feature

The exercise in `TASK.md` guides you through implementing:

- **Backend**: Analytics API endpoint with statistics
- **Frontend**: Dashboard with task/label/assignee breakdowns
- **Visualization**: Simple progress bars (no heavy libraries)

**What you'll learn:**
1. How to structure a complex feature plan
2. How context files guide Claude's decisions
3. How to use plan mode effectively
4. How to iterate on complex features

## Next Steps

After this branch, you've completed the full workshop! You now know:

1. **ChatGPT**: For brainstorming and planning
2. **Cursor CMD+K**: For quick single-file edits
3. **Cursor Composer**: For multi-file features
4. **Claude Code**: For complex features with planning

## Choosing the Right Tool

```
Simple edit (1 file)?
  → Cursor CMD+K

Feature across 2-5 files, clear requirements?
  → Cursor Composer

Complex feature, needs planning, >5 files?
  → Claude Code

Brainstorming/ideation only?
  → ChatGPT
```

---

**Branch created:** 2025-10-15
**Demonstrates:** Claude Code planning mode & context engineering
**Next branch:** None (final demo!)
