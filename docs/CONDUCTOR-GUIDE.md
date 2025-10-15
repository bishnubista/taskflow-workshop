# Workshop Conductor's Guide

**Duration:** 60 minutes
**Format:** Progressive demos + Hands-on exercises
**Audience:** Engineers familiar with JavaScript/React

## Pre-Workshop Setup

### Your Machine
1. Clone repo and install dependencies on ALL branches
2. Test that backend/frontend start on each branch
3. Have ready:
   - Terminal (split: backend + frontend)
   - Code editor (Cursor ideally, VS Code works)
   - Browser with DevTools
   - ChatGPT account (free tier OK)
   - This guide open

### Attendee Preparation
**Option A - Follow Along:**
- Share repo link 1 day before
- Ask them to: clone, run `npm install` in backend + frontend
- Verify: Both servers start successfully

**Option B - Watch Only:**
- Share repo link for post-workshop exploration
- No setup needed

---

## Workshop Flow (60 minutes)

### 0. Introduction (0-5 min)
**Branch:** `main`

**Show:**
```bash
git branch  # Show all demo branches
tree -L 2 -I node_modules  # Show structure
```

**Say:**
- "We're building TaskFlow - a task manager"
- "4 branches = 4 different AI tools/techniques"
- "Each builds on the previous - it's progressive"
- "By the end, you'll know WHEN to use WHICH tool"

**Don't:** Start servers yet (nothing to see on main)

---

### 1. Demo-1: ChatGPT Planning (5-15 min)
**Branch:** `demo-1-chatgpt-planning`

```bash
git checkout demo-1-chatgpt-planning
cd backend && npm run dev  # Terminal 1
cd frontend && npm run dev  # Terminal 2
```

#### Show & Tell (7 min)

**1. Show the working app (2 min)**
- Open http://localhost:5173
- Create a task, assign it, show it works
- "This is our foundation - basic CRUD"

**2. Show ChatGPT planning docs (3 min)**
```bash
cat docs/labels-feature-plan.md | head -60
cat docs/labels-api-design.md | head -80
```

**Narration:**
- "Before coding Labels, I planned it with ChatGPT"
- "Look at this structure: user stories, data model, API spec"
- "ChatGPT helped me think through edge cases"
- "This took 10 minutes - saved hours of rework"

**3. Live ChatGPT demo (2 min)**
- Open https://chat.openai.com
- Prompt: "I want to add task priority (high/medium/low). Should this be a field or use labels? Tradeoffs?"
- Show how ChatGPT explains options

#### Hands-On (3 min)

**Exercise** (see TASK.md):
"Everyone: Open ChatGPT, plan a 'Task Priority' feature. 2 minutes."

**Debrief:**
- Ask: "What did ChatGPT suggest?"
- Highlight: "Planning first = fewer bugs later"

---

### 2. Demo-2: Cursor CMD+K (15-20 min)
**Branch:** `demo-2-cursor-basic`

```bash
git checkout demo-2-cursor-basic
# Servers still running, just refresh browser
```

#### Show & Tell (2 min)

**Say:**
- "Same code as demo-1"
- "Now we'll ADD a feature using Cursor CMD+K"
- "CMD+K = inline AI editing for single files"

#### Hands-On (3 min)

**Exercise** (see TASK.md):
"Open TaskList.jsx in Cursor. Highlight the return statement. Press CMD+K. Type: 'Add a Clear Completed button that filters out done tasks with confirmation'"

**If attendees don't have Cursor:**
- Show on your screen
- Explain the workflow: highlight → CMD+K → describe change → accept

**Debrief:**
- "See how fast that was?"
- "Use CMD+K for quick, single-file changes"

---

### 3. Demo-3: Cursor Composer (20-30 min)
**Branch:** `demo-3-cursor-composer`

```bash
git checkout demo-3-cursor-composer
# Refresh browser - Labels feature now visible!
```

#### Show & Tell (5 min)

**1. Show the Labels feature (2 min)**
- Click "New Label"
- Create "Bug" (red), "Feature" (blue)
- "This took 5 files to implement!"

**2. Show the code (3 min)**
```bash
git diff demo-2-cursor-basic..demo-3-cursor-composer --stat
```
- backend/src/routes/labels.js (new)
- backend/src/index.js (modified)
- backend/src/routes/tasks.js (modified - added label_ids)
- frontend/src/components/LabelManager.jsx (new)
- frontend/src/App.jsx (modified)

**Say:**
- "CMD+K can't handle this - too many files"
- "Cursor Composer (CMD+I) coordinates multi-file changes"

