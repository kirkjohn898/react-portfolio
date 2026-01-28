# Portfolio Web Application - Complete Setup Guide

A full-stack portfolio application with React frontend, PHP backend, and MySQL database.

## 📁 Project Structure

```
portfolio/
├── src/                          # React frontend
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Portfolio.js
│   │   ├── ProjectCard.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Portfolio.css
│   │   ├── ProjectCard.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── backend/                      # PHP backend
│   ├── api/
│   │   ├── projects.php
│   │   └── contact.php
│   ├── config.php
│   ├── database.sql
│   └── index.php
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- PHP (v7.4+) - included in XAMPP
- MySQL (included in XAMPP)
- XAMPP for local development

### Step 1: Install Frontend Dependencies

```bash
cd e:\Portfolio\portfolio
npm install
```

### Step 2: Set Up XAMPP and Database

1. **Download and Install XAMPP** from https://www.apachefriends.org/

2. **Start XAMPP Services:**
   - Open XAMPP Control Panel
   - Click "Start" for Apache and MySQL

3. **Create Database:**
   - Open phpMyAdmin: http://localhost/phpmyadmin
   - Go to "SQL" tab
   - Copy and paste the contents of `backend/database.sql`
   - Click "Go" to execute

   OR use the command line:

   ```bash
   mysql -u root < backend\database.sql
   ```

### Step 3: Configure PHP Backend

1. **Move Backend to XAMPP htdocs:**

   ```bash
   Copy backend folder to: C:\xampp\htdocs\portfolio-api
   ```

2. **Verify config.php:**
   - Open `backend/config.php`
   - Ensure database credentials match your setup:
     ```php
     $host = 'localhost';
     $db = 'portfolio_db';
     $user = 'root';
     $password = '';  // Default XAMPP password is empty
     ```

### Step 4: Run the Backend

**Option A: Using PHP Development Server**

```bash
cd backend
php -S localhost:8000
```

**Option B: Using XAMPP**

- Place backend in `C:\xampp\htdocs\portfolio-api`
- Access via: `http://localhost/portfolio-api/api/projects.php`

### Step 5: Update API URLs (if needed)

If using XAMPP (not PHP dev server), update API URLs in React components:

**In `src/App.js` and `src/components/Contact.js`:**

```javascript
// Change from:
fetch("http://localhost:8000/api/projects.php");

// To (if using XAMPP):
fetch("http://localhost/portfolio-api/api/projects.php");
```

### Step 6: Run the React Application

```bash
npm start
```

The application will open at `http://localhost:3000`

## 📡 API Endpoints

### Projects API

**GET** - Retrieve all projects

```
http://localhost:8000/api/projects.php
```

Response:

```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description",
    "link": "https://github.com/...",
    "technologies": "React, Node.js",
    "image_url": "https://...",
    "created_at": "2024-01-28 10:00:00"
  }
]
```

**POST** - Create new project

```
http://localhost:8000/api/projects.php
```

Request body:

```json
{
  "title": "New Project",
  "description": "Description here",
  "link": "https://github.com/...",
  "technologies": "React, PHP, MySQL",
  "image_url": "https://..."
}
```

### Contact API

**POST** - Submit contact message

```
http://localhost:8000/api/contact.php
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

Response:

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## 🗄️ Database Schema

### projects table

```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- title (VARCHAR 255)
- description (TEXT)
- link (VARCHAR 500)
- technologies (VARCHAR 500)
- image_url (VARCHAR 500)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### contact_messages table

```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- name (VARCHAR 255)
- email (VARCHAR 255)
- message (TEXT)
- is_read (BOOLEAN)
- created_at (TIMESTAMP)
```

## 🎨 Customization

### Update Personal Information

1. **Edit Hero Section** - `src/components/Hero.js`
2. **Edit About Section** - `src/components/About.js`
3. **Update Contact Info** - `src/components/Contact.js`
4. **Update Footer** - `src/components/Footer.js`

### Add Your Projects

Use the Contact API to add projects, or insert directly via phpMyAdmin:

```sql
INSERT INTO projects (title, description, link, technologies, image_url)
VALUES ('Your Project', 'Description', 'URL', 'Tech Stack', 'Image URL');
```

### Customize Styling

All CSS files are in `src/styles/` directory. Modify colors, fonts, and layout as needed.

## 🔒 Security Notes

For production deployment:

1. **Change Database Password:**

   ```bash
   mysqladmin -u root password "yourpassword"
   ```

2. **Update config.php:**

   ```php
   $password = 'yourpassword';
   ```

3. **Add Input Validation:**
   - Already implemented in PHP files
   - Add additional validation as needed

4. **Use Environment Variables:**

   ```php
   $password = getenv('DB_PASSWORD');
   ```

5. **CORS Configuration:**
   - Update CORS headers for production domain
   - Restrict to specific origins

## 🐛 Troubleshooting

### CORS Errors

- Ensure PHP backend is running
- Check CORS headers in `backend/config.php`
- Verify API URLs in React components

### Database Connection Errors

- Verify MySQL is running in XAMPP
- Check database credentials in `config.php`
- Ensure `portfolio_db` database exists

### React App Won't Load

- Clear browser cache
- Delete `node_modules` and run `npm install`
- Restart dev server

### Projects Not Displaying

- Check browser console for errors
- Verify backend is running
- Test API endpoint directly in browser

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.
