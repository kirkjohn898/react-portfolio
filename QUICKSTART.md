# Quick Start Instructions

Follow these steps to get your portfolio up and running:

## 🎯 Quick Setup (5 minutes)

### 1. Install Dependencies

```bash
cd e:\Portfolio\portfolio
npm install
```

### 2. Start XAMPP

- Open XAMPP Control Panel
- Click "Start" for Apache and MySQL

### 3. Create Database

- Open phpMyAdmin: http://localhost/phpmyadmin
- Open SQL tab
- Paste contents of `backend/database.sql`
- Click Go

### 4. Start Backend

Option A (Recommended):

```bash
cd backend
php -S localhost:8000
```

Option B (Using XAMPP):

- Copy backend folder to `C:\xampp\htdocs\portfolio-api`
- Update API URLs in `src/App.js` to use `http://localhost/portfolio-api/api/`

### 5. Start React App

```bash
npm start
```

That's it! Your portfolio is now running at http://localhost:3000

---

## ✨ Features

✅ Responsive Design
✅ React Frontend
✅ PHP Backend API
✅ MySQL Database
✅ Contact Form
✅ Project Showcase
✅ Mobile Friendly

## 📂 File Structure

- **src/** - React components and styles
- **backend/** - PHP API and database config
- **public/** - Static files
- **SETUP_GUIDE.md** - Complete setup documentation

## 🔗 API Endpoints

- `GET http://localhost:8000/api/projects.php` - Get all projects
- `POST http://localhost:8000/api/projects.php` - Add new project
- `POST http://localhost:8000/api/contact.php` - Submit contact form

## 📧 Next Steps

1. Customize personal information in components
2. Add your own projects via the API
3. Update colors and styling
4. Deploy to hosting provider

For detailed setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)
