# Labels API Design Document

Complete API specification for the Task Labels feature.

## Base URL

`http://localhost:3000/api`

## Labels Endpoints

### GET /api/labels

Get all labels in the system.

**Request:**
```http
GET /api/labels
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": "label-1",
      "name": "Bug",
      "color": "#FF0000",
      "created_at": "2025-10-15T10:00:00Z"
    },
    {
      "id": "label-2",
      "name": "Feature",
      "color": "#00FF00",
      "created_at": "2025-10-15T10:01:00Z"
    }
  ]
}
```

---

### POST /api/labels

Create a new label.

**Request:**
```http
POST /api/labels
Content-Type: application/json

{
  "name": "Urgent",
  "color": "#FFA500"
}
```

**Validation:**
- `name`: Required, 1-50 chars, unique (case-insensitive)
- `color`: Optional, hex format (#RRGGBB), defaults to #808080

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "label-3",
    "name": "Urgent",
    "color": "#FFA500",
    "created_at": "2025-10-15T10:02:00Z"
  }
}
```

**Error:** `400 Bad Request`
```json
{
  "success": false,
  "error": "Label name already exists",
  "code": "DUPLICATE_LABEL"
}
```

---

### PUT /api/labels/:id

Update an existing label.

**Request:**
```http
PUT /api/labels/label-1
Content-Type: application/json

{
  "name": "Critical Bug",
  "color": "#CC0000"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "label-1",
    "name": "Critical Bug",
    "color": "#CC0000",
    "created_at": "2025-10-15T10:00:00Z"
  }
}
```

---

### DELETE /api/labels/:id

Delete a label and remove it from all tasks.

**Request:**
```http
DELETE /api/labels/label-1
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "message": "Label deleted and removed from 5 tasks",
    "id": "label-1"
  }
}
```

---

## Task-Label Association Endpoints

### POST /api/tasks/:taskId/labels

Add a label to a task.

**Request:**
```http
POST /api/tasks/task-123/labels
Content-Type: application/json

{
  "label_id": "label-1"
}
```

**Validation:**
- Task must exist
- Label must exist
- Cannot add same label twice

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "task_id": "task-123",
    "label_id": "label-1",
    "created_at": "2025-10-15T10:05:00Z"
  }
}
```

**Error:** `400 Bad Request`
```json
{
  "success": false,
  "error": "Label already added to this task",
  "code": "DUPLICATE_ASSOCIATION"
}
```

---

### DELETE /api/tasks/:taskId/labels/:labelId

Remove a label from a task.

**Request:**
```http
DELETE /api/tasks/task-123/labels/label-1
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "message": "Label removed from task"
  }
}
```

---

### GET /api/tasks/:taskId/labels

Get all labels for a specific task.

**Request:**
```http
GET /api/tasks/task-123/labels
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
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
```

---

## Updated Tasks Endpoint

### GET /api/tasks

Now includes labels in each task.

**Request:**
```http
GET /api/tasks?label=label-1
```

**Query Parameters:**
- `status`: Filter by status
- `assignee`: Filter by assignee
- `label`: Filter by label ID

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": "task-123",
      "title": "Fix login bug",
      "description": "Users can't login with Google",
      "status": "in_progress",
      "assignee": {
        "id": "user-1",
        "name": "Sarah Johnson"
      },
      "creator": {
        "id": "user-2",
        "name": "Mike Chen"
      },
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
      ],
      "due_date": "2025-10-20",
      "created_at": "2025-10-10T09:00:00Z",
      "updated_at": "2025-10-14T10:30:00Z",
      "completed_at": null
    }
  ]
}
```

---

## Data Models

### In-Memory Storage

```javascript
// Labels array
const labels = [
  {
    id: "label-1",
    name: "Bug",
    color: "#FF0000",
    created_at: "2025-10-15T10:00:00Z"
  }
];

// Task-Label associations
const taskLabels = [
  {
    task_id: "task-123",
    label_id: "label-1",
    created_at: "2025-10-15T10:05:00Z"
  }
];
```

### Future SQLite Schema

```sql
CREATE TABLE labels (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  color TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE task_labels (
  task_id TEXT NOT NULL,
  label_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY (task_id, label_id),
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (label_id) REFERENCES labels(id) ON DELETE CASCADE
);

CREATE INDEX idx_task_labels_task ON task_labels(task_id);
CREATE INDEX idx_task_labels_label ON task_labels(label_id);
```

---

## Implementation Notes

### Backend Priority Order

1. **Phase 1:** Labels CRUD (GET, POST, PUT, DELETE /api/labels)
2. **Phase 2:** Task-label association (POST, DELETE /api/tasks/:id/labels)
3. **Phase 3:** Update GET /api/tasks to include labels
4. **Phase 4:** Add label filtering to GET /api/tasks

### Frontend Priority Order

1. **Phase 1:** LabelList component (display all labels)
2. **Phase 2:** LabelForm component (create labels)
3. **Phase 3:** LabelSelector component (add to tasks)
4. **Phase 4:** Update TaskList to show labels
5. **Phase 5:** Add label filter UI

### Testing Priority

- [ ] Create/read/update/delete labels
- [ ] Add label to task
- [ ] Remove label from task
- [ ] Filter tasks by label
- [ ] Delete label removes from all tasks
- [ ] Prevent duplicate label names
- [ ] Validate color format

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Invalid input data |
| `DUPLICATE_LABEL` | 400 | Label name already exists |
| `DUPLICATE_ASSOCIATION` | 400 | Label already on task |
| `NOT_FOUND` | 404 | Label or task not found |
| `SERVER_ERROR` | 500 | Internal server error |

---

**Document Status:** Ready for implementation
**API Version:** 1.0
**Created:** 2025-10-15 (with ChatGPT assistance)
