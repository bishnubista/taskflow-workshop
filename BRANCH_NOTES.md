# Branch: demo-1-chatgpt-planning

## What This Branch Demonstrates

This branch shows the output of using **ChatGPT for product planning and brainstorming** before writing any code.

## Key Learnings

### 1. AI Excels at Structured Thinking

ChatGPT helped transform a vague idea ("task management for teams") into:
- Clear user personas
- Prioritized feature list (MVP vs Future)
- Data models
- API contract
- Success metrics

### 2. The Right Prompts Matter

**Good prompt:** "Help me brainstorm core features for an MVP, focusing on small teams. Keep it simple."

**Bad prompt:** "Build me a task management system."

The first gets you structured thinking. The second gets you code snippets without strategy.

### 3. Use ChatGPT for What It's Best At

**ChatGPT is great for:**
- ✅ Brainstorming and ideation
- ✅ Structuring requirements
- ✅ Creating documentation templates
- ✅ API design and data modeling
- ✅ Identifying edge cases

**ChatGPT is less good for:**
- ❌ Writing production code (too generic)
- ❌ Understanding your specific codebase
- ❌ Multi-file refactoring
- ❌ Debugging complex issues

### 4. ChatGPT Apps Integration (Briefly Mentioned)

In the workshop, we mentioned ChatGPT apps like:
- **Figma:** Turn designs into structured specs
- **Google Workspace:** Generate docs from conversations
- **GitHub:** Link issues and PRs in planning

These weren't demoed due to time, but they extend ChatGPT's reach beyond just chat.

## Files Created in This Branch

1. **`docs/brainstorm.md`** - Raw brainstorming session output
2. **`docs/requirements.md`** - Structured Product Requirements Document (PRD)
3. **`docs/api-design.md`** - Complete API specification

## How to Use This in Your Workflow

### Step 1: Start with Brainstorming
Open ChatGPT and describe your project:
```
"I'm building [PROBLEM]. The target users are [PERSONAS].
Help me brainstorm MVP features, user flows, and data models."
```

### Step 2: Refine into Documents
Take the brainstorm output and ask:
```
"Turn this into a structured PRD with user stories,
acceptance criteria, and success metrics."
```

### Step 3: Design the API
If building an API:
```
"Create a REST API design document with endpoints,
request/response formats, and validation rules."
```

### Step 4: Export and Version Control
- Copy the outputs into markdown files
- Commit to your repo
- These become your single source of truth

## Next Steps in the Workshop

After planning with ChatGPT, we move to:
- **demo-2-cursor-basic:** Implementing the API with Cursor
- **demo-4-claude-planning:** Using Claude Code for advanced features

## Workshop Presenter Notes

**Time for this section:** 10 minutes

**Demo script:**
1. Show `docs/brainstorm.md` - explain the prompt used
2. Highlight how ChatGPT broke down the problem
3. Show `docs/requirements.md` - point out structure
4. Show `docs/api-design.md` - note the detail level
5. Key message: "Plan before you code. AI helps you think, not just type."

**Q&A to expect:**
- Q: "Should I always use ChatGPT first?"
  - A: "For new features or projects, yes. For small fixes, jump to code."
- Q: "Can I use Claude Code for planning instead?"
  - A: "Yes! Claude Code has plan mode (demo coming later)."

## Try It Yourself

**Exercise:** Take a feature idea and ChatGPT through it:
1. Describe your feature in 2-3 sentences
2. Ask ChatGPT to brainstorm approaches
3. Refine into structured requirements
4. Design the API or data model
5. **Only then** start coding

You'll save time debugging unclear requirements later.

---

**Branch created:** 2025-10-14
**Demonstrates:** ChatGPT for product planning
**Next branch:** `demo-2-cursor-basic`
