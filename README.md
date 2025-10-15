# Demo 4: Complex Features with Claude Code

Learn how to use Claude Code's planning mode and context engineering for complex features.

## What You'll Learn

Use Claude Code to implement an Analytics Dashboard using PLAN.md and .claude/CONTEXT.md - perfect for complex, multi-phase features.

## What's in This Branch

✅ **Context engineering files** (already created)
- `.claude/CONTEXT.md` - Project architecture and conventions
- `.claude/README.md` - How context engineering works
- `PLAN.md` - Analytics Dashboard feature specification

✅ **Complete app** (from demos 1-3)
- Labels CRUD feature
- Task management
- User assignment

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

See **[TASK.md](./TASK.md)** for the complete step-by-step exercise (20 minutes).

**Your task:** Implement the Analytics Dashboard in 3 phases using Claude Code's plan mode

## Learning Resources

- **[BRANCH_NOTES.md](./BRANCH_NOTES.md)** - Why Claude Code, when to use it, tool comparison
- **[TASK.md](./TASK.md)** - Detailed exercise with phase-by-phase implementation
- **[PLAN.md](./PLAN.md)** - Analytics feature specification
- **[.claude/CONTEXT.md](./.claude/CONTEXT.md)** - Project context for AI

## What's Different from Demo 3?

- **Demo 3:** You provide detailed instructions to Cursor Composer
- **Demo 4:** Claude reads PLAN.md + CONTEXT.md and proposes the approach

**Key difference:** Autonomous implementation with planning

## Choosing the Right Tool

```
Simple edit (1 file)?
  → Cursor CMD+K (Demo 2)

Feature across 2-5 files, clear requirements?
  → Cursor Composer (Demo 3)

Complex feature, needs planning, >5 files?
  → Claude Code (Demo 4)

Brainstorming/ideation only?
  → ChatGPT (Demo 1)
```

## Next Step

Congratulations! You've completed all 4 workshop demos.

Checkout the bonus branch for browser automation:

```bash
git checkout bonus-mcp-chrome
```

---

**Branch Focus:** Claude Code planning mode & context engineering
**Exercise Time:** 20 minutes
**Bonus Branch:** `bonus-mcp-chrome` (MCP browser automation)
