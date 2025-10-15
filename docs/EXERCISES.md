# Workshop Hands-On Exercises

Quick exercises for attendees during the workshop. Each takes 2-3 minutes.

---

## Exercise 1: ChatGPT Planning (demo-1)

**Time:** 2 minutes

### Task
Use ChatGPT to plan a new feature for TaskFlow.

**Feature to plan:** Task Comments
- Users should be able to comment on tasks
- Comments show below task details
- Comments include author and timestamp

### Your prompt
```
I want to add task comments to my API.
Users can add, view, and delete their own comments.
Design the data model and API endpoints.
```

### What to look for
- ✅ Comments table schema
- ✅ Relationship to tasks (foreign key)
- ✅ POST, GET, DELETE endpoints
- ✅ Authorization considerations

### Expected output
```
Comments table:
- id
- task_id (foreign key)
- user_id (foreign key)
- text
- created_at

API endpoints:
- POST /api/tasks/:taskId/comments
- GET /api/tasks/:taskId/comments
- DELETE /api/comments/:id
```

---

## Exercise 2: Cursor Inline Editing (demo-2)

**Time:** 2 minutes
**Tool:** Cursor IDE
**Branch:** demo-2-cursor-basic

### Task
Add a loading spinner to the task creation form.

### Steps
1. Open `frontend/src/components/TaskForm.jsx`
2. Find the `handleSubmit` function (around line 29)
3. Highlight the function
4. Press `CMD+K` (Mac) or `CTRL+K` (Windows)
5. Prompt: "Add a loading spinner while submitting"

### What Cursor should do
- Add `submitting` state
- Show spinner/text while creating
- Disable button during submission

### Test it
1. Start frontend: `npm run dev`
2. Create a task
3. See "Creating..." or spinner

---

## Exercise 3: Cursor Composer Planning (demo-3)

**Time:** 2 minutes
**Tool:** Paper/Text editor
**Branch:** demo-3-cursor-fullstack

### Task
Write a Composer prompt for a new feature.

**Feature:** Task Priority (High, Medium, Low)

### Write a prompt that covers:
1. Backend: Add priority field
2. Backend: Update endpoints
3. Frontend: Add dropdown to form
4. Frontend: Display priority with color

### Sample solution
```
Add task priority feature:

Backend:
- Add 'priority' field to task model (enum: high, medium, low, default: medium)
- Update POST /api/tasks to accept priority
- Update PUT /api/tasks/:id to allow priority changes
- Return priority in all task responses

Frontend:
- Add priority dropdown to TaskForm component
  - Options: High (red), Medium (yellow), Low (green)
  - Default: Medium
- Display priority badge in TaskList component
  - Color-coded: high=red, medium=yellow, low=green
- Update App.jsx to show priority in task cards

Testing:
- Create task with high priority → shows red badge
- Update task priority → badge color changes
- Filter tasks by priority (optional)
```

### Key points
- ✅ Specific about what to change
- ✅ Mentions both backend and frontend
- ✅ Includes UI details (colors, defaults)
- ✅ Mentions testing

---

## Exercise 4: Write CLAUDE.md Section (demo-4)

**Time:** 2 minutes
**Tool:** Text editor
**Branch:** demo-4-claude-planning

### Task
Write a "Code Conventions" section for a different tech stack.

**Scenario:** Your project uses:
- TypeScript (strict mode)
- Prisma (database ORM)
- Tailwind CSS (utility-first)
- React Server Components

### Template
```markdown
## Code Conventions

### TypeScript
- [Your rule]
- [Your rule]

### Database (Prisma)
- [Your rule]
- [Your rule]

### Styling (Tailwind)
- [Your rule]
- [Your rule]

### React
- [Your rule]
- [Your rule]
```

