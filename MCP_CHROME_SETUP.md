# Chrome DevTools MCP Setup Guide

This guide demonstrates how to use Chrome DevTools MCP (Model Context Protocol) to automate browser interactions from Claude Code and Cursor.

## What You'll Learn

- How to install and configure Chrome DevTools MCP
- How to automate browser navigation and form filling
- How to test the integration with a live demo

## Prerequisites

```bash
# Ensure Node.js is installed (v18 or higher)
node --version

# Ensure Chrome is installed
# macOS: /Applications/Google Chrome.app
# Linux: /usr/bin/google-chrome
# Windows: C:\Program Files\Google\Chrome\Application\chrome.exe
```

## Part 1: Start the Landing Page

First, let's start the demo Next.js application:

```bash
# Navigate to the landing page directory
cd landing-page

# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

The landing page will be available at: **http://localhost:3000**

**Demo Credentials:**
- Email: `demo@gmail.com`
- Password: `password`

## Part 2: Configure Chrome DevTools MCP

### For Claude Code

Run this command to configure Chrome DevTools MCP for Claude Code:

```bash
# Create Claude Code MCP configuration directory
mkdir -p ~/.config/claude

# Add Chrome DevTools MCP configuration
cat > ~/.config/claude/mcp.json << 'EOF'
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "@executeautomation/chrome-devtools-mcp"
      ],
      "env": {
        "CHROME_PATH": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      }
    }
  }
}
EOF

echo "✅ Chrome DevTools MCP configured for Claude Code!"
echo "📍 Config location: ~/.config/claude/mcp.json"
```

**Platform-specific CHROME_PATH:**
- **macOS**: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **Linux**: `/usr/bin/google-chrome`
- **Windows**: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`

### For Cursor

Run this command to configure Chrome DevTools MCP for Cursor:

```bash
# Backup existing Cursor settings (optional)
cp ~/Library/Application\ Support/Cursor/User/settings.json ~/Library/Application\ Support/Cursor/User/settings.json.backup 2>/dev/null || true

# Add MCP configuration to Cursor settings
# Note: This will add to existing settings or create new file
cat > /tmp/cursor_mcp.json << 'EOF'
{
  "mcp.servers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "@executeautomation/chrome-devtools-mcp"
      ],
      "env": {
        "CHROME_PATH": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      }
    }
  }
}
EOF

echo "✅ MCP configuration prepared for Cursor!"
echo "📝 Manual step required: Add the following to your Cursor settings.json"
echo "   Location: ~/Library/Application Support/Cursor/User/settings.json"
echo ""
cat /tmp/cursor_mcp.json
```

**Cursor Settings Location:**
- **macOS**: `~/Library/Application Support/Cursor/User/settings.json`
- **Linux**: `~/.config/Cursor/User/settings.json`
- **Windows**: `%APPDATA%\Cursor\User\settings.json`

## Part 3: Test the MCP Integration

After configuring MCP, restart Claude Code or Cursor and try these prompts:

### Test Prompt for Claude Code

```
Navigate to http://localhost:3000, fill in the email field with "demo@gmail.com",
fill in the password field with "password", click the "Sign In" button,
and tell me what you see on the thank you page.
```

### Test Prompt for Cursor

```
Use Chrome DevTools MCP to:
1. Navigate to http://localhost:3000
2. Fill in email: demo@gmail.com
3. Fill in password: password
4. Click the Sign In button
5. Take a screenshot of the thank you page
```

### Expected Result

If everything is configured correctly, the AI assistant will:
1. ✅ Open Chrome browser
2. ✅ Navigate to the landing page
3. ✅ Fill in the login form
4. ✅ Click the Sign In button
5. ✅ Read the thank you message: "Thanks for participating in the TaskFlow Workshop!"

## Available MCP Tools

Once configured, you can use these Chrome DevTools MCP capabilities:

- **chrome_navigate** - Navigate to URLs
- **chrome_screenshot** - Capture page screenshots
- **chrome_click** - Click on elements
- **chrome_evaluate** - Execute JavaScript
- **chrome_fill** - Fill form fields
- **chrome_console** - Read console logs

## Example Automation Scripts

### Example 1: Form Testing
```
Navigate to http://localhost:3000, try logging in with wrong credentials
(test@test.com / wrong), verify the error message appears, then login with
correct credentials (demo@gmail.com / password) and verify success.
```

### Example 2: Visual Testing
```
Navigate to http://localhost:3000, take a screenshot of the login page,
then login and take a screenshot of the thank you page. Compare the layouts.
```

### Example 3: Multi-step Flow
```
1. Navigate to http://localhost:3000
2. Verify the page title contains "TaskFlow Workshop"
3. Check that the Sign In button is visible
4. Fill in the form and submit
5. Verify the URL changed to /thank-you
6. Verify the success message is displayed
```

## Troubleshooting

### Chrome not launching
```bash
# Verify Chrome path
ls -la "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# If not found, update CHROME_PATH in mcp.json
```

### MCP server not found
```bash
# Test npx can access the package
npx -y @executeautomation/chrome-devtools-mcp --version

# If fails, check internet connection or install globally
npm install -g @executeautomation/chrome-devtools-mcp
```

### Permission denied on macOS
```bash
# Grant accessibility permissions:
# System Preferences > Security & Privacy > Privacy > Accessibility
# Add Terminal, Claude Code, or Cursor to the list
```

### Port 3000 already in use
```bash
# Check what's using port 3000
lsof -i :3000

# Kill the process or use a different port
PORT=3001 npm run dev
```

## Resources

- [Chrome DevTools MCP GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- [MCP Documentation](https://modelcontextprotocol.io/)
- [Claude Code MCP Guide](https://docs.claude.com/claude-code/mcp)
- [Cursor MCP Integration](https://docs.cursor.com/mcp)

## What's Next?

Try automating these scenarios:
1. Test the entire TaskFlow app CRUD operations
2. Create automated test scripts for your projects
3. Build visual regression testing workflows
4. Document user flows with automated screenshots

Happy automating! 🚀
