# Workshop Guide: Getting the Most Out of AI Coding Tools

## Presenter Notes

This guide provides detailed instructions for delivering the 90-minute workshop on AI-assisted development.

## Pre-Workshop Setup

### For Presenter

1. **Test all demo branches:**
   ```bash
   for branch in main demo-1-chatgpt-planning demo-2-cursor-basic demo-3-cursor-fullstack demo-4-claude-planning demo-5-claude-mcp demo-6-claude-advanced demo-7-production-ready; do
     git checkout $branch
     # Test build/run if applicable
   done
   ```

2. **Install required tools:**
   - ChatGPT Plus (for ChatGPT apps demo)
   - Cursor IDE
   - Claude Code CLI
   - Node.js 18+
   - SQLite (for MCP demo)

3. **Prepare MCP servers:**
   ```bash
   npm install -g @modelcontextprotocol/server-sqlite
   ```

4. **Have backup plan:**
   - Record demo videos beforehand
   - Prepare screenshots of key moments
   - Have checkpoint branches ready

### For Attendees

**Minimum:**
- GitHub account
- Basic terminal knowledge
- Code editor (VS Code recommended)

**Optional:**
- ChatGPT account
- Cursor (trial available)
- Claude Code (free tier)

---

## Section 1: ChatGPT for Brainstorming (10 min)

### Demo Script

1. **Show problem statement:**
   > "We need a task management system for a small team. Should track tasks, assignees, and deadlines."

2. **ChatGPT prompting strategy:**
   ```
   Initial prompt:
   "I'm building a task management API. Help me brainstorm the core features,
   user personas, and key user flows. Focus on MVP features only."

   Follow-up:
   "Now create a structured API design document with endpoints, request/response
   formats, and data models."
   ```

3. **Show branch `demo-1-chatgpt-planning`:**
   - `docs/brainstorm.md` - Raw brainstorming output
   - `docs/requirements.md` - Structured requirements
   - `docs/api-design.md` - API contract

4. **Mention ChatGPT apps briefly:**
   - Figma integration for design
   - Google Workspace for documentation
   - Don't demo unless time permits

**Key Takeaway:** ChatGPT excels at structured thinking and planning, not just code generation.

---

## Section 2: Model Context Protocol (15 min)

### Conceptual Explanation

**Analogy:** "MCP is like Zapier for AI tools - it connects your AI assistant to your actual work environment."

**Architecture Diagram (draw on whiteboard):**
```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│  AI Tool     │◄───────►│  MCP Server  │◄───────►│  Resource    │
│ (Claude Code)│         │  (SQLite)    │         │  (Database)  │
└──────────────┘         └──────────────┘         └──────────────┘
```

**Common MCP Servers:**
- `@modelcontextprotocol/server-sqlite` - Database access
- `@modelcontextprotocol/server-github` - GitHub API
- `@modelcontextprotocol/server-filesystem` - File operations
- `@modelcontextprotocol/server-postgres` - PostgreSQL

**Why it matters:**
- AI can read/write to your actual systems
- No copy-pasting data in/out of tools
- Real-time context from live systems

**Demo preview:** "In demo-5, we'll show Claude Code persisting tasks directly to SQLite via MCP."

---

## Section 3: Agentic Coding & Context Engineering (20 min)

### Core Concepts

#### 1. **What is Agentic Coding?**

Traditional: You write code → AI suggests completions
Agentic: You set goals → AI plans and executes → You review

**Example workflow:**
```
User: "Add user authentication to the API"
Agent:
  1. Plans: Create user model, auth middleware, JWT tokens, tests
  2. Executes: Writes code across multiple files
  3. Validates: Runs tests, fixes errors
  4. Reviews: Creates PR with summary
```

#### 2. **Context Engineering Principles**

**Problem:** AI tools forget project conventions between sessions.

**Solution:** Explicit context files that persist.

**Key files:**
- `PLAN.md` - Single source of truth for project phases
- `.claude/CLAUDE.md` - Project-specific AI instructions
- `.claude/agents/` - Reusable workflows
- `.claude/commands/` - Custom slash commands
- `settings.local.json` - Permission boundaries

#### 3. **Best Practices**

**✅ Do:**
- Break work into 1-2 week phases
- Use checkbox format in PLAN.md (✅/⏳/❌)
- Create agents for repetitive workflows (PR fixes, validation)
- Validate builds BEFORE every commit
- Write imperative agent instructions ("Do X, then Y")

**❌ Don't:**
- Give vague instructions like "make it better"
- Skip build validation to "save time"
- Create agents with declarative descriptions
- Commit without running tests
- Let AI make destructive git operations without review

### Demo Setup

Show `demo-4-claude-planning` structure:

