# Exercise: Build Analytics Dashboard with Claude Code

**Time:** 20 minutes
**Tool:** Claude Code (Plan Mode + Context Engineering)
**Difficulty:** Advanced

## Context

You have a working TaskFlow app with labels. Now let's add an analytics dashboard to show task statistics, label usage, and assignee distribution. This exercise demonstrates Claude Code's planning and autonomous implementation capabilities.

## Your Task

Implement the Analytics Dashboard feature described in `PLAN.md` using Claude Code's plan mode and context engineering.

## Why Claude Code?

This is perfect for Claude Code because:
- ✅ Complex feature with multiple components
- ✅ Requires understanding of existing architecture
- ✅ Benefits from phase-by-phase implementation
- ✅ Needs coordination across backend and frontend
- ✅ Clear plan already exists

## Prerequisites

Before starting:
1. Read `PLAN.md` - understand the feature requirements
2. Read `.claude/CONTEXT.md` - see project conventions
3. Make sure both servers are running

## Step-by-Step Guide

### Step 1: Start Claude Code

Open Claude Code in your terminal:
```bash
# If not installed, see: https://claude.com/claude-code
claude
```

Or use the Claude Code VS Code extension.

### Step 2: Review the Plan

In Claude Code, ask:
```
Read PLAN.md and review the analytics dashboard feature.
Is the plan feasible? Any suggestions before I start implementation?
```

**What Claude does:**
- Reads PLAN.md
- Reads .claude/CONTEXT.md automatically
- Analyzes existing codebase
- Identifies potential issues
- Suggests improvements

**Expected response:**
Claude should confirm feasibility and may suggest:
- Additional error handling
- Edge cases to consider
- Better data structures
- Missing validation

### Step 3: Implement Phase 1 (Backend)

Ask Claude Code:
```
Implement Phase 1 from PLAN.md: Backend Analytics API.
Follow the conventions in .claude/CONTEXT.md.
Create the analytics route and register it in the backend.
```

**What Claude does:**
- Creates `backend/src/routes/analytics.js`
- Implements statistics calculations
- Adds validation and error handling
- Updates `backend/src/index.js` to register route
- Follows existing code patterns

**Review the changes:**
- Check the analytics route
- Verify data calculations
- Test the endpoint manually

### Step 4: Test Phase 1

Ask Claude Code:
```
Test the analytics API endpoint. Start the backend server if needed,
make a request to /api/analytics, and verify the response format.
```

**What Claude does:**
- Can start the backend server
- Makes test requests
- Validates response structure
- Reports any errors

**Manual verification:**
```bash
# Or test manually
curl http://localhost:3000/api/analytics
```

### Step 5: Implement Phase 2 (Frontend)

Ask Claude Code:
```
Implement Phase 2 from PLAN.md: Analytics Dashboard Component.
Create the Analytics.jsx component with all three sections.
Use the styling patterns from existing components.
```

**What Claude does:**
- Creates `frontend/src/components/Analytics.jsx`
- Implements all sub-sections (overview, labels, assignees)
- Handles loading/error states
- Matches existing component styles
- Uses inline CSS following project conventions

**Review the component:**
- Check state management
- Verify API integration
- Review styling

### Step 6: Implement Phase 3 (Integration)

Ask Claude Code:
```
Implement Phase 3 from PLAN.md: Integrate Analytics into App.jsx.
Add the Analytics component to the main app.
Update the branch banner text.
```

**What Claude does:**
- Updates `App.jsx`
- Imports Analytics component
- Updates branch banner
- Positions component appropriately

### Step 7: Test End-to-End

Ask Claude Code:
```
Run both servers and test the analytics dashboard end-to-end.
Create some test data if needed, then verify all statistics display correctly.
```

**What Claude does:**
- Starts both servers
- May create test data
- Verifies dashboard renders
- Checks data accuracy
- Reports any issues

**Manual verification:**
1. Open http://localhost:5173
2. Create a few tasks with labels
3. Assign tasks to users
4. Complete some tasks
5. Check analytics dashboard updates

## Expected Result

You should see:

```
┌────────────────────────────────────────────────────┐
│ Analytics Dashboard                    [Refresh]   │
├────────────────────────────────────────────────────┤
│ Task Overview                                      │
│ ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐          │
│ │Total │  │To Do │  │In Pr │  │Done  │          │
│ │  15  │  │   5  │  │   3  │  │   7  │          │
│ └──────┘  └──────┘  └──────┘  └──────┘          │
│                                                    │
│ Progress: ███████████████░░░░░ 47%               │
├────────────────────────────────────────────────────┤
│ Label Usage                                        │
│ • Bug (8 tasks)                                   │
│ • Feature (4 tasks)                               │
│ • Enhancement (3 tasks)                           │
├────────────────────────────────────────────────────┤
│ By Assignee                                        │
│ • Sarah Johnson - 6 tasks                         │
│ • Mike Chen - 4 tasks                             │
│ • Unassigned - 5 tasks                            │
└────────────────────────────────────────────────────┘
```

