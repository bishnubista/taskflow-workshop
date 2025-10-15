# Exercise: Plan a Feature with ChatGPT

**Branch:** demo-1-chatgpt-planning
**Time:** 5-7 minutes
**Tool:** ChatGPT (web interface)

## Context

You have a working TaskFlow app with basic task management. Before building new features, it's important to plan them properly. ChatGPT excels at helping you think through features systematically.

## What's Already Done

In this branch, I've already used ChatGPT to plan a "Labels" feature. Check these files:
- `docs/labels-feature-plan.md` - Full brainstorming session
- `docs/labels-api-design.md` - Complete API specification

## Your Task

Use ChatGPT to plan a **"Task Priority"** feature.

### Requirements

Users should be able to:
- Set priority for each task (High, Medium, Low)
- Filter tasks by priority
- See priority visually (color-coded)
- Change priority of existing tasks

## Step-by-Step Guide

### Step 1: Open ChatGPT

Go to https://chat.openai.com (or use the ChatGPT app)

### Step 2: Copy This Starter Prompt

```
I'm building a task management app called TaskFlow. I want to add a "priority"
feature where users can:
- Set task priority (High, Medium, Low)
- Change priority of existing tasks
- Filter tasks by priority level
- See priority with visual indicators (colors)

Design the data model and API endpoints for this feature.
Focus on:
1. How to store priority (enum vs number vs separate table?)
2. API endpoints needed (which existing endpoints to modify?)
3. Default priority for new tasks
4. UI considerations (colors, placement)

Keep it simple for an MVP.
```

### Step 3: Analyze ChatGPT's Response

Look for these key elements:

**Data Model:**
- [ ] Where does priority field go? (in tasks table)
- [ ] What type? (enum, number, or string?)
- [ ] Default value?

**API Changes:**
- [ ] Which endpoints need updating?
- [ ] New endpoints needed?
- [ ] Validation rules?

**Implementation Approach:**
- [ ] Backend changes
- [ ] Frontend changes
- [ ] Testing strategy

### Step 4: Compare to Labels Plan

Open `docs/labels-feature-plan.md` and compare:

**Similarities:**
- Both add metadata to tasks
- Both need filtering
- Both have visual indicators

**Differences:**
- Priority: single value per task (simple)
- Labels: many-to-many relationship (complex)
- Priority: limited options (3 choices)
- Labels: unlimited custom values

**Which is easier to implement?**

Priority! It's just a new field on the task model.

## Expected Output from ChatGPT

You should get something like:

### Data Model
```javascript
// Add to existing task model
{
  // ... existing fields ...
  priority: "medium",  // enum: "high" | "medium" | "low"
}
```

### API Endpoints to Modify
```
POST /api/tasks        # Accept priority field
PUT /api/tasks/:id     # Allow priority updates
GET /api/tasks         # Add ?priority=high filter
```

### Color Scheme
```
High:   Red (#DC3545)
Medium: Yellow (#FFC107)
Low:    Green (#28A745)
```

## Bonus Challenge

Ask ChatGPT a follow-up question:

```
Should I implement priority as:
A) A simple enum field (high/medium/low)
B) A numeric field (1-5 scale)
C) A separate priorities table (like labels)

What are the tradeoffs of each approach?
```

ChatGPT will explain:
- **Option A:** Simplest, rigid (good for MVP)
- **Option B:** More flexible, but what does "3" mean?
- **Option C:** Most flexible, but overkill for 3 options

## What You've Learned

✅ **Planning first saves time:**
- Clear data model before coding
- API contract decided upfront
- Edge cases identified early

✅ **ChatGPT helps structure thinking:**
- Breaks down complex features
- Suggests tradeoffs
- Provides implementation guidance

✅ **Not all features are equal:**
- Priority: simple field addition
- Labels: complex many-to-many relationship
- Choose approach based on complexity

## Next Steps

Once you have your plan:

1. **Save it:** Copy ChatGPT's response to a markdown file
2. **Review it:** Share with team, get feedback
3. **Estimate it:** Based on complexity, estimate time
4. **Implement it:** Use Cursor or Claude Code to build it

In the next branch (`demo-2-cursor-basic`), we'll see how to implement features quickly with Cursor!

```bash
git checkout demo-2-cursor-basic
```

## Key Takeaway

> "Hours of planning saves days of debugging."
> - Every Senior Engineer

ChatGPT is your planning partner. Use it before you code!

---

**Exercise Time:** 5-7 minutes
**Difficulty:** Easy
**Tools:** ChatGPT
**Next:** demo-2-cursor-basic