```
.claude/
├── CLAUDE.md                    # Project instructions
├── agents/
│   └── pr-helper.md            # Custom PR creation agent
├── commands/
│   └── validate.md             # Build + test command
└── settings.local.json         # Permissions
```

**Walk through each file:**

1. **CLAUDE.md example:**
```markdown
# TaskFlow Project Context

## Tech Stack
- Backend: Express.js with async/await
- Database: SQLite via better-sqlite3
- Testing: Jest with supertest

## Code Conventions
- Use named exports (not default)
- All async functions must have error handling
- API responses follow: { success: boolean, data: any, error?: string }

## Validation Requirements
- Run `npm test` before every commit
- All endpoints must have integration tests
- Use `npm run validate` custom command
```

2. **Agent example (pr-helper.md):**
```markdown
You are a PR creation assistant.

1. Run `git diff main...HEAD` to see all changes
2. Analyze the changes and identify:
   - Type: feature/bugfix/refactor
   - Files changed
   - Impact areas
3. Create PR with `gh pr create` using this format:
   - Title: "[TYPE] Brief description"
   - Body:
     - ## Summary (2-3 bullets)
     - ## Changes Made (detailed)
     - ## Test Plan (checkboxes)
     - ## Screenshots (if UI changes)
4. Add label based on type
```

3. **Slash command example (validate.md):**
```markdown
Run the full validation suite:

1. Run backend tests: `cd backend && npm test`
2. Run frontend tests: `cd frontend && npm test`
3. Run build: `npm run build`
4. Report results with ✅/❌ per step
```

**Interactive exercise:** Ask audience how they would structure a "bug-fixer" agent.

---

## Section 4: Live Demo - Cursor (15-20 min)

### Branch: `demo-2-cursor-basic`

**Feature to build:** POST /tasks and GET /tasks endpoints

**Demo script:**

1. **Open backend/src/routes/tasks.js**
   - Start typing: `// Create a new task`
   - Show Cursor's inline completion
   - Accept and continue

2. **Show multi-file awareness:**
   - In Express server, add route import
   - Cursor suggests the correct path
   - Show how it knows about project structure

3. **Create frontend component:**
   - Create `TaskList.jsx`
   - Type: `// Fetch tasks from API and display`
   - Cursor generates useState, useEffect, fetch logic

4. **Fix a deliberate bug:**
   - Introduce wrong endpoint URL
   - Use Cursor chat to debug: "Tasks aren't loading"
   - Show how it identifies the issue

**Checkpoint:** Commit to `demo-2-cursor-basic` branch

### Branch: `demo-3-cursor-fullstack`

**Feature to build:** Complete CRUD (Update, Delete)

**Demo script:**

1. **Use Cursor Composer:**
   - CMD+K (multi-file edit mode)
   - Prompt: "Add PUT /tasks/:id and DELETE /tasks/:id endpoints with frontend"
   - Show it editing backend + frontend simultaneously

2. **Add validation:**
   - Ask: "Add input validation for task creation"
   - Show it adding schema validation

**Key Takeaway:** Cursor excels at understanding project context across files.

---

## Section 5: Live Demo - Claude Code (40 min)

### Part A: Plan Mode (10 min)

**Branch:** `demo-4-claude-planning`

**Goal:** Plan authentication feature

1. **Start Claude Code in plan mode:**
   ```bash
   claude --plan
   ```

2. **Give instruction:**
   ```
   I want to add user authentication to the API. Users should register with
   email/password, login to get a JWT token, and protected routes should
   verify the token.
   ```

3. **Show Claude's planning:**
   - Breaks down into phases
   - Identifies files to create/modify
   - Suggests testing strategy
   - Creates PLAN.md with checkboxes

4. **Approve plan and exit plan mode**

5. **Show created context files:**
   - Walk through PLAN.md structure
   - Show how checkboxes track progress

### Part B: MCP Integration (10 min)

**Branch:** `demo-5-claude-mcp`

**Goal:** Persist tasks to SQLite database

1. **Show MCP configuration:**
   ```bash
   cat .claude/mcp.json
   ```

2. **Start Claude Code:**
   ```bash
   claude
   ```

3. **Give instruction:**
   ```
   Replace the in-memory task storage with SQLite. Create a tasks table with
   id, title, description, status, created_at. Use the MCP SQLite server.
   ```

4. **Watch Claude:**
   - Access database via MCP
   - Create schema
   - Refactor routes to use DB
   - Test with actual database queries

5. **Verify:**
   ```bash
   sqlite3 tasks.db "SELECT * FROM tasks;"
   ```

**Key Moment:** Show how Claude reads/writes DB without you moving data manually.

### Part C: Advanced Agent Workflow (15 min)

**Branch:** `demo-6-claude-advanced`

**Goal:** Implement task filtering with full workflow

