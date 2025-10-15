# Workshop Conductor's Guide

**Duration:** 90 minutes
**Format:** Demo + Live Coding + Hands-on exercises
**Audience:** Engineers familiar with JavaScript/React

## Setup Before Workshop

### Your Machine (Presenter)

1. **Clone this repo to a clean directory:**
   ```bash
   git clone <repo-url> workshop-demo
   cd workshop-demo
   ```

2. **Install dependencies on main branch:**
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   cd ..
   ```

3. **Test all branches work:**
   ```bash
   # Quick test script
   for branch in demo-{2..4}*; do
     git checkout $branch
     echo "✓ $branch ready"
   done
   git checkout main
   ```

4. **Have these ready:**
   - Terminal (split view: backend left, frontend right)
   - Code editor (VS Code or Cursor)
   - Browser with DevTools open
   - This guide open on second screen

5. **Optional but helpful:**
   - Record backup video of each demo
   - Have screenshots of key moments
   - Checkpoint branches if you want to fast-forward

### Attendee Setup (Optional)

**If attendees will follow along:**
- Share repo link in advance
- Ask them to clone and run `npm install`
- Provide a "setup verification" script:

```bash
# setup-check.sh
#!/bin/bash
echo "Checking backend..."
cd backend && npm test
echo "Checking frontend..."
cd ../frontend && npm run build
echo "✓ Setup complete!"
```

**If demo-only:**
- Share repo link for post-workshop exploration
- No pre-setup needed

---

## Workshop Flow: Branch-by-Branch Guide

### 0. Introduction (5 minutes)

**Stay on:** `main` branch

**What to show:**
```bash
git checkout main
# Show project structure
tree -L 2 -I node_modules
```

**Talking points:**
- "We're building TaskFlow - a simple task manager"
- "We'll use 3 different AI tools and compare them"
- "Each branch demonstrates a different tool"
- Show the branch list:
  ```bash
  git branch
  ```

**Hands-on:** None (just overview)

---

## Section 1: ChatGPT for Planning (10 minutes)

**Switch to:** `demo-1-chatgpt-planning`

```bash
git checkout demo-1-chatgpt-planning
```

### Demo Script (7 minutes)

**1. Show the planning docs (3 min)**
```bash
# Show what ChatGPT generated
ls docs/
cat docs/brainstorm.md | head -50
cat docs/requirements.md | head -80
cat docs/api-design.md | head -60
```

**Narration:**
- "I started with this prompt: [read from brainstorm.md]"
- "ChatGPT gave me user personas, feature priorities, and data models"
- "Then I asked it to create a formal PRD"
- "Finally, I got a complete API spec with examples"

**2. Open ChatGPT live (2 min)**
- Open https://chat.openai.com
- Show a LIVE example (don't use the prepared docs):
  ```
  Prompt: "I need to add a 'task priority' feature (high/medium/low).
  Should this be a separate field or use labels? What are the tradeoffs?"
  ```
- Show how ChatGPT helps you think through decisions

**3. Key takeaway (1 min)**
- "Use ChatGPT to THINK before you CODE"
- "It's a brainstorming partner, not just a code generator"

### Hands-on Exercise (3 minutes)

**For attendees:**
```
Exercise: Open ChatGPT and plan a feature

Prompt: "I want to add task comments to my API.
Design the data model and API endpoints."

Compare your answer to ChatGPT's suggestion.
Time: 2 minutes, then we'll continue.
```

**Expected output:**
- Comments table schema
- POST /api/tasks/:id/comments endpoint
- GET /api/tasks/:id/comments endpoint
- Maybe: PUT/DELETE for editing comments

**Debrief (1 min):**
- Ask: "Who got something useful?"
- Highlight: "ChatGPT helps explore options fast"

---

## Section 2: MCP Explanation (10 minutes)

**Stay on:** `demo-1-chatgpt-planning` (no code needed)

### Conceptual Explanation (10 minutes)

**Draw on whiteboard/slides:**

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│  AI Tool     │◄───────►│  MCP Server  │◄───────►│  Resource    │
│ (Claude Code)│         │  (SQLite)    │         │  (Database)  │
└──────────────┘         └──────────────┘         └──────────────┘
```

**Explain:**
1. "Normally, AI can't access your database/files/APIs"
2. "You have to copy-paste data back and forth"
3. "MCP = Model Context Protocol - gives AI tools access"
4. "It's like OAuth for AI - controlled access to resources"

