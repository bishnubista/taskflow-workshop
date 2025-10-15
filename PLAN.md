# Analytics Dashboard Feature Plan

**Created**: 2025-10-15
**Status**: Ready for implementation
**Tool**: Claude Code Plan Mode
**Estimated Time**: 30 minutes

## Overview

Add a simple analytics dashboard to TaskFlow that shows task and label statistics. This feature demonstrates Claude Code's planning capabilities and how it handles complex features with multiple components.

## Goals

1. ✅ Help users understand their task distribution
2. ✅ Show label usage statistics
3. ✅ Provide visual feedback with simple charts
4. ✅ Keep implementation workshop-friendly (no heavy dependencies)

## Non-Goals

- ❌ No complex charting libraries (keep it simple)
- ❌ No historical data (current snapshot only)
- ❌ No export functionality
- ❌ No filtering/date ranges

## Feature Breakdown

### Phase 1: Backend Analytics API (10 min)

**File**: `backend/src/routes/analytics.js`

Create a new endpoint: `GET /api/analytics`

**Response**:
```json
{
  "success": true,
  "data": {
    "tasks": {
      "total": 15,
      "by_status": {
        "todo": 5,
        "in_progress": 3,
        "done": 7
      },
      "by_assignee": [
        { "assignee_id": "user-1", "name": "Sarah", "count": 6 },
        { "assignee_id": "user-2", "name": "Mike", "count": 4 },
        { "assignee_id": null, "name": "Unassigned", "count": 5 }
      ],
      "overdue": 2,
      "due_today": 1,
      "due_this_week": 3
    },
    "labels": {
      "total": 5,
      "usage": [
        { "label_id": "label-1", "name": "Bug", "color": "#ef4444", "count": 8 },
        { "label_id": "label-2", "name": "Feature", "color": "#3b82f6", "count": 4 },
        { "label_id": "label-3", "name": "Enhancement", "color": "#10b981", "count": 3 }
      ]
    }
  }
}
```

**Implementation checklist**:
- [ ] Create `analytics.js` route file
- [ ] Import and use tasks/labels data from their respective routes
- [ ] Calculate task statistics (total, by status, by assignee)
- [ ] Calculate label usage (count tasks per label)
- [ ] Handle edge cases (no tasks, no labels)
- [ ] Add error handling
- [ ] Register route in `index.js`

### Phase 2: Analytics Component (15 min)

**File**: `frontend/src/components/Analytics.jsx`

Create a dashboard component with:
1. **Task Overview Section**
   - Total tasks card
   - Status breakdown (todo/in progress/done)
   - Simple progress bar

2. **Label Usage Section**
   - List of labels with usage count
   - Colored badges matching label colors
   - Sort by most used

3. **Assignee Breakdown**
   - List of assignees with task counts
   - Show unassigned count

**Implementation checklist**:
- [ ] Create `Analytics.jsx` component
- [ ] Fetch analytics data from API
- [ ] Handle loading/error states
- [ ] Build TaskOverview sub-section
- [ ] Build LabelUsage sub-section
- [ ] Build AssigneeBreakdown sub-section
- [ ] Add simple CSS for cards/badges
- [ ] Make it responsive (mobile-friendly)

### Phase 3: Integration (5 min)

**Files**: `frontend/src/App.jsx`

Add Analytics dashboard to the main app:
- [ ] Import Analytics component
- [ ] Add navigation/toggle to show/hide analytics
- [ ] Position above or below existing sections
- [ ] Update branch banner

## UI Mockup

```
┌─────────────────────────────────────────────────────────┐
│ Analytics Dashboard                        [Refresh]     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│ Task Overview                                            │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│ │ Total   │  │ To Do   │  │ In Prog │  │ Done    │    │
│ │   15    │  │    5    │  │    3    │  │   7     │    │
│ └─────────┘  └─────────┘  └─────────┘  └─────────┘    │
│                                                           │
│ Progress: [███████████████░░░░░] 47% Complete           │
│                                                           │
├─────────────────────────────────────────────────────────┤
│ Label Usage                                              │
│ [Bug        (8)]  ████████                              │
│ [Feature    (4)]  ████                                  │
│ [Enhancement(3)]  ███                                   │
│                                                           │
├─────────────────────────────────────────────────────────┤
│ By Assignee                                              │
│ Sarah Johnson    - 6 tasks                              │
│ Mike Chen        - 4 tasks                              │
│ Unassigned       - 5 tasks                              │
└─────────────────────────────────────────────────────────┘
```

## Success Criteria

✅ **Must Have**:
- Backend endpoint returns accurate statistics
- Frontend displays all data sections
- No errors in console
- Mobile-responsive layout

✅ **Nice to Have**:
- Smooth transitions/animations
- Auto-refresh every 30 seconds
- Empty states ("No tasks yet")

## Testing Checklist

- [ ] Start with empty data - should show zeros
- [ ] Create tasks - counts should update
- [ ] Add labels to tasks - usage should reflect
- [ ] Complete tasks - status breakdown changes
- [ ] Assign tasks - assignee breakdown updates
- [ ] Refresh page - data persists (until server restart)

## Implementation Notes

### Keep It Simple
- Use basic HTML/CSS for charts (div bars, not libraries)
- Inline styles are fine for workshop
- Focus on clarity over fancy animations

### Data Calculations
```javascript
// Example: Calculate overdue tasks
const now = new Date();
const overdue = tasks.filter(task =>
  task.due_date &&
  new Date(task.due_date) < now &&
  task.status !== 'done'
).length;
```

### Error Handling
```javascript
// Graceful fallbacks
const taskStats = analytics?.data?.tasks || { total: 0 };
```

## Future Enhancements (Out of Scope)

These are intentionally excluded for the workshop:
- Historical trends (line charts over time)
- Date range filters
- Export to CSV/PDF
- Drill-down views (click to see tasks)
- Customizable dashboard widgets

## Claude Code Workflow

When implementing this with Claude Code:

1. **Use Plan Mode**: Ask Claude to review this PLAN.md
2. **Context awareness**: Claude reads .claude/CONTEXT.md automatically
3. **Phase-by-phase**: Implement one phase at a time
4. **Validate each phase**: Test before moving to next
5. **Use agents**: Let Claude run tests autonomously

Example prompt for Claude Code:
```
Read PLAN.md and implement Phase 1: Backend Analytics API.
Follow the project conventions in .claude/CONTEXT.md.
Create the analytics route with all the statistics listed in the plan.
```

---

**This plan demonstrates**: How proper planning + context engineering enables Claude Code to implement complex features with minimal back-and-forth.
