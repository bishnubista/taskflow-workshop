# Exercise: Add "Clear Completed" with Cursor CMD+K

**Time:** 5 minutes
**Tool:** Cursor CMD+K (inline edit)
**Difficulty:** Easy

## Context

You have a working task management app. Users can create tasks and mark them as done, but there's no way to bulk-delete completed tasks. Let's add a "Clear Completed" button!

## Your Task

Add a "Clear Completed" button to the TaskList component that:
1. Shows a count of completed tasks (e.g., "Clear Completed (3)")
2. Only appears when there are completed tasks
3. Removes all tasks with `status: 'done'`
4. Shows a confirmation dialog before deleting

## Why Cursor CMD+K?

This is perfect for CMD+K because:
- ✅ Single file change (TaskList.jsx)
- ✅ Small, focused feature
- ✅ Clear requirements

## Step-by-Step Guide

### Step 1: Open the File
```bash
# Open in Cursor
frontend/src/components/TaskList.jsx
```

### Step 2: Highlight the Return Statement
Find the `return (` section with the task list UI. Highlight the entire JSX block.

### Step 3: Use CMD+K
Press `CMD+K` (or `CTRL+K` on Windows), then type:

```
Add a "Clear Completed" button above the task list that:
- Shows count of completed tasks
- Only appears if there are completed tasks
- Confirms before deleting
- Filters out tasks with status 'done' from the tasks array
```

### Step 4: Review & Accept
Cursor will suggest changes. Review them:
- Does it add the button?
- Does it filter completed tasks?
- Does it show a confirmation?

If yes, press **Enter** to accept. If no, press **Esc** and try rephrasing.

### Step 5: Test It
1. Start the app: `npm run dev` (if not already running)
2. Create a few tasks
3. Mark some as "Done"
4. Click "Clear Completed"
5. Confirm the dialog
6. Verify completed tasks are removed

## Expected Result

You should see something like:

```
┌─────────────────────────────────────┐
│ Clear Completed (3)                 │ ← New button
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ ☐ Buy groceries         [To Do]    │
│ ☑ Write documentation   [Done]     │ ← Will be removed
│ ☐ Review pull requests  [In Progr] │
│ ☑ Fix bug #123          [Done]     │ ← Will be removed
└─────────────────────────────────────┘
```

## Common Issues

### Issue 1: Button Appears Even with No Completed Tasks
**Fix:** Add a conditional render:
```jsx
{completedCount > 0 && (
  <button onClick={handleClearCompleted}>
    Clear Completed ({completedCount})
  </button>
)}
```

### Issue 2: No Confirmation Dialog
**Fix:** Use `window.confirm()`:
```javascript
const handleClearCompleted = () => {
  if (window.confirm(`Delete ${completedCount} completed tasks?`)) {
    setTasks(tasks.filter(task => task.status !== 'done'));
  }
};
```

### Issue 3: Tasks Reappear on Refresh
**Expected!** This app uses in-memory storage. If you want persistence, that's a demo-3 exercise.

## Bonus Challenges

If you finish early, try these:

### Bonus 1: Add Styling
Make the button look like a danger action:
```css
background: #dc3545;
color: white;
border: none;
padding: 8px 16px;
```

### Bonus 2: Add Animation
Show a toast notification: "3 tasks cleared!"

### Bonus 3: Backend Integration
Update the backend to add a `DELETE /api/tasks/completed` endpoint.

## Key Takeaways

After this exercise, you should understand:
1. **When to use CMD+K:** Single-file, focused changes
2. **Prompt clarity matters:** Specific instructions = better results
3. **AI suggestions need review:** Always check before accepting
4. **Iteration is fast:** If first suggestion isn't perfect, try again

## What's Next?

This was a simple, single-file change. In the next demo (demo-3), you'll use **Cursor Composer** to build the full Labels feature across multiple files!

---

**Pro Tip:** If CMD+K doesn't give you the right result, try:
- Being more specific in your prompt
- Breaking the task into smaller steps
- Highlighting less code (smaller context = more focused suggestions)
