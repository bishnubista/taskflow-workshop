# TaskFlow Workshop - AI-Assisted Development

A progressive, hands-on workshop teaching when and how to use different AI coding tools effectively.

## What This Workshop Teaches

By the end, you'll know:
- ✅ When to use ChatGPT vs Cursor vs Claude Code
- ✅ How to plan features with AI before coding
- ✅ How to use context engineering for better results
- ✅ How to choose the right tool for each task

## Progressive Workshop Structure

This workshop uses a **single project** that evolves across **4 demo branches**:

```
main (starter skeleton)
  ↓
demo-1-chatgpt-planning (plan with ChatGPT + basic CRUD)
  ↓
demo-2-cursor-basic (quick edits with CMD+K)
  ↓
demo-3-cursor-composer (multi-file features with Composer)
  ↓
demo-4-claude-enhancement (planning + autonomous implementation)
```

Each branch builds on the previous one, adding complexity and demonstrating different tool capabilities.

## Branch Breakdown

### Main Branch (Starting Point)
**Status**: Minimal skeleton
- Basic Express backend (health check only)
- Basic React frontend (API status only)
- No features implemented yet

**Use this to**: Show attendees the starting point

---

### Demo-1: ChatGPT Planning + Working Foundation
**Tool**: ChatGPT (web)
**Time**: 10 minutes
**Status**: Basic CRUD implemented

**What's included:**
- Working task Create and Read functionality
- User management API
- Task assignment
- ChatGPT planning docs in `/docs`:
  - `labels-feature-plan.md` - Full feature brainstorm
  - `labels-api-design.md` - API specification

**Hands-on exercise** (TASK.md):
- Use ChatGPT to plan a "Task Priority" feature
- Compare with the Labels plan provided
- Learn: Always plan before coding

**Key takeaway**: ChatGPT excels at brainstorming and planning, but you need another tool for implementation.

---

### Demo-2: Cursor CMD+K for Quick Edits
**Tool**: Cursor IDE (CMD+K)
**Time**: 5 minutes
**Status**: Same code as demo-1

**What's included:**
- All features from demo-1
- Exercise to ADD a new feature using Cursor

**Hands-on exercise** (TASK.md):
- Use Cursor CMD+K to add "Clear Completed" button
- Learn inline AI editing workflow
- Learn: When to use CMD+K vs Composer

**Key takeaway**: CMD+K is perfect for single-file, focused changes. Fast and intuitive.

---

### Demo-3: Cursor Composer for Multi-File Features
**Tool**: Cursor Composer (CMD+I)
**Time**: 10 minutes
**Status**: Full Labels feature added

**What's included:**
- Complete Labels CRUD API (backend)
- LabelManager component with color picker (frontend)
- Multi-file implementation example

**Hands-on exercise** (TASK.md):
- Choose ONE enhancement (3 options provided):
  - Option A: Add label filtering to tasks
  - Option B: Show labels as colored badges on tasks
  - Option C: Add label presets for quick creation

**Key takeaway**: Composer handles coordinated changes across multiple files. Great for features.

---

### Demo-4: Claude Code for Planning & Complex Features
**Tool**: Claude Code CLI
**Time**: 20 minutes
**Status**: Context engineering files added

**What's included:**
- `.claude/CONTEXT.md` - Project conventions
- `.claude/README.md` - Context engineering guide
- `PLAN.md` - Analytics feature plan (3 phases)

**Hands-on exercise** (TASK.md):
- Use Claude Code to implement Analytics Dashboard
- Learn planning mode workflow
- Learn context engineering benefits

**Key takeaway**: Claude Code excels when you have a clear plan and complex requirements across many files.

---

## Quick Start

### Prerequisites

**Before starting the workshop**, ensure you have all required tools installed.

📋 **See [PREREQUISITES.md](./PREREQUISITES.md)** for complete installation instructions (macOS & Windows).

**Quick verification:**
```bash
# macOS/Linux
./scripts/check-prerequisites.sh

# Windows (PowerShell)
.\scripts\check-prerequisites.ps1
```

