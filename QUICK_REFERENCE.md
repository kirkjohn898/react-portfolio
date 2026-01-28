# 📋 QUICK REFERENCE CARD

## ⚡ Start Your Portfolio (5 minutes)

```bash
# Terminal 1: Backend
cd e:\Portfolio\portfolio\backend
php -S localhost:8000

# Terminal 2: Frontend
cd e:\Portfolio\portfolio
npm start
```

**Access:** http://localhost:3000

---

## 🛠️ First-Time Setup

1. **npm install** - Install dependencies
2. Start XAMPP (Apache + MySQL)
3. **phpMyAdmin** - Import `backend/database.sql`
4. Start PHP server
5. **npm start**

---

## 📍 Key Folders

| Folder            | Purpose           |
| ----------------- | ----------------- |
| `src/components/` | React components  |
| `src/styles/`     | Component CSS     |
| `backend/api/`    | API endpoints     |
| `backend/`        | PHP configuration |
| `public/`         | Static files      |

---

## 🎨 Edit Your Info

| What         | Where                       |
| ------------ | --------------------------- |
| Heading      | `src/components/Hero.js`    |
| Bio & Skills | `src/components/About.js`   |
| Email        | `src/components/Contact.js` |
| Social Links | `src/components/Contact.js` |
| Colors       | `src/styles/*.css`          |

---

## 📡 API Endpoints

```
GET  http://localhost:8000/api/projects.php     → Get projects
POST http://localhost:8000/api/projects.php     → Create project
POST http://localhost:8000/api/contact.php      → Send message
```

---

## 🗄️ Database

```
Database: portfolio_db
Tables: projects, contact_messages

Quick access: http://localhost/phpmyadmin
User: root
Pass: (empty in XAMPP)
```

---

## 🆘 Quick Fixes

| Problem         | Fix                    |
| --------------- | ---------------------- |
| CORS error      | Start PHP backend      |
| No projects     | Check MySQL running    |
| Page won't load | Check npm start output |
| API 404         | Verify backend path    |
| Styling wrong   | Clear browser cache    |

---

## 📚 Documentation

- **README.md** - Overview
- **GETTING_STARTED.md** - Beginner guide
- **SETUP_GUIDE.md** - Complete setup
- **QUICKSTART.md** - 5-min setup

---

## 🚀 Deploy Steps

1. `npm run build` - Create build folder
2. Upload `build/` to hosting
3. Upload `backend/` to hosting
4. Update `config.php` with prod DB
5. Update API URLs in React

---

**Happy coding! 💻**
