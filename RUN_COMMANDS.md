# 🚀 QUICK COMMANDS - RUN YOUR PORTFOLIO

## Installation (One Time)

```bash
cd e:\Portfolio\portfolio
npm install
```

Already done? Skip to Running!

---

## Running Your Portfolio

### Terminal 1 - Start Backend PHP Server

```bash
cd e:\Portfolio\portfolio\backend
php -S localhost:8000
```

Expected output:

```
Development Server running at http://localhost:8000
```

### Terminal 2 - Start Frontend React App

```bash
cd e:\Portfolio\portfolio
npm start
```

Expected output:

```
Compiled successfully!
You can now view portfolio in the browser.
http://localhost:3000
```

---

## Browser Access

After both servers are running, open:

```
http://localhost:3000
```

---

## Navigation Guide

| Page      | URL                             | Features                |
| --------- | ------------------------------- | ----------------------- |
| Home      | http://localhost:3000           | Looping terminal effect |
| About     | http://localhost:3000/about     | Skills & offerings      |
| Portfolio | http://localhost:3000/portfolio | Projects with filters   |
| Contact   | http://localhost:3000/contact   | Contact form            |

---

## Project Structure Commands

```bash
# Check file structure
dir e:\Portfolio\portfolio\src

# Check backend
dir e:\Portfolio\portfolio\backend

# Check styles
dir e:\Portfolio\portfolio\src\styles
```

---

## Database Setup (One Time)

### Start XAMPP

1. Open XAMPP Control Panel
2. Click "Start" for Apache
3. Click "Start" for MySQL

### Import Database

1. Open phpMyAdmin: http://localhost/phpmyadmin
2. Click "SQL" tab
3. Copy contents of `e:\Portfolio\portfolio\backend\database.sql`
4. Paste in SQL tab
5. Click "Go"

---

## Stopping Servers

### Stop React (Press in Terminal 2)

```
Ctrl + C
```

### Stop PHP (Press in Terminal 1)

```
Ctrl + C
```

---

## Building for Production

```bash
cd e:\Portfolio\portfolio
npm run build
```

Creates optimized build in `build/` folder.

---

## Troubleshooting

### Port 3000 Already In Use?

```bash
# Use different port
set PORT=3001
npm start
```

### Port 8000 Already In Use?

```bash
# Use different port
php -S localhost:8001
```

Then update API URLs in code.

### Dependencies Missing?

```bash
npm install
npm install react-router-dom
```

### Database Connection Error?

1. Check MySQL is running in XAMPP
2. Verify `backend/config.php` credentials
3. Check database was imported

---

## File Locations

| File            | Location                     |
| --------------- | ---------------------------- |
| Frontend App    | `src/App.js`                 |
| Terminal        | `src/components/Terminal.js` |
| Terminal Style  | `src/styles/Terminal.css`    |
| Home Page       | `src/pages/Home.js`          |
| About Page      | `src/pages/About.js`         |
| Portfolio Page  | `src/pages/Portfolio.js`     |
| Contact Page    | `src/pages/Contact.js`       |
| Backend Config  | `backend/config.php`         |
| Database Schema | `backend/database.sql`       |
| Projects API    | `backend/api/projects.php`   |
| Contact API     | `backend/api/contact.php`    |

---

## Development Workflow

1. Make changes to code
2. React auto-refreshes (npm start)
3. PHP auto-reloads (php -S)
4. Check http://localhost:3000
5. Enjoy hot reloading! 🔄

---

## Environment Variables

Create `.env` file in root:

```
REACT_APP_API_URL=http://localhost:8000
REACT_APP_API_PROJECTS=http://localhost:8000/api/projects.php
REACT_APP_API_CONTACT=http://localhost:8000/api/contact.php
```

---

## Useful npm Commands

```bash
# Start development
npm start

# Build for production
npm run build

# Run tests
npm test

# Check for issues
npm audit

# Fix security issues
npm audit fix
```

---

## Quick Reference

**Start Everything:**

1. Terminal 1: `cd e:\Portfolio\portfolio\backend && php -S localhost:8000`
2. Terminal 2: `cd e:\Portfolio\portfolio && npm start`
3. Open: http://localhost:3000

**Stop Everything:**

- Press Ctrl+C in both terminals

**Edit Code:**

- All source files auto-update
- Browser refreshes automatically
- No need to restart

---

Need help? Check these files:

- GETTING_STARTED.md
- SETUP_GUIDE.md
- QUICK_REFERENCE.md
- TERMINAL_CUSTOMIZATION.md

Good luck! 🚀
