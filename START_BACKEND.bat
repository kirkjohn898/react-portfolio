@echo off
REM Start Portfolio Backend Server
REM This runs the PHP built-in server on localhost:8000

echo.
echo ========================================
echo  Portfolio Backend Server Startup
echo ========================================
echo.

REM Check if PHP is installed
php --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: PHP is not installed or not in PATH
    echo Please add PHP to your system PATH
    pause
    exit /b 1
)

REM Navigate to backend directory
cd /d "%~dp0backend"

echo Starting PHP Server on localhost:8000...
echo.
echo Backend URLs:
echo   - Health Check: http://localhost:8000/api/test.php
echo   - Contact Form: http://localhost:8000/api/contact.php
echo   - Projects: http://localhost:8000/api/projects.php
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start PHP server
php -S localhost:8000

pause