**Common MCP Servers:**
- `@modelcontextprotocol/server-sqlite` - Database queries
- `@modelcontextprotocol/server-filesystem` - File operations
- `@modelcontextprotocol/server-github` - GitHub API
- `@modelcontextprotocol/server-postgres` - PostgreSQL

**Why it matters:**
- "Later, we'll see Claude Code write to SQLite directly"
- "No more: 'Claude, here's my schema [paste]'"
- "It just reads the database itself"

**Hands-on:** None (conceptual only)

**Preview:** "We'll see this in action in demo-5 if we have time"

---

## Section 3: Cursor Basics (10 minutes)

**Switch to:** `demo-2-cursor-basic`

```bash
git checkout demo-2-cursor-basic
code .  # Open in Cursor IDE
```

### Demo Script (8 minutes)

**Setup (1 min):**
```bash
# Terminal 1: Start backend
cd backend && npm run dev

# Terminal 2: Start frontend
cd frontend && npm run dev
```

Open http://localhost:5173 - show it works

**1. Show inline suggestions (2 min)**
- Open `backend/src/routes/tasks.js`
- Scroll to the GET endpoint
- **Point out:** "I just typed `// GET /api/tasks` and Cursor suggested this whole function"
- Highlight Tab to accept, Esc to reject

**2. Show multi-file awareness (2 min)**
- Open `frontend/src/components/TaskList.jsx`
- Point to line 22: `const response = await fetch('${API_URL}/tasks');`
- **Explain:** "Cursor knew this endpoint exists because it read the backend file"
- Show both files side-by-side

**3. Live edit with CMD+K (3 min)**
- In `TaskList.jsx`, highlight the `fetchTasks` function
- Press CMD+K
- Prompt: "Add error retry logic - if fetch fails, retry up to 3 times"
- Show Cursor's suggestion
- Accept and test it

**4. Test it (1 min)**
- Create a task in the UI
- Show it appears in the list
- "This took 20 minutes to build with Cursor"

### Hands-on Exercise (2 minutes)

**For attendees (if they have Cursor):**
```
Exercise: Use Cursor to add a feature

1. Open frontend/src/components/TaskForm.jsx
2. Highlight the handleSubmit function
3. Press CMD+K
4. Prompt: "Add a loading spinner while the task is being created"
5. See what Cursor suggests

Time: 2 minutes
```

**Expected result:**
- Cursor adds a `<span>Creating...</span>` or spinner
- Updates button state

**Debrief:**
- "Cursor is great for: boilerplate, patterns, quick edits"
- "Not as good for: complex multi-step features (that's Claude's job)"

---

## Section 4: Cursor Composer (10 minutes)

**Switch to:** `demo-3-cursor-fullstack`

```bash
git checkout demo-3-cursor-fullstack
# Restart servers if needed
cd backend && npm run dev  # Terminal 1
cd frontend && npm run dev # Terminal 2
```

### Demo Script (7 minutes)

**1. Show what changed from demo-2 (2 min)**
```bash
git diff demo-2-cursor-basic demo-3-cursor-fullstack --stat
```

**Point out:**
- Backend: Added PUT and DELETE routes
- Frontend: Added status buttons (Start, Complete, Delete)
- "These were added with ONE Composer prompt"

**2. Show the UI (2 min)**
- Create a task
- Click "Start" → Status changes to In Progress
- Click "Complete" → Status changes to Done
- Click "Delete" → Task removed
- **Emphasize:** "Cursor edited backend AND frontend together"

**3. Explain Composer workflow (3 min)**
- Open Cursor
- Press CMD+Shift+K to open Composer
- **Explain:** "This is different from CMD+K - it edits MULTIPLE files"
- Show example prompt:
  ```
  "Add a 'favorite' feature. Users can star tasks.
  Update backend to store is_favorite boolean.
  Update frontend to show a star icon.
  Update both files."
  ```
- Don't actually run it, just show the interface

**Key point:** "Composer = multi-file edits in one prompt"

### Hands-on Exercise (3 minutes)

**For attendees:**
```
Exercise: Plan a Composer prompt

Feature: Add task priority (High, Medium, Low)

Write a prompt for Cursor Composer that would:
1. Add a priority field to the backend
2. Add a priority dropdown to the frontend form
3. Display priority with color coding in the task list

Time: 2 minutes, then share your prompt
```

**Sample answer:**
```
"Add task priority feature:
- Backend: Add 'priority' field (enum: high, medium, low) to task model
- Backend: Update POST and PUT endpoints to accept priority
- Frontend: Add priority dropdown to TaskForm (default: medium)
- Frontend: Display priority in TaskList with color badges (red/yellow/green)
- Update both backend and frontend files"
```

