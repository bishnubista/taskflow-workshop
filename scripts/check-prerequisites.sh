#!/bin/bash

# Workshop Prerequisites Verification Script (macOS/Linux)
# This script checks if all required tools are installed

echo "=== TaskFlow Workshop Prerequisites Check ==="
echo ""

all_installed=true

# Check Node.js
if command -v node &> /dev/null; then
    node_version=$(node --version)
    echo "✅ Node.js: $node_version"

    # Check if version is 18 or higher
    major_version=$(echo $node_version | sed 's/v\([0-9]*\).*/\1/')
    if [ "$major_version" -lt 18 ]; then
        echo "   ⚠️  Warning: Node.js v18+ recommended (current: $node_version)"
    fi
else
    echo "❌ Node.js: Not installed"
    all_installed=false
fi

# Check npm
if command -v npm &> /dev/null; then
    npm_version=$(npm --version)
    echo "✅ npm: v$npm_version"
else
    echo "❌ npm: Not installed"
    all_installed=false
fi

# Check Git
if command -v git &> /dev/null; then
    git_version=$(git --version)
    echo "✅ Git: $git_version"

    # Check Git config
    git_name=$(git config user.name 2>/dev/null)
    git_email=$(git config user.email 2>/dev/null)

    if [ -z "$git_name" ] || [ -z "$git_email" ]; then
        echo "   ⚠️  Warning: Git not configured. Run:"
        echo "      git config --global user.name \"Your Name\""
        echo "      git config --global user.email \"your.email@example.com\""
    fi
else
    echo "❌ Git: Not installed"
    all_installed=false
fi

# Check GitHub CLI
if command -v gh &> /dev/null; then
    gh_version=$(gh --version 2>&1 | head -n 1)
    echo "✅ GitHub CLI: $gh_version"

    # Check GitHub auth status
    if gh auth status &> /dev/null; then
        echo "   ✅ Authenticated with GitHub"
    else
        echo "   ⚠️  Warning: Not authenticated. Run: gh auth login"
    fi
else
    echo "❌ GitHub CLI: Not installed"
    echo "   Install with: brew install gh (macOS) or see PREREQUISITES.md"
    all_installed=false
fi

# Check Claude Code
if command -v claude &> /dev/null; then
    claude_version=$(claude --version 2>&1 | head -n 1)
    echo "✅ Claude Code: $claude_version"
else
    echo "❌ Claude Code: Not installed"
    echo "   Install with: npm install -g @anthropic/claude-code"
    all_installed=false
fi

# Check Cursor (macOS)
if [ "$(uname)" == "Darwin" ]; then
    if [ -d "/Applications/Cursor.app" ]; then
        echo "✅ Cursor: Installed"
    else
        echo "❌ Cursor: Not installed"
        echo "   Download from: https://cursor.sh"
        all_installed=false
    fi
fi

# Check Chrome (macOS)
if [ "$(uname)" == "Darwin" ]; then
    if [ -f "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
        echo "✅ Google Chrome: Installed"
    else
        echo "⚠️  Google Chrome: Not installed (optional for MCP bonus demo)"
    fi
elif [ "$(uname)" == "Linux" ]; then
    if command -v google-chrome &> /dev/null; then
        echo "✅ Google Chrome: Installed"
    else
        echo "⚠️  Google Chrome: Not installed (optional for MCP bonus demo)"
    fi
fi

echo ""
echo "=== Check Complete ==="
echo ""

if [ "$all_installed" = true ]; then
    echo "🎉 All required tools are installed!"
    echo ""
    echo "Next steps:"
    echo "1. Clone the workshop repository"
    echo "2. Run: npm install"
    echo "3. Review README.md for workshop structure"
else
    echo "⚠️  Some required tools are missing."
    echo "Please install missing tools using PREREQUISITES.md"
fi

echo ""
