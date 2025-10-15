# TaskFlow - Product Requirements Document (PRD)

**Status:** Draft
**Version:** 1.0
**Last Updated:** 2025-10-14
**Generated from ChatGPT brainstorming session**

## Overview

TaskFlow is a lightweight task management system designed for small teams (5-15 people) who need something between a simple to-do list and a full project management suite.

## Goals

### Primary Goals
1. Ship an MVP within 2 weeks
2. Enable teams to create, assign, and track tasks effortlessly
3. Provide clear visibility into team workload
4. Replace scattered task tracking (email, Slack, notebooks)

### Non-Goals (Out of Scope for MVP)
- Complex project management features (Gantt charts, dependencies)
- Time tracking
- File attachments
- Third-party integrations (Slack, email, etc.)
- Mobile native apps

## User Personas

### Persona 1: Team Lead (Primary)
- **Needs:** Task assignment, team overview, deadline tracking
- **Use Case:** Manage 5-8 direct reports, 20-30 active tasks
- **Success:** Can see team workload in < 10 seconds

### Persona 2: Individual Contributor (Primary)
- **Needs:** Clear task list, status updates, task details
- **Use Case:** 5-10 assigned tasks, updates 2-3x per day
- **Success:** Always knows what to work on next

### Persona 3: Project Manager (Secondary)
- **Needs:** Reporting, filtering, progress tracking
- **Use Case:** Oversees 2-3 teams, 50-100 tasks total
- **Success:** Can generate status reports quickly

## Functional Requirements

### 1. Task Management

#### 1.1 Create Task
**Priority:** P0 (Must Have)

**User Story:**
As a team lead, I want to create tasks so that I can track work items for my team.

**Acceptance Criteria:**
- [ ] User can create task with title (required)
- [ ] User can add description (optional, markdown supported)
- [ ] User can set due date (optional)
- [ ] User can assign to team member (optional)
- [ ] Task is saved with creator info and timestamp
- [ ] Success message shown on creation

**API Endpoint:**
```
POST /api/tasks
```

#### 1.2 View Tasks
**Priority:** P0 (Must Have)

**User Story:**
As a user, I want to view all my tasks and team tasks so that I know what needs to be done.

**Acceptance Criteria:**
- [ ] User can view list of all tasks
- [ ] User can view only tasks assigned to them
- [ ] Tasks show title, status, assignee, due date
- [ ] Tasks are sorted by due date (nearest first)
- [ ] Overdue tasks are highlighted

**API Endpoints:**
```
GET /api/tasks
GET /api/tasks?assignee=me
GET /api/tasks?status=todo
```

#### 1.3 Update Task
**Priority:** P0 (Must Have)

**User Story:**
As a user, I want to update task details and status so that information stays current.

**Acceptance Criteria:**
- [ ] User can edit title, description, due date
- [ ] User can change status (todo/in_progress/done)
- [ ] User can reassign task
- [ ] Changes are timestamped
- [ ] Original creator is preserved

**API Endpoint:**
```
PUT /api/tasks/:id
```

#### 1.4 Delete Task
**Priority:** P1 (Should Have)

**User Story:**
As a task creator, I want to delete tasks that are no longer relevant.

**Acceptance Criteria:**
- [ ] Only creator or assignee can delete
- [ ] Deletion is permanent (hard delete for MVP)
- [ ] Confirmation required before deletion
- [ ] Deleted tasks removed from all views

**API Endpoint:**
```
DELETE /api/tasks/:id
```

### 2. Task Filtering

#### 2.1 Filter by Status
**Priority:** P1 (Should Have)

**Acceptance Criteria:**
- [ ] User can filter by: todo, in_progress, done, or all
- [ ] Filter persists during session
- [ ] Task count shown for each status

#### 2.2 Filter by Assignee
**Priority:** P1 (Should Have)

**Acceptance Criteria:**
- [ ] User can filter by specific team member
- [ ] "My Tasks" shortcut filters to current user
- [ ] "Unassigned" filter shows unassigned tasks

#### 2.3 Filter by Date Range
**Priority:** P2 (Nice to Have)

**Acceptance Criteria:**
- [ ] User can filter by due date range
- [ ] Preset ranges: Today, This Week, This Month
- [ ] Custom date range picker available

