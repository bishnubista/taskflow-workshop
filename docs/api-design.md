# TaskFlow API Design Document

**Version:** 1.0
**Status:** Draft
**Last Updated:** 2025-10-14
**Generated with ChatGPT assistance**

## Overview

RESTful API for TaskFlow task management system. This document defines all endpoints, request/response formats, error handling, and data validation rules.

## Base Configuration

**Base URL:** `http://localhost:3000/api`

**Content Type:** `application/json`

**Authentication:** None for MVP (user selection via dropdown)

**Rate Limiting:** 100 requests per minute per IP

## Response Format

All API responses follow this consistent structure:

### Success Response
```json
{
  "success": true,
  "data": { /* response payload */ }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Human-readable error message",
  "code": "ERROR_CODE"
}
```

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Invalid request data |
| `NOT_FOUND` | 404 | Resource not found |
| `UNAUTHORIZED` | 401 | Authentication required (future) |
| `FORBIDDEN` | 403 | Insufficient permissions (future) |
| `SERVER_ERROR` | 500 | Internal server error |
| `RATE_LIMITED` | 429 | Too many requests |

---

## Endpoints

### Health Check

#### `GET /health`

Check if API is running.

**Authentication:** None

**Request:**
```http
GET /health
```

**Response:** `200 OK`
```json
{
  "status": "ok",
  "message": "TaskFlow API is running",
  "timestamp": "2025-10-14T10:30:00Z"
}
```

---

### Users

#### `GET /api/users`

Get list of all users.

**Note:** For MVP, returns pre-seeded users. No user registration endpoint.

**Request:**
```http
GET /api/users
```

**Query Parameters:** None

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": "user-uuid-1",
      "name": "Sarah Johnson",
      "email": "sarah@example.com",
      "avatar_url": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      "created_at": "2025-10-01T00:00:00Z"
    },
    {
      "id": "user-uuid-2",
      "name": "Mike Chen",
      "email": "mike@example.com",
      "avatar_url": "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      "created_at": "2025-10-01T00:00:00Z"
    }
  ]
}
```

---

### Tasks

#### `GET /api/tasks`

Get list of tasks with optional filters.

**Request:**
```http
GET /api/tasks?status=todo&assignee=user-uuid-1&sort=due_date
```

**Query Parameters:**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `status` | string | No | Filter by status | `todo`, `in_progress`, `done`, `all` |
| `assignee` | string | No | Filter by assignee ID | `user-uuid-1` or `unassigned` |
| `due_date_from` | string | No | Filter by due date (from) | `2025-10-14` (ISO 8601) |
| `due_date_to` | string | No | Filter by due date (to) | `2025-10-21` |
| `sort` | string | No | Sort field | `due_date`, `created_at`, `updated_at` |
| `order` | string | No | Sort order | `asc`, `desc` (default: `asc`) |
| `limit` | number | No | Results per page | `1-100` (default: `50`) |
| `offset` | number | No | Pagination offset | `0` (default: `0`) |

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "task-uuid-1",
        "title": "Implement user authentication",
        "description": "Add JWT-based authentication to the API",
        "status": "in_progress",
        "assignee": {
          "id": "user-uuid-1",
          "name": "Sarah Johnson",
          "email": "sarah@example.com"
        },
        "creator": {
          "id": "user-uuid-2",
          "name": "Mike Chen",
          "email": "mike@example.com"
        },
        "due_date": "2025-10-20",
        "created_at": "2025-10-10T09:00:00Z",
        "updated_at": "2025-10-14T10:30:00Z",
        "completed_at": null
      }
    ],
    "pagination": {
      "total": 1,
      "limit": 50,
      "offset": 0,
      "has_more": false
    }
  }
}
```

**Error Responses:**
- `400 Bad Request` - Invalid filter parameters
- `500 Internal Server Error` - Database error

---

#### `GET /api/tasks/:id`

Get a single task by ID.

**Request:**
```http
GET /api/tasks/task-uuid-1
```

