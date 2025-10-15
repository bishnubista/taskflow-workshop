# Branch Structure

This repository contains multiple branches demonstrating progressive AI-assisted development workflows.

## Branches Overview

### main
Clean starter with basic TaskFlow app structure. No features implemented yet.

### demo-1-chatgpt-planning
Planning and foundation work using ChatGPT for brainstorming and architecture design.

### demo-2-cursor-basic
Basic CRUD implementation using Cursor's CMD+K inline editing feature.

### demo-3-cursor-composer
Advanced features using Cursor's Composer multi-file editing (filter, bulk actions, persistence).

### demo-4-claude-enhancement
Code quality improvements and enhancements using Claude Code's agentic workflow.

### bonus-mcp-chrome (NEW!)
Chrome DevTools MCP integration demo - automate browser interactions with AI assistants.

**What's in this branch:**
- Next.js landing page with login functionality
- Complete MCP setup guide with bash commands
- Demo credentials: demo@gmail.com / password
- Automated testing workflow examples

**How to use:**
1. Follow [MCP_CHROME_SETUP.md](./MCP_CHROME_SETUP.md) to configure Chrome DevTools MCP
2. Start the landing page: `cd landing-page && npm install && npm run dev`
3. Ask Claude Code or Cursor to automate the login flow
4. Watch AI navigate, fill forms, and interact with the page automatically

## Workshop Flow

The workshop follows a progressive learning structure:
1. **Planning** (ChatGPT) - Brainstorm and design
2. **Basic Implementation** (Cursor CMD+K) - Core CRUD features
3. **Advanced Features** (Cursor Composer) - Multi-file complex features
4. **Enhancement** (Claude Code) - Code quality and best practices
5. **Bonus** (MCP) - Browser automation with AI

Each branch builds on concepts from previous ones, but remains independent for easy comparison.

## Switching Branches

```bash
# View all branches
git branch -a

# Switch to a specific demo
git checkout demo-1-chatgpt-planning
git checkout demo-2-cursor-basic
git checkout demo-3-cursor-composer
git checkout demo-4-claude-enhancement
git checkout bonus-mcp-chrome

# Return to starter
git checkout main
```

---

See [CONDUCTOR-GUIDE.md](./CONDUCTOR-GUIDE.md) for workshop presentation timeline.