## Common Issues

### Issue 1: Claude Doesn't Follow Existing Patterns
**Cause:** Context file missing or unclear
**Fix:** Update `.claude/CONTEXT.md` with specific examples:
```
Add example code patterns to .claude/CONTEXT.md showing
the exact inline styling we use for components.
```

### Issue 2: Analytics Returns Empty Data
**Cause:** No tasks/labels in the system yet
**Fix:** Ask Claude to create test data:
```
Create a few test tasks with labels to populate the analytics dashboard.
```

### Issue 3: Frontend Doesn't Update After Backend Changes
**Cause:** API endpoint not properly integrated
**Fix:** Ask Claude to debug:
```
The analytics component isn't fetching data. Debug the API call
and verify the endpoint is working.
```

### Issue 4: Styling Doesn't Match Existing Components
**Cause:** Claude didn't reference existing components
**Fix:** Be more specific:
```
Update Analytics.jsx styling to match the styles used in
LabelManager.jsx. Use the same card and badge patterns.
```

## Bonus Challenges

If you finish early:

### Bonus 1: Auto-Refresh
Ask Claude:
```
Add auto-refresh to the analytics dashboard.
Update stats every 30 seconds automatically.
```

### Bonus 2: Empty States
Ask Claude:
```
Add empty state messages to analytics when there's no data.
Show helpful guidance like "Create your first task to see analytics!"
```

### Bonus 3: Trend Indicators
Ask Claude:
```
Add trend indicators showing if task counts are increasing or decreasing
compared to the last time analytics were viewed.
```

## Key Takeaways

After this exercise, you should understand:

1. **Planning enables autonomy**: Good plan = Claude can implement independently
2. **Context engineering matters**: `.claude/CONTEXT.md` guides Claude's decisions
3. **Phase-by-phase works**: Breaking into phases enables validation
4. **Claude learns from code**: Existing patterns influence new code
5. **Iterative refinement**: You can ask Claude to improve/fix incrementally

## Claude Code Workflow Comparison

### Without Plan/Context (Traditional)
```
You: "Add analytics"
Claude: "What analytics? Where? What data?"
You: "Show task counts and label usage"
Claude: "Where should I add this? What format?"
You: "In a new component, use the existing API pattern"
Claude: "Which pattern? Can you show an example?"
[...many rounds of back-and-forth...]
```

### With Plan/Context (This Exercise)
```
You: "Implement analytics dashboard from PLAN.md"
Claude: *reads plan, reads context, analyzes code*
"I'll implement in 3 phases. Starting with backend analytics API
following the route pattern from tasks.js. Proceed?"
You: "Yes"
Claude: *implements Phase 1*
"Phase 1 done. Test: /api/analytics returns task statistics. Continue?"
You: "Yes"
[...smooth autonomous execution...]
```

## What Makes This Different?

| Aspect | Cursor Composer | Claude Code |
|--------|-----------------|-------------|
| You provide | Detailed instructions | High-level goal + plan |
| AI reads | Current context | Plan + context + codebase |
| Implementation | One-shot attempt | Phase-by-phase with validation |
| Testing | Manual | Autonomous (optional) |
| Debugging | Manual | Autonomous (optional) |
| Learning | Limited | Learns patterns as it goes |

## Real-World Application

This workflow scales to production:

1. **Create detailed PLAN.md** for complex features
2. **Maintain .claude/CONTEXT.md** with project conventions
3. **Use Claude Code** for implementation
4. **Review phase-by-phase** rather than big-bang changes
5. **Iterate** based on Claude's suggestions

## Next Steps

Congratulations! You've completed all 4 workshop demos. You now know:

1. **ChatGPT** - Planning and brainstorming
2. **Cursor CMD+K** - Quick single-file edits
3. **Cursor Composer** - Multi-file features
4. **Claude Code** - Complex features with planning

**Choose the right tool for each task!**

---

**Pro Tip**: For your next project:
1. Create `.claude/CONTEXT.md` on day 1
2. Update it as patterns emerge
3. Write PLAN.md before big features
4. Let Claude Code handle the implementation
5. Review and iterate

This approach scales from workshops to production systems!