**Path Parameters:**
- `id` (string, required) - Task UUID

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "task-uuid-1",
    "title": "Implement user authentication",
    "description": "Add JWT-based authentication to the API",
    "status": "in_progress",
    "assignee": {
      "id": "user-uuid-1",
      "name": "Sarah Johnson",
      "email": "sarah@example.com"
    },
    "creator": {
      "id": "user-uuid-2",
      "name": "Mike Chen",
      "email": "mike@example.com"
    },
    "due_date": "2025-10-20",
    "created_at": "2025-10-10T09:00:00Z",
    "updated_at": "2025-10-14T10:30:00Z",
    "completed_at": null
  }
}
```

**Error Responses:**
- `404 Not Found` - Task does not exist

---

#### `POST /api/tasks`

Create a new task.

**Request:**
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Fix bug in login flow",
  "description": "Users are unable to login with Google OAuth",
  "status": "todo",
  "assignee_id": "user-uuid-1",
  "creator_id": "user-uuid-2",
  "due_date": "2025-10-18"
}
```

**Request Body:**

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| `title` | string | **Yes** | 1-255 chars | Task title |
| `description` | string | No | Max 10,000 chars | Detailed description (markdown) |
| `status` | string | No | enum | `todo` (default), `in_progress`, `done` |
| `assignee_id` | string | No | valid UUID | User to assign task to |
| `creator_id` | string | **Yes** | valid UUID | User creating the task |
| `due_date` | string | No | ISO 8601 date | When task is due |

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "task-uuid-2",
    "title": "Fix bug in login flow",
    "description": "Users are unable to login with Google OAuth",
    "status": "todo",
    "assignee": {
      "id": "user-uuid-1",
      "name": "Sarah Johnson",
      "email": "sarah@example.com"
    },
    "creator": {
      "id": "user-uuid-2",
      "name": "Mike Chen",
      "email": "mike@example.com"
    },
    "due_date": "2025-10-18",
    "created_at": "2025-10-14T10:45:00Z",
    "updated_at": "2025-10-14T10:45:00Z",
    "completed_at": null
  }
}
```

**Error Responses:**
- `400 Bad Request` - Validation failed
  ```json
  {
    "success": false,
    "error": "Validation failed",
    "code": "VALIDATION_ERROR",
    "details": [
      {
        "field": "title",
        "message": "Title is required"
      }
    ]
  }
  ```
- `404 Not Found` - Creator or assignee user does not exist

---

#### `PUT /api/tasks/:id`

Update an existing task.

**Request:**
```http
PUT /api/tasks/task-uuid-1
Content-Type: application/json

{
  "title": "Implement user authentication (Updated)",
  "status": "done",
  "completed_at": "2025-10-14T11:00:00Z"
}
```

**Path Parameters:**
- `id` (string, required) - Task UUID

**Request Body:**

All fields are optional. Only include fields you want to update.

| Field | Type | Validation | Description |
|-------|------|------------|-------------|
| `title` | string | 1-255 chars | Task title |
| `description` | string | Max 10,000 chars | Task description |
| `status` | string | enum | `todo`, `in_progress`, `done` |
| `assignee_id` | string | valid UUID or `null` | Reassign or unassign task |
| `due_date` | string | ISO 8601 date or `null` | Update or clear due date |
| `completed_at` | string | ISO 8601 timestamp | Set when status changes to `done` |

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "task-uuid-1",
    "title": "Implement user authentication (Updated)",
    "description": "Add JWT-based authentication to the API",
    "status": "done",
    "assignee": {
      "id": "user-uuid-1",
      "name": "Sarah Johnson",
      "email": "sarah@example.com"
    },
    "creator": {
      "id": "user-uuid-2",
      "name": "Mike Chen",
      "email": "mike@example.com"
    },
    "due_date": "2025-10-20",
    "created_at": "2025-10-10T09:00:00Z",
    "updated_at": "2025-10-14T11:00:00Z",
    "completed_at": "2025-10-14T11:00:00Z"
  }
}
```

**Business Rules:**
- When `status` changes to `done`, automatically set `completed_at` to current timestamp
- When `status` changes from `done` to anything else, set `completed_at` to `null`
- `creator_id` cannot be changed
- `updated_at` is automatically set to current timestamp

**Error Responses:**
- `400 Bad Request` - Validation failed
- `404 Not Found` - Task does not exist

---

#### `DELETE /api/tasks/:id`

Delete a task (hard delete for MVP).

