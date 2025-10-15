# TaskFlow Workshop - AI-Assisted Development Demo

A multi-branch demo project showcasing how to effectively use AI coding tools (ChatGPT, Cursor, Claude Code) for full-stack development.

## Workshop Structure

This repository contains 8 branches, each demonstrating different AI tool capabilities and workflows:

### Branch Overview

| Branch | Demo Focus | Key Learnings |
|--------|-----------|---------------|
| `main` | Clean starter | Starting point with minimal structure |
| `demo-1-chatgpt-planning` | AI brainstorming | Using ChatGPT for product planning and API design |
| `demo-2-cursor-basic` | Cursor basics | Inline suggestions and multi-file edits |
| `demo-3-cursor-fullstack` | Cursor full-stack | Complete CRUD with frontend/backend |
| `demo-4-claude-planning` | Claude planning | Plan mode, context engineering, agents |
| `demo-5-claude-mcp` | MCP integration | Database persistence via Model Context Protocol |
| `demo-6-claude-advanced` | Advanced agents | Full agentic workflow with custom agents |
| `demo-7-production-ready` | Production code | Error handling, tests, CI/CD, Docker |

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd workshop

# Switch to any demo branch
git checkout demo-1-chatgpt-planning

# Follow branch-specific README for setup
```

## Workshop Navigation

### For Presenters
1. Start with `main` branch for introduction
2. Show `demo-1-chatgpt-planning` for brainstorming workflow
3. Live code with Cursor starting from `demo-2-cursor-basic`
4. Transition to Claude Code with `demo-4-claude-planning`
5. Show advanced capabilities with `demo-5/6` branches
6. Reference `demo-7-production-ready` for production patterns

### For Attendees
Each branch has:
- **README.md** - Setup instructions and what's demonstrated
- **BRANCH_NOTES.md** - Key takeaways and learning points
- **Working code** - Fully functional at each stage

## Project Tech Stack

**Backend:**
- Node.js + Express
- SQLite (in later branches)
- Jest for testing

**Frontend:**
- React 18
- Vite
- Tailwind CSS (added in later branches)

**AI Tool Setup:**
- ChatGPT (web interface)
- Cursor (IDE)
- Claude Code (CLI)
- MCP servers (for Claude Code)

## Learning Resources

- [ChatGPT Apps](https://help.openai.com/en/articles/8555545-chatgpt-apps)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [Cursor Documentation](https://docs.cursor.com/)

## Workshop Timeline (90 minutes)

- **0-10 min**: Intro + ChatGPT brainstorming (`demo-1`)
- **10-25 min**: MCP explanation + context engineering theory
- **25-45 min**: Cursor live demo (`demo-2` → `demo-3`)
- **45-85 min**: Claude Code live demo (`demo-4` → `demo-6`)
- **85-90 min**: Q&A + wrap-up

## License

MIT - Free for educational use