#### Hands-On (5 min)

**Exercise** (see TASK.md):
"Choose ONE: (A) Add label filtering, (B) Show labels on tasks, or (C) Add label presets"

**In Cursor Composer:**
1. Press CMD+I
2. Type your chosen exercise prompt
3. Review proposed changes
4. Accept

**Note:** If attendees struggle, show on screen

---

### 4. Demo-4: Claude Code (30-50 min)
**Branch:** `demo-4-claude-enhancement`

```bash
git checkout demo-4-claude-enhancement
```

#### Show & Tell (5 min)

**1. Show the context files (3 min)**
```bash
cat .claude/CONTEXT.md | head -60
cat PLAN.md | head -80
```

**Say:**
- "These files teach Claude Code about our project"
- "CONTEXT.md = conventions, patterns, constraints"
- "PLAN.md = what to build, broken into phases"

**2. Explain the difference (2 min)**
"With Cursor, YOU give step-by-step instructions.
With Claude Code, IT reads the plan and proposes steps."

#### Hands-On (15 min)

**Exercise** (see TASK.md):
"Use Claude Code to implement the Analytics Dashboard from PLAN.md"

**Workflow:**
1. Start Claude Code: `claude` (CLI) or open in VS Code
2. Prompt: "Read PLAN.md and implement Phase 1"
3. Claude creates analytics API
4. Prompt: "Now Phase 2"
5. Claude creates Analytics component
6. Prompt: "Now Phase 3"
7. Claude integrates into App.jsx

**If attendees don't have Claude Code:**
- Show on your screen
- Emphasize: Claude reads context automatically
- Show: It follows existing patterns without being told

---

### 5. Wrap-Up & Q&A (50-60 min)

#### Tool Selection Guide (5 min)

**Show this flowchart** (from README):
```
Brainstorm/plan? → ChatGPT
Quick 1-file edit? → Cursor CMD+K
2-5 file feature? → Cursor Composer (CMD+I)
Complex 5+ files? → Claude Code (with plan)
```

**Ask:** "Which tool would you use for...
- Adding a button to one component? (CMD+K)
- Building a full authentication system? (Claude Code)
- Changing API and frontend together? (Composer)
- Deciding how to structure a feature? (ChatGPT)"

#### Common Questions (5 min)

**Q: "Which tool should I learn first?"**
A: Start with what you have. ChatGPT (free) for planning, then Cursor or Claude Code for implementation.

**Q: "Can I use these for production code?"**
A: Yes! The patterns (planning, context engineering) are production-ready. Always review AI-generated code.

**Q: "What if AI makes a mistake?"**
A: It will! That's why you review. AI is a pair programmer, not a replacement.

**Q: "Does this replace learning to code?"**
A: No - you need to understand code to review it effectively. AI amplifies your skills.

---

## Troubleshooting

### Backend won't start
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Frontend won't start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port already in use
```bash
# Kill process on port 3000 (backend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

### Can't switch branches
```bash
git stash  # Save uncommitted changes
git checkout <branch-name>
git stash pop  # Restore changes (optional)
```

---

## Time Management

**Running late?**
- Skip demo-2 (Cursor CMD+K is nice-to-have)
- Focus on: demo-1 (planning) → demo-3 (Composer) → demo-4 (Claude Code)
- Reduce hands-on time, show more on screen

**Extra time?**
- Deep dive into PLAN.md structure
- Show how to create .claude/CONTEXT.md for their projects
- Demo Claude Code agents (if familiar)

---

## Post-Workshop

**Share with attendees:**
1. Link to this repo
2. Recommendation: Try each tool on a small project
3. Suggestion: Create a CONTEXT.md for their main project

**Follow-up email template:**
```
Thanks for attending the AI-Assisted Development workshop!

Resources:
- Workshop repo: <link>
- ChatGPT: https://chat.openai.com
- Cursor: https://cursor.com
- Claude Code: https://claude.com/claude-code

Try this week:
1. Use ChatGPT to plan your next feature
2. Install Cursor and try CMD+K on a small change
3. Create a .claude/CONTEXT.md for your project

Questions? Reply to this email!
```

---

## Success Metrics

Workshop is successful if attendees can answer:
1. ✅ When should I use ChatGPT vs Cursor vs Claude Code?
2. ✅ Why plan features before coding?
3. ✅ What is context engineering?
4. ✅ How do I choose the right AI tool for my task?

---

**Good luck with your workshop!** 🚀