**Request:**
```http
DELETE /api/tasks/task-uuid-1
```

**Path Parameters:**
- `id` (string, required) - Task UUID

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "message": "Task deleted successfully",
    "id": "task-uuid-1"
  }
}
```

**Business Rules:**
- Hard delete (permanent removal)
- Any user can delete any task (for MVP)
- Future: Only creator or assignee can delete

**Error Responses:**
- `404 Not Found` - Task does not exist
- `403 Forbidden` - Insufficient permissions (future)

---

## Data Validation Rules

### Task Title
- Required: Yes
- Type: String
- Min length: 1 character
- Max length: 255 characters
- Trim whitespace before validation
- Cannot be only whitespace

### Task Description
- Required: No
- Type: String (markdown supported)
- Max length: 10,000 characters
- Null/empty allowed

### Task Status
- Required: No (defaults to `todo`)
- Type: Enum
- Allowed values: `todo`, `in_progress`, `done`
- Case-sensitive

### User IDs (assignee_id, creator_id)
- Required: `creator_id` yes, `assignee_id` no
- Type: UUID v4
- Must reference existing user in database
- Can use `null` to unassign

### Due Date
- Required: No
- Type: ISO 8601 date string (`YYYY-MM-DD`)
- Must be today or future date
- Can be `null`

### Timestamps
- Auto-generated by server
- Format: ISO 8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`)
- Always in UTC

---

## Example Request Flows

### Flow 1: Create Task and Update Status

**Step 1: Create Task**
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Review pull request #42",
  "description": "Check for security issues and code quality",
  "assignee_id": "user-uuid-1",
  "creator_id": "user-uuid-2",
  "due_date": "2025-10-15"
}
```

Response: `201 Created` with task object (id: `task-uuid-3`)

**Step 2: Start Working**
```http
PUT /api/tasks/task-uuid-3
Content-Type: application/json

{
  "status": "in_progress"
}
```

Response: `200 OK` with updated task

**Step 3: Complete Task**
```http
PUT /api/tasks/task-uuid-3
Content-Type: application/json

{
  "status": "done"
}
```

Response: `200 OK` with `completed_at` automatically set

### Flow 2: Filter and Search

**Get all tasks assigned to Sarah that are in progress:**
```http
GET /api/tasks?assignee=user-uuid-1&status=in_progress&sort=due_date&order=asc
```

**Get all overdue tasks:**
```http
GET /api/tasks?due_date_to=2025-10-13&status=todo,in_progress
```

**Get recent tasks:**
```http
GET /api/tasks?sort=created_at&order=desc&limit=10
```

---

## Rate Limiting

**Limit:** 100 requests per minute per IP address

**Response when rate limited:** `429 Too Many Requests`
```json
{
  "success": false,
  "error": "Rate limit exceeded. Please try again in 60 seconds.",
  "code": "RATE_LIMITED",
  "retry_after": 60
}
```

**Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1697281200
```

---

## Security Considerations

### Input Validation
- All inputs validated on server side
- SQL injection prevention via parameterized queries
- XSS prevention: HTML escaped in responses
- Max request body size: 1MB

### Authentication (Future)
- JWT tokens in `Authorization: Bearer <token>` header
- Token expiry: 24 hours
- Refresh token mechanism

### Authorization (Future)
- Users can only delete their own tasks or assigned tasks
- Admin role for system-wide access

---

## Versioning

**Current Version:** v1 (implied in `/api` prefix)

**Future:** `/api/v2` when breaking changes introduced

**Deprecation Policy:**
- Old versions supported for 6 months
- Deprecation warning in response headers
- Migration guide provided

---

## Testing

### Test Users (Pre-seeded)
```json
[
  { "id": "user-1", "name": "Sarah Johnson", "email": "sarah@example.com" },
  { "id": "user-2", "name": "Mike Chen", "email": "mike@example.com" },
  { "id": "user-3", "name": "Lisa Patel", "email": "lisa@example.com" }
]
```

### Sample Test Tasks
See `backend/tests/fixtures/tasks.json` for sample data.

---

**Document Status:** Ready for Implementation
**API Version:** 1.0
**Next Review:** After MVP implementation
**Changelog:**
- 2025-10-14: Initial draft created with ChatGPT assistance
