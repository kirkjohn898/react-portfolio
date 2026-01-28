# My Portfolio - Full Stack React App

A complete portfolio website built with React, PHP, and MySQL. Showcase your projects and connect with visitors through a contact form.

## 🎯 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **React Frontend** - Modern, component-based UI
- **PHP Backend** - RESTful API for projects and contact messages
- **MySQL Database** - Persistent data storage
- **Project Showcase** - Display your projects with images and links
- **Contact Form** - Visitors can reach out to you
- **Smooth Animations** - Engaging user experience
- **Easy to Customize** - Well-organized code structure

## 📋 Prerequisites

- Node.js v14+ (Download: https://nodejs.org)
- PHP 7.4+ (Included in XAMPP)
- MySQL (Included in XAMPP)
- XAMPP (Download: https://www.apachefriends.org)

## ⚡ Quick Start

### 1. Install Dependencies

```bash
cd e:\Portfolio\portfolio
npm install
```

### 2. Set Up Database

- Start XAMPP (Apache & MySQL)
- Open phpMyAdmin: http://localhost/phpmyadmin
- Execute `backend/database.sql` to create database and sample data

### 3. Start Backend

```bash
cd backend
php -S localhost:8000
```

### 4. Start Frontend

```bash
npm start
```

App opens at http://localhost:3000

---

See [QUICKSTART.md](./QUICKSTART.md) for quick setup or [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   ├── styles/             # Component CSS
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── backend/
│   ├── api/                # API endpoints
│   ├── config.php          # Database configuration
│   ├── database.sql        # Database schema
│   └── manage-projects.php # Project management script
├── public/                 # Static files
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Components

- **Header** - Navigation bar with mobile menu
- **Hero** - Eye-catching landing section
- **About** - About you and your skills
- **Portfolio** - Grid of your projects
- **Contact** - Contact form for visitors
- **Footer** - Footer with social links

## 📡 API Endpoints

| Method | Endpoint            | Purpose                |
| ------ | ------------------- | ---------------------- |
| GET    | `/api/projects.php` | Fetch all projects     |
| POST   | `/api/projects.php` | Add new project        |
| POST   | `/api/contact.php`  | Submit contact message |

## 🛠️ Database Schema

### projects

```sql
id (INT, PK)
title (VARCHAR 255)
description (TEXT)
link (VARCHAR 500)
technologies (VARCHAR 500)
image_url (VARCHAR 500)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

### contact_messages

```sql
id (INT, PK)
name (VARCHAR 255)
email (VARCHAR 255)
message (TEXT)
is_read (BOOLEAN)
created_at (TIMESTAMP)
```

## 🎨 Customization

### Update Your Information

1. Edit `src/components/Hero.js` - Main heading
2. Edit `src/components/About.js` - About section and skills
3. Edit `src/components/Contact.js` - Email and social links
4. Edit `src/components/Footer.js` - Footer content

### Add Your Projects

```bash
# Using the CLI tool
cd backend
php manage-projects.php add "Project Title" "Description" "Link" "Technologies"

# Or insert directly in phpMyAdmin
INSERT INTO projects (title, description, link, technologies, image_url)
VALUES (...);
```

### Customize Styling

- Color scheme: Modify colors in CSS files (src/styles/)
- Default colors:
  - Primary: `#667eea` (Purple-blue)
  - Secondary: `#764ba2` (Purple)
  - Background: `#f8f9fa` (Light gray)

## 🚀 Deployment

### Deploy Frontend (React Build)

```bash
npm run build
```

Upload the `build` folder to your hosting provider.

### Deploy Backend (PHP)

1. Upload `backend` folder to your web hosting
2. Update `config.php` with production database credentials
3. Update API URLs in React app to point to production server

### Database Migration

1. Create database on production server
2. Run `database.sql` to create tables and sample data
3. Update connection credentials

## 🔒 Security

For production:

1. Change database password
2. Add environment variables for secrets
3. Validate all user inputs
4. Use HTTPS
5. Implement rate limiting on API
6. Add authentication for admin features

## 🐛 Troubleshooting

| Issue                | Solution                                         |
| -------------------- | ------------------------------------------------ |
| CORS errors          | Check PHP CORS headers, verify API URL           |
| DB connection fails  | Check MySQL running, verify credentials          |
| Projects not loading | Check browser console, verify backend is running |
| API 404 error        | Verify backend path, check file location         |

## 📦 Available Scripts

```bash
npm start       # Start dev server
npm run build   # Create production build
npm test        # Run tests
npm run eject   # Eject from create-react-app (irreversible)
```

## 📚 Technologies

- **Frontend**: React, JavaScript ES6+, CSS3
- **Backend**: PHP 7.4+
- **Database**: MySQL
- **Tools**: Node.js, npm, XAMPP

## 💡 Tips

- Use placeholder images: `https://via.placeholder.com/300x200`
- Add real project links (GitHub, live demos)
- Update contact email for form submissions
- Test on mobile devices
- Optimize images for faster loading

## 🤝 Contributing

Feel free to fork and improve this project!

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 👨‍💻 Support

For issues or questions, check the documentation files:

- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Complete setup instructions
- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide

---

**Made with ❤️ by You**