### Sample solution
```markdown
## Code Conventions

### TypeScript
- Use strict mode always
- Prefer interfaces over types for objects
- No `any` types - use `unknown` and type guards
- Export types alongside components

### Database (Prisma)
- All queries in `lib/db/*.ts` files
- Use transactions for multi-step operations
- Always handle Prisma errors with try-catch
- Prefer `findUniqueOrThrow` over `findUnique`

### Styling (Tailwind)
- Use Tailwind classes exclusively (no custom CSS)
- Mobile-first: start with base, then add `md:`, `lg:` breakpoints
- Use `cn()` helper for conditional classes
- Extract repeated patterns into components (not @apply)

### React
- Use Server Components by default
- Only add 'use client' when necessary (interactions, hooks)
- Async components for data fetching
- Co-locate related components in same file
```

### Why this matters
- AI will follow these rules automatically
- Consistency across the codebase
- Less "why did you do it that way?" moments

---

## Exercise 5: Design a Custom Agent (demo-4)

**Time:** 3 minutes
**Tool:** Text editor
**Branch:** demo-4-claude-planning

### Task
Write instructions for a "test-coverage" agent.

**What it should do:**
1. Run tests with coverage report
2. Check if overall coverage is above 80%
3. Identify files below 50% coverage
4. Report findings

### Template
```markdown
# Test Coverage Agent

You are a test coverage specialist.

## Instructions

### Step 1: [Action]
[Command to run]

Success criteria: [What success looks like]
On failure: [What to do]

### Step 2: [Action]
[Command to run]

Success criteria: [What success looks like]
On failure: [What to do]

... etc

### Final Step: Report
[What to output]
```

### Sample solution
```markdown
# Test Coverage Agent

You are a test coverage specialist. Check code coverage and report areas needing tests.

## Instructions

### Step 1: Run Backend Tests with Coverage
```bash
cd backend && npm test -- --coverage
```

**Success criteria:** Tests pass and coverage report generated
**On failure:** Report which tests failed

### Step 2: Parse Coverage Report
Extract coverage percentages from output:
- Statements
- Branches
- Functions
- Lines

### Step 3: Check Threshold
**Success criteria:** All coverage types above 80%
**On failure:** List which types are below threshold

### Step 4: Identify Low Coverage Files
Find files with less than 50% line coverage.

### Step 5: Report Summary

If coverage is good:
```
✅ Test Coverage: PASS

Overall: 87%
- Statements: 88%
- Branches: 85%
- Functions: 90%
- Lines: 87%

All files above 50% coverage.
```

If coverage is low:
```
❌ Test Coverage: BELOW THRESHOLD

Overall: 65% (target: 80%)

Files needing tests:
- src/routes/tasks.js: 35%
- src/utils/validation.js: 40%

Add tests before merging.
```

## Usage
```bash
claude --agent test-coverage
```

Run this before creating pull requests.
```

---

## Exercise 6: Create a Slash Command (demo-4)

**Time:** 2 minutes
**Tool:** Text editor
**Branch:** demo-4-claude-planning

### Task
Design a `/deploy` slash command for staging deployment.

**What it should do:**
- Run tests
- Build production bundle
- Deploy to staging server
- Verify deployment
- Report URL

### Template
```markdown
# [Command name]

[Brief description]

This will:
1. [Step]
2. [Step]
3. [Step]

Usage:
```bash
claude /[command-name]
```

[Additional notes]
```

### Sample solution
```markdown
# Deploy to Staging

Deploy the current branch to staging environment.

This will:
1. Run all tests (backend + frontend)
2. Build production bundle
3. Deploy to staging server via SSH
4. Run smoke tests on staging
5. Report staging URL

Usage:
```bash
claude /deploy
```

Prerequisites:
- All tests must pass
- No uncommitted changes
- Staging SSH key configured

On success:
```
✅ Deployed to staging

URL: https://staging.taskflow.com
Build: #42
Commit: abc123f
Time: 2m 34s
```

On failure:
```
❌ Deployment failed

Tests failed:
- backend/src/routes/tasks.test.js

Fix tests and try again.
```

This command invokes the `deploy-staging` agent.
```

---

## Exercise 7: Plan a Multi-Step Feature (demo-4)

**Time:** 3 minutes
**Tool:** Text editor
**Branch:** demo-4-claude-planning

### Task
Break down a complex feature into PLAN.md format.

**Feature:** User Authentication
- Users can register with email/password
- Users can log in and get JWT token
- Protected routes require valid token
- Frontend stores token in localStorage

### Your plan structure
```markdown
## Phase X: User Authentication

**Duration:** [estimate]
**Status:** Pending

### Goals
- [Goal 1]
- [Goal 2]
- [Goal 3]

### Success Criteria
- [ ] [Testable criterion]
- [ ] [Testable criterion]
- [ ] [Testable criterion]

### Technical Details
[Key implementation notes]
```

### Sample solution
```markdown
## Phase 5: User Authentication

**Duration:** 3-4 days
**Status:** Pending

### Goals
- [ ] User registration with email/password
- [ ] User login with JWT tokens
- [ ] Protected API routes
- [ ] Frontend auth state management
- [ ] Token refresh mechanism

### Success Criteria
- [ ] Users can register via POST /api/auth/register
- [ ] Users can login via POST /api/auth/login and receive JWT
- [ ] Protected routes return 401 without valid token
- [ ] Frontend stores token and includes in requests
- [ ] Token expiry handled gracefully (refresh or re-login)
- [ ] Existing tests still pass
- [ ] New auth tests added (80%+ coverage)

### Technical Details

**Backend:**
```
Database:
- users table: id, email, password_hash, created_at
- Use bcrypt for password hashing
- JWT secret in environment variable

Endpoints:
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/refresh
- Middleware: authenticateToken()
```

**Frontend:**
```
- AuthContext for global auth state
- localStorage for token persistence
- axios interceptor for auto-token injection
- Redirect to /login on 401 responses
```

**Security:**
- Password min 8 chars, must have number + special char
- Rate limit: 5 login attempts per 15 minutes
- Token expiry: 24 hours
- Refresh token: 30 days
- HTTPS only in production

### Dependencies
- jsonwebtoken (JWT creation/validation)
- bcrypt (password hashing)
- express-rate-limit (rate limiting)

### Testing Plan
- [ ] Unit tests for auth middleware
- [ ] Integration tests for register/login endpoints
- [ ] Test password validation rules
- [ ] Test token expiry and refresh
- [ ] Test protected route access
```

### Why this format works
- ✅ Clear goals and success criteria
- ✅ Testable checkboxes
- ✅ Technical details for implementation
- ✅ Easy to track progress

---

## Bonus Exercise: Compare Approaches

**Time:** 5 minutes (group discussion)

### Scenario
You need to add a "task attachments" feature (upload files to tasks).

### Task
Write how you would approach this with each tool:

1. **ChatGPT approach:**
   - What prompts would you use?
   - What docs would you generate?

2. **Cursor approach:**
   - What Composer prompt would you write?
   - What files would you expect it to edit?

3. **Claude Code approach:**
   - What would go in PLAN.md?
   - What agents would you create?
   - How would you structure the phases?

### Discuss
- Which approach feels most natural?
- Which gives most control?
- Which is fastest?
- Which is best for team collaboration?

**There's no right answer** - it depends on:
- Project complexity
- Team size
- Timeline
- Your workflow preferences

---

## Take-Home Challenge

**Build your own context engineering setup:**

1. Take a real project (or start one)
2. Create `.claude/CLAUDE.md` with your conventions
3. Create `PLAN.md` with 3 phases
4. Create 1 custom agent for a task you do often
5. Try using Claude Code with this setup
6. Share what worked/didn't work

**Share your setup:**
- Post to [your company Slack / forum]
- Include: What worked well, what didn't
- Help others learn from your experience

---

## Additional Resources

### For ChatGPT
- OpenAI Playground: https://platform.openai.com/playground
- Prompt engineering guide: https://platform.openai.com/docs/guides/prompt-engineering

### For Cursor
- Cursor docs: https://docs.cursor.com/
- Keyboard shortcuts: CMD+K (inline), CMD+Shift+K (Composer)
- Discord: https://discord.gg/cursor

### For Claude Code
- Claude Code docs: https://docs.claude.com/claude-code
- MCP servers: https://github.com/modelcontextprotocol/servers
- Community examples: [share workshop repo]

### Context Engineering
- ACE Framework: [reference if you have one]
- Example CLAUDE.md files: [in this repo]
- Knowledge base patterns: [in your global CLAUDE.md]

---

**Good luck and happy coding with AI!** 🚀
