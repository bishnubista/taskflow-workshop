# Demo 1: Brainstorming with ChatGPT

This branch demonstrates how to use ChatGPT for feature planning and API design **before** writing any code.

## What You'll Learn

- How to brainstorm features with ChatGPT
- How to create API specifications with AI
- Why planning saves debugging time later
- How to structure your prompts for better results

## What's Included

This branch contains:
- ✅ Working TaskFlow app (basic task CRUD)
- ✅ Example planning docs created with ChatGPT:
  - `docs/labels-feature-plan.md` - Feature brainstorm
  - `docs/labels-api-design.md` - API specification

## Quick Start

### 1. Run the Application

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

Open http://localhost:5173 to see the basic TaskFlow app.

## Brainstorming Workflow with ChatGPT

### Step 1: Open ChatGPT

Go to https://chat.openai.com (free account works fine)

### Step 2: Provide Context

Start by explaining your project:

```
I'm building a task management app called TaskFlow. It currently has:
- Tasks with title and status
- Users who can be assigned to tasks

I want to add a new feature but need help planning it first.
```

### Step 3: Brainstorm the Feature

Ask ChatGPT to help you explore the feature:

```
I want to add "Labels" to tasks so users can categorize and filter them.

Can you help me think through:
1. What data structure should labels have?
2. How should labels work with tasks (one label per task? multiple?)
3. What operations do users need (create, assign, remove)?
4. Any edge cases I should consider?
```

**See `docs/labels-feature-plan.md`** for an example ChatGPT response.

### Step 4: Design the API

Once you have a plan, ask for API specifications:

```
Based on that labels feature plan, can you design the REST API endpoints?

For each endpoint, include:
- HTTP method and path
- Request body/parameters
- Response format
- Status codes

Keep it simple - we're using Express and in-memory storage (no database yet).
```

**See `docs/labels-api-design.md`** for an example ChatGPT response.

### Step 5: Review and Iterate

ChatGPT's first response might not be perfect. Refine with follow-ups:

```
Good, but can we simplify the color picker?
Just use a preset list of colors instead of custom hex values.
```

```
What if two users try to create a label with the same name?
Should we prevent duplicates or allow them?
```

## Hands-On Exercise

Try planning a "Task Priority" feature with ChatGPT:

**Your Task:** Add priority levels (Low, Medium, High) to tasks

**Steps:**
1. Open ChatGPT
2. Give it context about TaskFlow
3. Ask it to help you design the priority feature
4. Get API endpoint specifications
5. Ask follow-up questions to refine the plan

**Time:** 5-10 minutes

## Key Takeaways

### ✅ DO: Always Plan First
- ChatGPT helps structure your thoughts
- Creates clear requirements and API contracts
- Identifies edge cases before coding
- Provides a reference during implementation

### ❌ DON'T: Jump Straight to Code
- Without a plan, features drift
- Hard to estimate time or track progress
- More bugs discovered during testing
- Harder to onboard team members

## Example Prompts That Work Well

**For feature brainstorming:**
```
I'm building [app description]. I want to add [feature].
What should I consider? What are the edge cases?
```

**For API design:**
```
Design REST API endpoints for [feature].
Include request/response formats and status codes.
Keep it simple for [your tech stack].
```

**For refinement:**
```
That's good, but [specific concern].
How would you adjust the design?
```

**For validation:**
```
I'm worried about [edge case].
How should the API handle this?
```

## What ChatGPT Is Good At

✅ Brainstorming feature ideas
✅ Designing API contracts
✅ Identifying edge cases
✅ Explaining tradeoffs
✅ Creating documentation structure

## What ChatGPT Is NOT Good At

❌ Writing production code (use Cursor or Claude Code for that)
❌ Understanding your specific codebase
❌ Making decisions for you (it suggests, you decide)
❌ Knowing your business requirements

## Files to Explore

```
workshop/
├── docs/
│   ├── labels-feature-plan.md    ← ChatGPT brainstorm example
│   └── labels-api-design.md      ← ChatGPT API spec example
├── backend/
│   └── src/
│       ├── routes/tasks.js       ← Basic CRUD already implemented
│       └── routes/users.js       ← User management already done
└── frontend/
    └── src/
        ├── TaskForm.jsx          ← Form for creating tasks
        └── TaskList.jsx          ← List of tasks with status
```

## Next Steps

After planning your feature with ChatGPT, move to the next demo to implement it:

```bash
git checkout demo-2-cursor-basic
```

You'll learn how to use Cursor to quickly implement the features you planned!

---

**Branch Focus:** ChatGPT for planning and API design
**Next Branch:** `demo-2-cursor-basic` (implementation with Cursor)
