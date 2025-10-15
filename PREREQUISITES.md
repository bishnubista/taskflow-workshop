# Workshop Prerequisites

This guide will help you install all required tools for the TaskFlow AI Coding Workshop on both macOS and Windows.

## Quick Overview

You'll need to install:
- **Node.js** (v18 or higher) - JavaScript runtime
- **Git** - Version control
- **GitHub CLI** - GitHub command-line tool
- **Claude Code** - AI coding assistant CLI
- **Cursor** - AI-powered code editor
- **Google Chrome** - For MCP browser automation (bonus demo)

**Time to complete:** ~20-25 minutes

---

## macOS Installation

### 1. Install Homebrew (if not already installed)

Homebrew is a package manager for macOS that makes installing tools easier.

```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Verify installation
brew --version
```

### 2. Install Node.js

```bash
# Install Node.js (includes npm)
brew install node

# Verify installation
node --version  # Should be v18 or higher
npm --version
```

**Alternative:** Use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions:
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then install Node
nvm install 20
nvm use 20
```

### 3. Install Git

```bash
# Install Git
brew install git

# Configure Git (replace with your details)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify installation
git --version
```

### 4. Install GitHub CLI

```bash
# Install GitHub CLI
brew install gh

# Verify installation
gh --version

# Authenticate with GitHub (follow prompts)
gh auth login
```

After running `gh auth login`:
1. Select "GitHub.com"
2. Choose "HTTPS" as preferred protocol
3. Authenticate via web browser or paste token
4. Verify: `gh auth status`

### 5. Install Claude Code

```bash
# Install Claude Code CLI
npm install -g @anthropic/claude-code

# Verify installation
claude --version

# Login to Claude Code (follow prompts)
claude login
```

### 6. Install Cursor

```bash
# Download and install Cursor
brew install --cask cursor

# Alternative: Download from website
open https://cursor.sh
```

After installation, open Cursor and:
1. Go to Settings (Cmd+,)
2. Sign in with your account
3. Configure AI model preferences

### 7. Install Google Chrome (for MCP bonus demo)

```bash
# Install Chrome
brew install --cask google-chrome

# Verify installation
ls -la "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

### 8. Verification Script (macOS)

Run this script to verify all installations:

```bash
# Run the verification script
./scripts/check-prerequisites.sh
```

The script will check:
- ✅ Node.js (v18+)
- ✅ npm
- ✅ Git (with configuration)
- ✅ GitHub CLI (with auth status)
- ✅ Claude Code
- ✅ Cursor
- ✅ Google Chrome

---

## Windows Installation

### 1. Install Node.js

**Option A: Using Installer (Recommended)**
```powershell
# Download and run installer
Start-Process "https://nodejs.org/en/download/"

# After installation, verify in PowerShell
node --version  # Should be v18 or higher
npm --version
```

**Option B: Using Chocolatey Package Manager**
```powershell
# Install Chocolatey (run as Administrator)
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Node.js
choco install nodejs -y

# Verify installation
node --version
npm --version
```

### 2. Install Git

**Option A: Using Installer**
```powershell
# Download and run Git installer
Start-Process "https://git-scm.com/download/win"
```

**Option B: Using Chocolatey**
```powershell
# Install Git
choco install git -y

# Verify installation
git --version

# Configure Git (replace with your details)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Install GitHub CLI

**Option A: Using Installer**
```powershell
# Download and run GitHub CLI installer
Start-Process "https://cli.github.com"
```

**Option B: Using Chocolatey**
```powershell
# Install GitHub CLI
choco install gh -y

# Verify installation
gh --version

# Authenticate with GitHub (follow prompts)
gh auth login
```

After running `gh auth login`:
1. Select "GitHub.com"
2. Choose "HTTPS" as preferred protocol
3. Authenticate via web browser or paste token
4. Verify: `gh auth status`

### 4. Install Claude Code

```powershell
# Install Claude Code CLI
npm install -g @anthropic/claude-code

# Verify installation
claude --version

# Login to Claude Code (follow prompts)
claude login
```

### 5. Install Cursor

**Option A: Direct Download**
```powershell
# Download Cursor installer
Start-Process "https://cursor.sh"
```

**Option B: Using Chocolatey**
```powershell
# Install Cursor
choco install cursor -y
```

After installation:
1. Open Cursor
2. Go to Settings (Ctrl+,)
3. Sign in with your account
4. Configure AI model preferences

### 6. Install Google Chrome (for MCP bonus demo)

**Option A: Direct Download**
```powershell
# Download Chrome installer
Start-Process "https://www.google.com/chrome/"
```

**Option B: Using Chocolatey**
```powershell
# Install Chrome
choco install googlechrome -y

# Verify installation (PowerShell)
Test-Path "C:\Program Files\Google\Chrome\Application\chrome.exe"
```

### 7. Verification Script (Windows)

Run the verification script in PowerShell:

```powershell
# Run the verification script
.\scripts\check-prerequisites.ps1
```

The script will check:
- ✅ Node.js (v18+)
- ✅ npm
- ✅ Git (with configuration)
- ✅ GitHub CLI (with auth status)
- ✅ Claude Code
- ✅ Cursor
- ✅ Google Chrome

If you get an execution policy error:
```powershell
# Allow script execution (run as Administrator)
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Troubleshooting

### macOS Issues

**Command not found after installation**
```bash
# Restart terminal or reload shell
source ~/.zshrc  # or ~/.bash_profile
```

**Permission denied errors**
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

**Homebrew issues**
```bash
# Update Homebrew
brew update
brew doctor
```

### Windows Issues

**PowerShell script execution blocked**
```powershell
# Run as Administrator
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**npm command not found after installation**
- Close and reopen PowerShell/Command Prompt
- Check environment variables (System Properties > Environment Variables > Path)
- Add: `C:\Program Files\nodejs\`

**Chocolatey installation fails**
- Run PowerShell as Administrator
- Ensure internet connection is stable
- Check antivirus isn't blocking installation

### General Issues

**Node.js version too old**
```bash
# macOS (using Homebrew)
brew upgrade node

# Windows (using Chocolatey)
choco upgrade nodejs -y

# Or download latest from nodejs.org
```

**Claude Code login fails**
- Ensure you have a Claude.ai account
- Check internet connection
- Try: `claude logout` then `claude login` again

**Cursor not detecting AI models**
- Ensure you're signed in
- Check Settings > AI Models
- Restart Cursor

---

## Next Steps

Once all prerequisites are installed:

1. Clone the workshop repository:
```bash
git clone <workshop-repo-url>
cd workshop
```

2. Verify you're on the main branch:
```bash
git branch
```

3. Install project dependencies:
```bash
npm install
```

4. Review the [README.md](./README.md) for workshop structure

5. Check [CONDUCTOR-GUIDE.md](./CONDUCTOR-GUIDE.md) if you're presenting

---

## Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Git Documentation](https://git-scm.com/doc)
- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [Cursor Documentation](https://docs.cursor.com)
- [Homebrew Documentation](https://docs.brew.sh) (macOS)
- [Chocolatey Documentation](https://docs.chocolatey.org) (Windows)

## Support

If you encounter issues during setup:
- Check the Troubleshooting section above
- Review error messages carefully
- Search for specific error messages online
- Ask for help in the workshop chat/forum

Happy coding! 🚀