**Debrief:**
- "Good prompts are specific about scope and behavior"
- "Mention both backend and frontend explicitly"

---

## Section 5: Context Engineering Theory (10 minutes)

**Stay on:** `demo-3-cursor-fullstack` (no branch change)

### Lecture (10 minutes)

**Slides or whiteboard:**

**Problem:**
- "AI forgets context between sessions"
- "You have to explain conventions every time"
- "It makes inconsistent decisions"

**Solution: Context Engineering**
- Persistent files that AI reads every session
- Like a "team onboarding doc" for AI

**Key files:**
```
.claude/
├── CLAUDE.md              # Project conventions
├── agents/                # Reusable workflows
├── commands/              # Shortcuts
└── settings.local.json    # Permissions

PLAN.md                    # Phase tracking
```

**Analogy:**
- "CLAUDE.md = team wiki"
- "Agents = shell scripts, but for AI"
- "PLAN.md = sprint board"
- "settings.local.json = IAM permissions"

**When to invest in this:**
- ✅ Production projects (will last months)
- ✅ Team projects (onboarding benefit)
- ✅ After you notice AI making same mistakes
- ❌ Quick prototypes
- ❌ One-off scripts

**Hands-on:** None (theory only)

---

## Section 6: Claude Code Planning (15 minutes)

**Switch to:** `demo-4-claude-planning`

```bash
git checkout demo-4-claude-planning
```

### Demo Script (12 minutes)

**1. Tour the context files (5 min)**

**PLAN.md:**
```bash
cat PLAN.md | head -100
```
- Show phases with checkboxes (✅ / ⏳)
- Point out: "Phase 4 is current phase"
- Explain: "Claude reads this to know what to work on"

**.claude/CLAUDE.md:**
```bash
cat .claude/CLAUDE.md | head -80
```
- Show sections: Tech Stack, Code Conventions, Workflows
- Point out: "This tells Claude HOW to write code"
- Example: "All API responses must have `{success: bool, data: any}`"

**.claude/agents/validate-build.md:**
```bash
cat .claude/agents/validate-build.md
```
- Show step-by-step instructions
- Point out: "Agents are like shell scripts for AI"
- "This agent runs before every commit"

**.claude/settings.local.json:**
```bash
cat .claude/settings.local.json
```
- Show allow/deny/ask lists
- Explain: "Prevents `git push --force` accidents"

**2. Demonstrate plan mode (5 min)**

**Start Claude Code:**
```bash
# In the workshop repo
claude
```

**Give it a task:**
```
"Add a search bar to the task list. Users should be able to search by title.
Update both backend and frontend."
```

**Watch Claude:**
- ✅ Reads PLAN.md to understand context
- ✅ Reads CLAUDE.md for conventions
- ✅ Creates a step-by-step plan
- ✅ Shows TodoWrite items
- ✅ Asks: "Ready to proceed?"

**Approve the plan and watch it execute** (or stop here if short on time)

**Key points:**
- "See how it broke this into clear steps?"
- "It knows our API format from CLAUDE.md"
- "We can review the plan before any code runs"

**3. Show custom agent (2 min)**

```bash
# Run the validate agent
claude
"Run the validate-build agent"
```

Watch it:
1. Run backend tests
2. Run frontend tests
3. Check syntax
4. Report summary

**Explain:** "This ensures code quality before commits"

### Hands-on Exercise (3 minutes)

**For attendees:**
```
Exercise: Write a CLAUDE.md section

Imagine your project uses:
- TypeScript (not JavaScript)
- Prisma for database
- Tailwind for CSS

Write a "Code Conventions" section for CLAUDE.md
that tells AI your preferences.

Time: 2 minutes
```

