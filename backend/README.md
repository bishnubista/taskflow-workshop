# TaskFlow Backend

Express.js API for the TaskFlow workshop demo.

## Setup

```bash
cd backend
npm install
```

## Development

```bash
npm run dev
```

Server runs on http://localhost:3000

## Testing

```bash
npm test
```

## API Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "ok",
  "message": "TaskFlow API is running"
}
```

## Current Branch: main

This is the starter skeleton. No task endpoints implemented yet.

**Next steps:**
- Switch to `demo-2-cursor-basic` to see basic CRUD implementation
- Switch to `demo-3-cursor-fullstack` for complete CRUD
