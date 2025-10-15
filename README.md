# Bonus: Browser Automation with Chrome DevTools MCP

Learn how to automate browser interactions using the Model Context Protocol (MCP) with Claude Code or Cursor.

## What You'll Learn

Use Chrome DevTools MCP to automate web browsing - navigate pages, fill forms, click buttons, and extract data with AI assistants.

## What's in This Branch

✅ **Next.js Landing Page** (already created)
- Simple login page at http://localhost:3001
- Demo credentials: `demo@gmail.com` / `password`
- Success page after login

✅ **MCP Setup Guide** (detailed instructions)
- See **[MCP_CHROME_SETUP.md](./MCP_CHROME_SETUP.md)** for complete setup

## Quick Start

### 1. Setup Chrome DevTools MCP

Follow the instructions in [MCP_CHROME_SETUP.md](./MCP_CHROME_SETUP.md) to:
- Install Chrome DevTools MCP server
- Configure Claude Code or Cursor
- Connect to Chrome browser

### 2. Start the Landing Page

```bash
cd landing-page
npm install
npm run dev
```

Open http://localhost:3001 in your browser (keep it open!)

### 3. Try Automation with AI

**With Claude Code:**
```bash
claude
```

Then ask:
```
Navigate to http://localhost:3001, fill in the login form with
demo@gmail.com and password, then click the login button.
```

**With Cursor:**
Open Cursor Composer (CMD+I) and ask the same thing!

## What MCP Enables

Browser automation with AI becomes possible:

- **Navigate pages**: "Go to the homepage"
- **Fill forms**: "Enter my email and password"
- **Click buttons**: "Click the submit button"
- **Extract data**: "Get the task list from the page"
- **Take screenshots**: "Show me what's on screen"
- **Run tests**: "Verify the login flow works"

## Example Automation Tasks

### Task 1: Test Login Flow
```
Test the login flow:
1. Navigate to http://localhost:3001
2. Fill in demo@gmail.com and password
3. Click login
4. Verify the thank you message appears
```

### Task 2: Take Screenshots
```
Navigate to http://localhost:3001 and take a screenshot
of the login page, then take another after logging in.
```

### Task 3: Extract Page Content
```
Navigate to http://localhost:3001, login,
and tell me what message is displayed after login.
```

## Learning Resources

- **[MCP_CHROME_SETUP.md](./MCP_CHROME_SETUP.md)** - Complete setup guide
- **[BRANCH_NOTES.md](./BRANCH_NOTES.md)** - What MCP is and why it matters
- [Chrome DevTools MCP GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- [Model Context Protocol Docs](https://modelcontextprotocol.io/)

## Why This Matters

MCP is a new protocol that lets AI assistants interact with external tools and services. Chrome DevTools MCP is just one example - you can create MCPs for:

- **Databases**: Direct SQL queries
- **APIs**: RESTful API interactions
- **File systems**: Read/write files
- **Cloud services**: AWS, GCP, Azure
- **Dev tools**: Git, Docker, npm

## How It Works

```
┌─────────────┐         ┌─────────────┐         ┌──────────┐
│  Claude/    │ MCP     │  Chrome     │ CDP     │  Chrome  │
│  Cursor     │◄───────►│  DevTools   │◄───────►│  Browser │
│  (AI)       │         │  MCP Server │         │          │
└─────────────┘         └─────────────┘         └──────────┘
```

1. AI assistant sends MCP commands
2. MCP server translates to Chrome DevTools Protocol (CDP)
3. CDP controls browser
4. Browser actions/data sent back to AI

## Workshop Connection

This bonus demo shows **the future of AI-assisted development**:

- **Demo 1-4**: AI helps you write code
- **Bonus Demo**: AI interacts with running applications

Both are powerful - use them together!

## Next Steps

After completing this bonus:

1. Try creating your own web page to automate
2. Explore other MCP servers (database, filesystem, etc.)
3. Build testing workflows with MCP
4. Combine MCP with Claude Code's planning mode

## Return to Main Workshop

To go back to the main workshop:

```bash
git checkout main
```

Or checkout any demo branch:
```bash
git checkout demo-1-chatgpt-planning
git checkout demo-2-cursor-basic
git checkout demo-3-cursor-composer
git checkout demo-4-claude-enhancement
```

---

**Branch Focus:** Browser automation with Model Context Protocol
**Key Tech:** Chrome DevTools MCP + Next.js
**Related Demos:** All previous demos (this builds on same concepts)