**Sample answer:**
```markdown
## Code Conventions

### TypeScript
- Use strict mode
- Prefer interfaces over types
- No `any` types (use `unknown`)

### Database (Prisma)
- All queries in `lib/db/*.ts` files
- Use transactions for multi-step operations
- Always handle Prisma errors

### CSS (Tailwind)
- Use Tailwind classes, no custom CSS
- Mobile-first responsive design
- Use `cn()` helper for conditional classes
```

**Debrief:**
- "This becomes your project's 'memory'"
- "Update it when conventions change"

---

## Section 7: Live Coding (25 minutes)

**Pick one based on audience interest:**

### Option A: Continue with Claude Code
**Task:** "Add task comments feature using Claude's agent workflow"

**Steps:**
1. Start with plan mode
2. Let Claude implement step by step
3. Show TodoWrite tracking
4. Validate with the agent
5. Create PR with pr-helper agent

### Option B: Cursor deep dive
**Task:** "Add task filtering and sorting UI"

**Steps:**
1. Use Composer to add filter dropdown
2. Use Composer to add sort buttons
3. Test the feature live
4. Fix any bugs with CMD+K

### Option C: Comparison
**Task:** "Add the same feature with both tools"

**Feature:** "Add task due date warnings (show overdue tasks in red)"

**Cursor approach:**
1. Composer prompt
2. Quick implementation
3. Manual testing

**Claude Code approach:**
1. Plan mode
2. Agent validation
3. Structured workflow

**Compare:** Speed vs. structure

**Attendee participation:**
- Ask them to vote on which tool to use
- For chosen tool, do it live
- Intentionally make a mistake and debug it

---

## Section 8: Q&A and Wrap-up (5 minutes)

**Stay on:** `demo-4-claude-planning`

### Common Questions

**Q: Which tool should I use?**
A:
- ChatGPT: Planning, brainstorming, learning
- Cursor: Active coding, quick edits, prototyping
- Claude Code: Complex features, multi-step workflows, team projects

**Q: Can I use multiple tools together?**
A: Yes! Common workflow:
1. Plan in ChatGPT
2. Prototype in Cursor
3. Production features in Claude Code

**Q: How much does context engineering cost (time)?**
A:
- Initial setup: 30-60 minutes
- Maintenance: 5-10 min/week
- Pays off after ~3 weeks

**Q: What about other tools (GitHub Copilot, etc.)?**
A: Copilot is similar to Cursor for inline suggestions. The demos here would work similarly.

### Resources to Share

```bash
# Show this file
cat README.md
```

**Share:**
- This repo: [your-repo-url]
- Claude Code docs: https://docs.claude.com/claude-code
- Cursor docs: https://docs.cursor.com/
- MCP servers: https://github.com/modelcontextprotocol/servers

### Final Message

"Key takeaways:
1. ✅ Plan before you code (ChatGPT)
2. ✅ Use Cursor for speed (inline, Composer)
3. ✅ Use Claude for structure (plan mode, agents)
4. ✅ Context engineering makes AI consistent
5. ✅ All these tools make you faster, not lazy

Thanks for attending!"

---

## Troubleshooting During Workshop

### "Backend won't start"
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### "Frontend won't start"
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### "Tasks aren't showing"
- Check browser console for errors
- Verify backend is on port 3000
- Check CORS is enabled

### "Branch won't switch"
```bash
# Stash changes and switch
git stash
git checkout <branch>
```

### "Demo is running long"
**Skip these if needed:**
- Hands-on exercises (just explain)
- Live coding section (show code instead)
- MCP deep dive (high-level only)

**Priority order:**
1. Must show: Cursor basics (demo-2)
2. Must show: Claude planning (demo-4)
3. Nice to have: Cursor Composer (demo-3)
4. Optional: ChatGPT planning (demo-1)

---

## Post-Workshop

### Follow-up Email Template

```
Subject: TaskFlow Workshop - Resources

Hi everyone,

Thanks for attending the AI Coding Tools workshop!

Resources:
- Workshop repo: [your-url]
- Slides: [if you made any]
- Recording: [if recorded]

Each branch in the repo is runnable:
- demo-1: ChatGPT planning examples
- demo-2: Cursor basics
- demo-3: Cursor Composer
- demo-4: Claude Code planning

Try them out and let me know if you have questions!

Best,
[Your name]
```

### Office Hours (Optional)

Offer 1-2 sessions for:
- Help setting up MCP
- Reviewing their CLAUDE.md files
- Debugging agent configurations

---

## Workshop Variants

### 60-Minute Version
- Skip ChatGPT section (share docs only)
- Skip MCP theory (mention briefly)
- Focus on: Cursor (15 min) + Claude (25 min) + Q&A (10 min)

### 120-Minute Version
- Add: demo-5-claude-mcp (SQLite live demo)
- Add: demo-6-claude-advanced (full agent workflow)
- Add: 30-minute hands-on lab (attendees build a feature)

### Beginner-Friendly Version
- More time on concepts
- Less live coding
- More prepared examples
- Slower pace

### Advanced Version
- Jump straight to Cursor Composer
- Focus on Claude agents and MCP
- Live debugging session
- Knowledge base management

---

**Good luck with your workshop!** 🎉