1. **Create custom agent:**
   ```bash
   claude --plan
   "Create an agent that implements features with this workflow:
   1. Plan the implementation
   2. Write code + tests
   3. Run validation
   4. Create PR with detailed summary"
   ```

2. **Use the agent:**
   ```bash
   claude
   "Use the feature-builder agent to add filtering to GET /tasks by status
   and assignee"
   ```

3. **Watch it work autonomously:**
   - Updates PLAN.md
   - Creates TodoWrite tasks
   - Implements backend filtering
   - Adds frontend UI
   - Writes tests
   - Runs npm test
   - Creates PR

4. **Review the PR:**
   ```bash
   gh pr view
   ```

5. **Show commit history:**
   - Clean commits with proper messages
   - Todo list tracking in commit descriptions

**Key Takeaway:** Agents can handle entire feature workflows autonomously with proper context.

### Part D: Error Recovery (5 min)

**Demonstrate agent resilience:**

1. **Introduce a failing test**
2. **Watch Claude:**
   - Detects test failure
   - Analyzes error
   - Fixes code
   - Re-runs test
   - Only marks task complete when tests pass

**Key Point:** Good agents don't mark tasks complete prematurely.

---

## Section 6: Production Patterns (Reference Only - 5 min)

**Branch:** `demo-7-production-ready`

Quickly show what's added:
- Error handling middleware
- Input validation with Zod
- Comprehensive tests (80%+ coverage)
- Docker setup
- GitHub Actions CI/CD
- Environment variable management

**Message:** "AI tools can help with production code, not just prototypes."

---

## Q&A Section (5 min)

### Common Questions & Answers

**Q: Which tool should I use?**
A:
- ChatGPT: Brainstorming, documentation, learning
- Cursor: Active coding, inline suggestions, refactoring
- Claude Code: Complex features, workflow automation, multi-step tasks

**Q: How do I prevent AI from making mistakes?**
A:
- Use settings.local.json to restrict destructive operations
- Always review diffs before committing
- Run validation before commits
- Use plan mode for complex changes

**Q: Is this only for new projects?**
A:
- No! Works great on existing codebases
- Create CLAUDE.md to document existing patterns
- Gradually add agents for common tasks
- Start with small, isolated features

**Q: What about security concerns?**
A:
- Never commit API keys (use .env)
- Review all code before production
- Use MCP for sensitive data (keeps data local)
- AI tools follow your permission settings

---

## Post-Workshop Follow-Up

### Resources to Share

1. **This repository** - Attendees can clone and explore
2. **Knowledge base template** - Starter CLAUDE.md and agents
3. **MCP server list** - https://github.com/modelcontextprotocol/servers
4. **Best practices guide** - Curated learnings from multiple projects

### Suggested First Steps

**For attendees:**
1. Pick one AI tool to start with
2. Try it on a side project first
3. Create a CLAUDE.md for your main project
4. Build one custom agent for your workflow
5. Share learnings with your team

### Office Hours

Offer 1-2 office hour sessions post-workshop for:
- Help setting up MCP
- Debugging agent configurations
- Code review of AI-assisted PRs

---

## Troubleshooting

### Common Demo Issues

**Claude Code not connecting to MCP:**
```bash
# Check MCP server is running
ps aux | grep mcp

# Restart Claude Code
claude restart
```

**Cursor not suggesting:**
- Check internet connection
- Verify Cursor subscription is active
- Try CMD+K for explicit prompts

**Git issues during demo:**
- Have clean checkpoint branches ready
- Keep a backup clone of repo
- Practice git resets beforehand

**Time management:**
- Set phone timer for each section
- Have "fast forward" branches ready
- Skip ChatGPT apps if running late

---

## Workshop Variants

### For Less Technical Audience (90 min)
- 20 min ChatGPT (more emphasis)
- 10 min MCP (high-level only)
- 30 min Cursor (more hand-holding)
- 25 min Claude Code (basics only)
- 5 min Q&A

### For Advanced Audience (90 min)
- 5 min ChatGPT (skip or mention only)
- 10 min MCP (deeper technical details)
- 15 min Cursor (quick overview)
- 55 min Claude Code (advanced patterns, custom agents, KB management)
- 5 min Q&A

### Extended Workshop (3 hours)
Add:
- Hands-on exercises (30 min)
- Pair programming sessions (45 min)
- Advanced MCP server creation (30 min)
- Knowledge base management (15 min)

---

## Success Metrics

Track:
- Number of attendees who clone the repo
- GitHub stars on the workshop repo
- Follow-up questions received
- Attendees who adopt tools (survey 2 weeks later)

---

## Continuous Improvement

After each workshop:
1. Note which sections went over/under time
2. Collect attendee feedback
3. Update branch examples based on common questions
4. Record pain points for troubleshooting section

---

**Last updated:** 2025-10-15
**Version:** 1.0
**Presenter:** [Your Name]
