# TaskFlow Workshop - Chrome DevTools MCP Demo

A Next.js landing page demonstrating Chrome DevTools MCP (Model Context Protocol) automation with AI assistants.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

### 3. Test Manually

**Demo Credentials:**
- Email: `demo@gmail.com`
- Password: `password`

## Chrome DevTools MCP Automation

This project is designed to be automated using Chrome DevTools MCP with Claude Code or Cursor.

### Setup MCP (One-time)

See the main [MCP_CHROME_SETUP.md](../MCP_CHROME_SETUP.md) guide for complete setup instructions.

**Quick setup for Claude Code:**

```bash
mkdir -p ~/.config/claude
cat > ~/.config/claude/mcp.json << 'EOF'
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "@executeautomation/chrome-devtools-mcp"],
      "env": {
        "CHROME_PATH": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      }
    }
  }
}
EOF
```

### Test MCP Automation

After configuring MCP, ask Claude Code or Cursor:

```
Navigate to http://localhost:3000, fill in the email field with "demo@gmail.com",
fill in the password field with "password", click the "Sign In" button,
and tell me what you see on the thank you page.
```

**Expected Flow:**
1. AI opens Chrome browser
2. Navigates to the login page
3. Fills in credentials
4. Clicks Sign In button
5. Reads thank you message

## Project Structure

```
landing-page/
├── app/
│   ├── page.tsx          # Login page
│   └── thank-you/
│       └── page.tsx      # Success page
├── public/
├── package.json
└── README.md
```

## Features

- Modern Next.js 15 with App Router
- Tailwind CSS styling
- Client-side form validation
- Responsive design
- MCP automation-friendly element IDs

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Chrome DevTools MCP

## Troubleshooting

### Port 3000 in use

```bash
PORT=3001 npm run dev
```

### Build errors

```bash
rm -rf .next node_modules
npm install
npm run dev
```

## Learn More

- [MCP Setup Guide](../MCP_CHROME_SETUP.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)

---

Part of the TaskFlow AI Coding Workshop
