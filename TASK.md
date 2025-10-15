# Exercise: Enhance Labels with Cursor Composer

**Time:** 10 minutes
**Tool:** Cursor Composer (CMD+I)
**Difficulty:** Medium

## Context

You have a working Labels feature that allows creating, editing, and deleting labels. However, the UI could be more polished and the labels aren't yet integrated with tasks. Let's use Cursor Composer to enhance it across multiple files!

## Your Task

Choose ONE of these enhancements to implement using Cursor Composer:

### Option A: Add Label Filtering to Tasks (Recommended)
Add the ability to filter tasks by label in the TaskList component:
1. Add a label filter dropdown above the task list
2. Update the backend API to support `?label=label-id` query parameter
3. Wire up the filter to refresh tasks when changed

### Option B: Show Labels on Tasks
Display labels as colored badges on each task:
1. Add a label selector to TaskForm (multi-select)
2. Display selected labels on each task in TaskList
3. Fetch label details and show as colored badges

### Option C: Add Label Presets
Add common label presets for quick creation:
1. Add a "Quick Add" section with preset buttons (Bug, Feature, Enhancement)
2. Clicking a preset creates the label with predefined colors
3. Update backend if needed for bulk label creation

## Why Cursor Composer?

This is perfect for Composer because:
- ✅ Changes span multiple files (frontend + backend)
- ✅ Components need to be coordinated
- ✅ Clear requirements with defined scope

## Step-by-Step Guide

### Step 1: Open Composer
Press `CMD+I` (Mac) or `CTRL+I` (Windows/Linux)
- This opens the floating Composer window
- Or use `CMD+Shift+I` for full-screen mode

### Step 2: Write Your Prompt

For **Option A** (Label Filtering):
```
Add label filtering to the task list:
1. Add a dropdown in TaskList.jsx to select a label
2. Update backend GET /api/tasks to accept ?label=label-id query parameter
3. Filter tasks by the selected label_ids array
4. Show "All Labels" option to clear the filter
5. Fetch labels list to populate the dropdown
```

For **Option B** (Show Labels on Tasks):
```
Show labels on tasks as colored badges:
1. Add label selector (checkboxes) to TaskForm.jsx
2. Include label_ids when creating tasks
3. In TaskList.jsx, fetch label details for each task
4. Display labels as colored badges below task title
5. Use the same badge styling from LabelManager
```

For **Option C** (Label Presets):
```
Add quick-add label presets to LabelManager:
1. Add a "Quick Add" section with 3 preset buttons above the form
2. Presets: Bug (red #ef4444), Feature (blue #3b82f6), Enhancement (green #10b981)
3. Clicking a preset creates the label immediately
4. Show feedback when preset is added
5. Hide presets that already exist
```

### Step 3: Review Composer's Plan
Composer will show you:
- Which files it will modify
- What changes it will make to each file
- A preview of the code changes

**Important:** Read through the proposed changes!

### Step 4: Accept or Modify
- Click **"Accept All"** to apply all changes
- Or click individual files to accept/reject specific changes
- You can add follow-up prompts if needed

### Step 5: Test It
1. Make sure both backend and frontend are running
2. Test the new feature:
   - For Option A: Try filtering tasks by label
   - For Option B: Add labels to a task and see them displayed
   - For Option C: Quick-add a preset label
3. Fix any issues with follow-up Composer prompts

## Expected Result

### Option A: Label Filtering
```
┌─────────────────────────────────────┐
│ Filter by: [All Labels ▼]          │ ← New dropdown
└─────────────────────────────────────┘

Tasks matching selected label shown below...
```

### Option B: Labels on Tasks
```
┌─────────────────────────────────────┐
│ Buy groceries                       │
│ [Bug] [Urgent]                      │ ← Colored badges
│ Assigned: Sarah  |  Due: Oct 20    │
└─────────────────────────────────────┘
```

### Option C: Label Presets
```
┌─────────────────────────────────────┐
│ Quick Add: [Bug] [Feature] [Enhancement] │ ← Preset buttons
└─────────────────────────────────────┘
```

## Common Issues

### Issue 1: Composer Changes Too Many Files
**Fix:** Be more specific in your prompt. Mention exact file names:
```
Only modify TaskList.jsx and backend/src/routes/tasks.js
```

### Issue 2: Backend Changes Don't Include Validation
**Fix:** Add to your prompt:
```
Add proper validation and error handling in the backend
```

### Issue 3: Frontend Doesn't Handle Errors
**Fix:** Follow up with:
```
Add error handling in the frontend for when the API call fails
```

### Issue 4: Changes Break Existing Functionality
**Fix:** Use git to see what changed:
```bash
git diff
```
Then ask Composer to fix specific issues.

## Bonus Challenges

If you finish early:

### Bonus 1: Add Label Search
Add a search bar to filter labels by name in LabelManager

### Bonus 2: Add Label Statistics
Show count of tasks using each label (e.g., "Bug (3)")

### Bonus 3: Add Bulk Label Actions
Add "Apply label to all selected tasks" functionality

## Key Takeaways

After this exercise, you should understand:

1. **When Composer shines:** Multi-file, coordinated changes
2. **Prompt specificity:** Clear requirements = better results
3. **File context:** Composer understands relationships between files
4. **Iterative refinement:** You can follow up to fix issues
5. **Code review is critical:** Always review Composer's changes

## Cursor Composer vs CMD+K

| Feature | CMD+K (Inline) | CMD+I (Composer) |
|---------|----------------|------------------|
| Scope | Single file | Multiple files |
| Speed | Very fast | Moderate |
| Context | Current file | Whole project |
| Best for | Small edits | Features |
| Review | Inline diff | Multi-file panel |

## What's Next?

This showed how Cursor Composer handles multi-file features. In the next demo (demo-4), you'll use **Claude Code** for even more complex enhancements with planning and autonomous agents!

---

**Pro Tip:** If Composer's first attempt isn't perfect:
1. Don't accept the changes yet
2. Add a follow-up message: "The filter isn't working, please fix the API query parameter parsing"
3. Composer will refine its changes before applying them
