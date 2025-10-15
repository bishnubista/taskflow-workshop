# Workshop Prerequisites Verification Script (Windows PowerShell)
# This script checks if all required tools are installed

Write-Host "=== TaskFlow Workshop Prerequisites Check ===" -ForegroundColor Cyan
Write-Host ""

$allInstalled = $true

# Check Node.js
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green

    # Check if version is 18 or higher
    $majorVersion = [int]($nodeVersion -replace 'v(\d+).*', '$1')
    if ($majorVersion -lt 18) {
        Write-Host "   ⚠️  Warning: Node.js v18+ recommended (current: $nodeVersion)" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Node.js: Not installed" -ForegroundColor Red
    $allInstalled = $false
}

# Check npm
if (Get-Command npm -ErrorAction SilentlyContinue) {
    $npmVersion = npm --version
    Write-Host "✅ npm: v$npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ npm: Not installed" -ForegroundColor Red
    $allInstalled = $false
}

# Check Git
if (Get-Command git -ErrorAction SilentlyContinue) {
    $gitVersion = git --version
    Write-Host "✅ Git: $gitVersion" -ForegroundColor Green

    # Check Git config
    $gitName = git config user.name 2>$null
    $gitEmail = git config user.email 2>$null

    if ([string]::IsNullOrEmpty($gitName) -or [string]::IsNullOrEmpty($gitEmail)) {
        Write-Host "   ⚠️  Warning: Git not configured. Run:" -ForegroundColor Yellow
        Write-Host "      git config --global user.name `"Your Name`"" -ForegroundColor Yellow
        Write-Host "      git config --global user.email `"your.email@example.com`"" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Git: Not installed" -ForegroundColor Red
    $allInstalled = $false
}

# Check Claude Code
if (Get-Command claude -ErrorAction SilentlyContinue) {
    try {
        $claudeVersion = claude --version 2>&1 | Select-Object -First 1
        Write-Host "✅ Claude Code: $claudeVersion" -ForegroundColor Green
    } catch {
        Write-Host "✅ Claude Code: Installed" -ForegroundColor Green
    }
} else {
    Write-Host "❌ Claude Code: Not installed" -ForegroundColor Red
    Write-Host "   Install with: npm install -g @anthropic/claude-code" -ForegroundColor Yellow
    $allInstalled = $false
}

# Check Cursor
$cursorPaths = @(
    "$env:LOCALAPPDATA\Programs\Cursor\Cursor.exe",
    "$env:ProgramFiles\Cursor\Cursor.exe",
    "$env:ProgramFiles(x86)\Cursor\Cursor.exe"
)

$cursorInstalled = $false
foreach ($path in $cursorPaths) {
    if (Test-Path $path) {
        $cursorInstalled = $true
        break
    }
}

if ($cursorInstalled) {
    Write-Host "✅ Cursor: Installed" -ForegroundColor Green
} else {
    Write-Host "❌ Cursor: Not installed" -ForegroundColor Red
    Write-Host "   Download from: https://cursor.sh" -ForegroundColor Yellow
    $allInstalled = $false
}

# Check Chrome
$chromePaths = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
)

$chromeInstalled = $false
foreach ($path in $chromePaths) {
    if (Test-Path $path) {
        $chromeInstalled = $true
        break
    }
}

if ($chromeInstalled) {
    Write-Host "✅ Google Chrome: Installed" -ForegroundColor Green
} else {
    Write-Host "⚠️  Google Chrome: Not installed (optional for MCP bonus demo)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Check Complete ===" -ForegroundColor Cyan
Write-Host ""

if ($allInstalled) {
    Write-Host "🎉 All required tools are installed!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Clone the workshop repository"
    Write-Host "2. Run: npm install"
    Write-Host "3. Review README.md for workshop structure"
} else {
    Write-Host "⚠️  Some required tools are missing." -ForegroundColor Yellow
    Write-Host "Please install missing tools using PREREQUISITES.md"
}

Write-Host ""