**Required tools:**
- Node.js 18+ installed
- Git installed
- One of these AI tools:
  - [ChatGPT](https://chat.openai.com) (free account)
  - [Cursor IDE](https://cursor.com) (download and install)
  - [Claude Code](https://claude.com/claude-code) (CLI)

**Optional (for MCP bonus demo):**
- Google Chrome browser

### Running the Workshop

```bash
# Clone this repo
git clone <your-repo-url>
cd workshop

# Start with demo-1
git checkout demo-1-chatgpt-planning

# Read the instructions
cat TASK.md

# Start backend
cd backend
npm install
npm run dev

# In another terminal, start frontend
cd frontend
npm install
npm run dev

# Open http://localhost:5173
```

Each branch has:
- **BRANCH_NOTES.md** - What this branch demonstrates
- **TASK.md** - Hands-on exercise for attendees

## Tool Selection Guide

After completing the workshop, use this guide:

```
┌─────────────────────────────────────────────────────────────┐
│ Need to brainstorm/plan a feature?                          │
│ → ChatGPT                                                   │
└─────────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ Quick edit in 1 file?                                       │
│ → Cursor CMD+K                                              │
└─────────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ Feature across 2-5 files with clear requirements?          │
│ → Cursor Composer (CMD+I)                                   │
└─────────────────────────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ Complex feature (5+ files) needing planning?               │
│ → Claude Code (with PLAN.md + CONTEXT.md)                  │
└─────────────────────────────────────────────────────────────┘
```

## Workshop Timeline (60 minutes)

| Time | Activity | Branch |
|------|----------|--------|
| 0-5 min | Intro: Tool landscape | `main` |
| 5-15 min | Demo-1: ChatGPT planning exercise | `demo-1-chatgpt-planning` |
| 15-20 min | Demo-2: Cursor CMD+K exercise | `demo-2-cursor-basic` |
| 20-30 min | Demo-3: Cursor Composer exercise | `demo-3-cursor-composer` |
| 30-50 min | Demo-4: Claude Code exercise | `demo-4-claude-enhancement` |
| 50-60 min | Q&A + Tool selection guide | - |

## For Workshop Conductors

See `docs/CONDUCTOR-GUIDE.md` for:
- Detailed presentation notes
- Common questions and answers
- Setup troubleshooting
- Tips for each demo
- Alternative exercises if time runs short

## Tech Stack

**Backend:**
- Express.js (REST API)
- In-memory storage (arrays)
- ES6 modules

**Frontend:**
- React 18 with hooks
- Vite bundler
- Inline CSS (no framework)

**Why this stack?**
- Simple to understand
- No database complexity
- Focus on AI tools, not infrastructure
- Easy to run on any machine

## Key Files Reference

```
workshop/
├── README.md                    ← You are here
├── PREREQUISITES.md             ← Installation guide (macOS & Windows)
├── PLAN.md                      ← (demo-4) Analytics feature plan
├── TASK.md                      ← Current branch exercise
├── BRANCH_NOTES.md              ← Current branch learnings
├── scripts/
│   ├── check-prerequisites.sh   ← Verification script (macOS/Linux)
│   └── check-prerequisites.ps1  ← Verification script (Windows)
├── .claude/
│   ├── CONTEXT.md               ← (demo-4) Project context
│   └── README.md                ← (demo-4) Context guide
├── docs/
│   ├── CONDUCTOR-GUIDE.md       ← Workshop presentation guide
│   ├── labels-feature-plan.md   ← (demo-1) ChatGPT planning example
│   └── labels-api-design.md     ← (demo-1) API spec example
├── backend/
│   └── src/
│       ├── index.js
│       └── routes/
│           ├── tasks.js         ← (demo-1+)
│           ├── users.js         ← (demo-1+)
│           └── labels.js        ← (demo-3+)
└── frontend/
    └── src/
        ├── App.jsx
        └── components/
            ├── TaskForm.jsx     ← (demo-1+)
            ├── TaskList.jsx     ← (demo-1+)
            └── LabelManager.jsx ← (demo-3+)
```

## Learning Resources

- [ChatGPT Documentation](https://help.openai.com/)
- [Cursor Documentation](https://cursor.com/docs)
- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [Model Context Protocol](https://modelcontextprotocol.io/)

## Common Questions

**Q: Do I need all three tools?**
A: No! Each demo can be done independently. Use what you have access to.

**Q: Can I use this for production projects?**
A: The workflow patterns (planning, context engineering) are production-ready. The code is simplified for teaching.

**Q: What if I get stuck on an exercise?**
A: Each branch has solution code. Check the next branch to see the completed version.

**Q: How do I customize this for my team?**
A: Fork this repo, modify the exercises in TASK.md files, adjust timing in CONDUCTOR-GUIDE.md.

## License

MIT - Free for educational and commercial use

---

**Built with Claude Code** 🤖

This workshop was created using the same AI-assisted development patterns it teaches!
