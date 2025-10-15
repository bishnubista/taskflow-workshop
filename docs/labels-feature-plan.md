# ChatGPT Planning: Task Labels Feature

## Prompt Given to ChatGPT

```
I'm building a task management app called TaskFlow. I want to add a "labels"
feature where users can:
- Create custom labels (e.g., "Bug", "Feature", "Urgent", "Backend")
- Add multiple labels to a single task
- Remove labels from tasks
- Filter tasks by label
- See all labels in the system

Design the data model, API endpoints, and explain the implementation approach.
Focus on simplicity for an MVP.
```

## ChatGPT's Response

### Data Model Design

**Labels Table:**
```javascript
{
  id: "label-uuid",
  name: "Bug",
  color: "#FF0000",  // Hex color for visual distinction
  created_at: "2025-10-15T10:00:00Z"
}
```

**Task-Labels Junction Table (Many-to-Many):**
```javascript
{
  task_id: "task-uuid",
  label_id: "label-uuid",
  created_at: "2025-10-15T10:05:00Z"
}
```

**Why Many-to-Many?**
- A task can have multiple labels (e.g., "Bug" + "Urgent")
- A label can be on multiple tasks
- Need junction table to avoid data duplication

### API Endpoints Design

**Labels CRUD:**
```
GET    /api/labels              # List all labels
POST   /api/labels              # Create new label
PUT    /api/labels/:id          # Update label (name, color)
DELETE /api/labels/:id          # Delete label (removes from all tasks)
```

**Task-Label Association:**
```
POST   /api/tasks/:id/labels    # Add label to task
DELETE /api/tasks/:id/labels/:labelId  # Remove label from task
GET    /api/tasks/:id/labels    # Get all labels for a task
```

**Filtering:**
```
GET /api/tasks?label=label-id   # Filter tasks by label
```

### Request/Response Examples

**Create Label:**
```http
POST /api/labels
Content-Type: application/json

{
  "name": "Bug",
  "color": "#FF0000"
}

Response: 201 Created
{
  "success": true,
  "data": {
    "id": "label-1",
    "name": "Bug",
    "color": "#FF0000",
    "created_at": "2025-10-15T10:00:00Z"
  }
}
```

**Add Label to Task:**
```http
POST /api/tasks/task-123/labels
Content-Type: application/json

{
  "label_id": "label-1"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "task_id": "task-123",
    "label_id": "label-1"
  }
}
```

**Get Tasks with Labels:**
```http
GET /api/tasks

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "task-123",
      "title": "Fix login bug",
      "status": "in_progress",
      "labels": [
        {
          "id": "label-1",
          "name": "Bug",
          "color": "#FF0000"
        },
        {
          "id": "label-2",
          "name": "Urgent",
          "color": "#FFA500"
        }
      ]
    }
  ]
}
```

### Implementation Approach

**Backend (Phase 1):**
1. Create labels array (in-memory for MVP)
2. Create taskLabels array for associations
3. Implement label CRUD endpoints
4. Implement task-label association endpoints
5. Update GET /api/tasks to include labels

**Frontend (Phase 2):**
1. LabelForm component (create labels)
2. LabelList component (show all labels)
3. LabelSelector component (add labels to tasks)
4. Update TaskList to display labels
5. Add label filter dropdown

**Database Migration (Phase 3):**
- When moving to SQLite, create proper tables
- Add indexes on foreign keys for performance

### UI/UX Considerations

**Label Display:**
- Show as colored badges/chips
- Max 3 labels visible, "+2 more" if overflow
- Click label to filter tasks by that label

**Label Creation:**
- Simple form: name + color picker
- Suggest common colors (red, yellow, green, blue)
- Validate unique names

**Label Management:**
- Edit label → updates all tasks using it
- Delete label → removes from all tasks (warn user)
- Archive option (hide but don't delete)

### Validation Rules

**Label Name:**
- Required
- 1-50 characters
- Unique (case-insensitive)
- Trim whitespace

**Label Color:**
- Required
- Valid hex format (#RRGGBB)
- Default to gray if not provided

**Task-Label Association:**
- Task must exist
- Label must exist
- No duplicate associations (same label twice on one task)

### Edge Cases to Handle

1. **Delete label with tasks:** Remove all associations first
2. **Task with many labels:** UI should handle 10+ labels gracefully
3. **Label with no tasks:** Still show in label list (can be used later)
4. **Filter by non-existent label:** Return empty array
5. **Create duplicate label:** Return 400 error

### Testing Checklist

Backend:
- [ ] Create label with valid data
- [ ] Create label with duplicate name → 400
- [ ] Add label to task
- [ ] Add same label twice → 400
- [ ] Remove label from task
- [ ] Delete label → removes from all tasks
- [ ] Filter tasks by label
- [ ] Get tasks includes labels array

Frontend:
- [ ] Create label shows in list
- [ ] Add label to task shows badge
- [ ] Remove label updates UI
- [ ] Filter by label works
- [ ] Color picker works
- [ ] Label limit UI (3 visible + more)

### Success Metrics

**MVP Launch:**
- Users can create 5+ labels
- Average task has 2 labels
- 80%+ of users use label filtering
- No performance issues with 100+ tasks

### Future Enhancements (Post-MVP)

- Smart labels (auto-apply based on keywords)
- Label templates (predefined sets)
- Label analytics (most used, trends)
- Custom label icons (not just colors)
- Label hierarchies (parent/child)

---

## Key Insights from ChatGPT

1. **Many-to-many relationship** is essential (junction table)
2. **Color coding** improves UX significantly
3. **Cascade delete** needed when removing labels
4. **Start simple** - in-memory first, database later
5. **Validation** prevents bad data early

## Next Steps

1. Review this plan with team
2. Estimate: ~2-3 days for full implementation
3. Break into phases: Backend → Frontend → Polish
4. Consider starting with read-only labels (no CRUD) for faster MVP

---

**Planning session completed:** 2025-10-15
**Tool used:** ChatGPT 4
**Time spent:** ~10 minutes