### 3. User Management (Simplified)

#### 3.1 User List
**Priority:** P0 (Must Have)

**Note:** For MVP, users are pre-seeded in database. No registration/login flow.

**Acceptance Criteria:**
- [ ] System has predefined list of users
- [ ] API endpoint returns all users
- [ ] Frontend can display user list for assignment

**API Endpoint:**
```
GET /api/users
```

## Non-Functional Requirements

### Performance
- API response time < 200ms for 95% of requests
- Frontend initial load < 2s on 3G connection
- Support up to 1000 tasks without performance degradation

### Security
- Input validation on all endpoints
- SQL injection prevention
- XSS protection in frontend
- Rate limiting: 100 requests per minute per IP

### Scalability
- Support 10 concurrent users (MVP target)
- Database should handle 10,000 tasks
- Horizontal scaling not required for MVP

### Usability
- All actions require ≤ 3 clicks
- Mobile-responsive design (works on phones)
- No training required - intuitive UI
- Accessible (WCAG 2.1 Level A minimum)

### Reliability
- 95% uptime during beta
- Automated backups daily
- Error messages are user-friendly
- Graceful degradation if API is down

## Data Model

### Task Entity
| Field | Type | Required | Default |
|-------|------|----------|---------|
| id | UUID | Yes | auto |
| title | String(255) | Yes | - |
| description | Text | No | null |
| status | Enum | Yes | 'todo' |
| assignee_id | UUID | No | null |
| creator_id | UUID | Yes | - |
| due_date | Date | No | null |
| created_at | Timestamp | Yes | now() |
| updated_at | Timestamp | Yes | now() |
| completed_at | Timestamp | No | null |

**Status Enum:** `'todo' | 'in_progress' | 'done'`

### User Entity (Simplified)
| Field | Type | Required | Default |
|-------|------|----------|---------|
| id | UUID | Yes | auto |
| name | String(100) | Yes | - |
| email | String(255) | Yes | - |
| avatar_url | String | No | null |
| created_at | Timestamp | Yes | now() |

## API Contract Summary

See [API Design Document](./api-design.md) for detailed specifications.

**Base URL:** `http://localhost:3000/api`

**Endpoints:**
- `GET /health` - Health check
- `GET /api/users` - List users
- `GET /api/tasks` - List tasks (with filters)
- `POST /api/tasks` - Create task
- `GET /api/tasks/:id` - Get single task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Success Metrics

### MVP Launch Criteria
- [ ] All P0 features implemented and tested
- [ ] API response time < 200ms (average)
- [ ] Zero P0 bugs
- [ ] < 3 P1 bugs
- [ ] Positive feedback from 3+ beta teams

### Post-Launch KPIs (First Month)
- Active users: 20+
- Tasks created: 200+
- Task completion rate: > 60%
- User retention: > 70% week-over-week
- Average session duration: > 5 minutes

## Release Plan

### Phase 1: Backend (Week 1, Days 1-4)
- Set up Express server
- Implement database schema
- Build API endpoints
- Write integration tests
- Deploy to staging

### Phase 2: Frontend (Week 1, Days 5-7)
- Set up React + Vite
- Build task list component
- Build task form component
- Connect to API
- Basic styling

### Phase 3: Polish (Week 2, Days 1-3)
- Error handling
- Loading states
- Responsive design
- Cross-browser testing
- Bug fixes

### Phase 4: Beta Launch (Week 2, Days 4-5)
- Deploy to production
- Onboard 3-5 beta teams
- Monitor for issues
- Gather feedback

## Open Questions

1. **Authentication:** Do we need user login for MVP, or can we use a simple user selector dropdown?
   - **Decision:** User selector for MVP, JWT auth in v1.1

2. **Real-time Updates:** Should task list auto-refresh when others make changes?
   - **Decision:** Manual refresh for MVP, WebSocket in v1.2

3. **Task History:** Should we track all changes to tasks?
   - **Decision:** No for MVP, add in v1.1 if requested

4. **Soft Delete:** Should deleted tasks be recoverable?
   - **Decision:** Hard delete for MVP, soft delete in v1.1

---

**Document Owner:** Product Team
**Technical Lead:** Engineering Team
**Next Review:** After MVP implementation
**Approved By:** Stakeholders (Pending)
