# ⚡ QUICK START - UPGRADED PORTFOLIO

Your portfolio is now professional with routing and animations!

## 🚀 Installation (2 minutes)

### 1. Install React Router

```bash
npm install react-router-dom@6.20.0
```

### 2. Clear cache & reinstall (optional but recommended)

```bash
npm install
```

### 3. Start Backend

```bash
cd backend
php -S localhost:8000
```

### 4. Start Frontend

```bash
npm start
```

**Visit:** http://localhost:3000

---

## 🎯 What's New?

✨ **Professional Styling**

- Gradient backgrounds
- Smooth animations
- Modern color scheme

📑 **Page Routing**

- Home → About → Portfolio → Contact
- Smooth transitions
- No page refreshes

🖥️ **Terminal Animation**

- Shows your intro on home page
- Typing effect with your name & tech stack
- Professional looking

🎨 **Enhanced Components**

- Better hover effects
- Advanced shadows
- Responsive design

---

## 📝 Quick Customizations

### Change Your Terminal Message

File: `src/components/Terminal.js`

Find the `lines` array and update:

```javascript
const lines = [
  "Hello World! 👋",
  "I'm Normie Cantiveros", // ← Your name
  "I'm a Full-Stack Developer", // ← Your profession
  "Languages & Technologies:",
  "• React.js",
  "• PHP",
  // ... add your languages
];
```

### Change Colors

Look for these colors in CSS files and replace:

- `#667eea` → Your primary color
- `#764ba2` → Your secondary color

### Update Contact Info

File: `src/pages/Contact.js`

Find and update:

- Email: `your@email.com`
- Phone: `+1234567890`
- LinkedIn/GitHub links

---

## 🧭 Navigation

**Header** → Links to all pages:

- Home (terminal animation)
- About (your info & skills)
- Portfolio (projects)
- Contact (contact form)

---

## 📂 New File Structure

```
src/
├── pages/ ← NEW FOLDER
│   ├── Home.js
│   ├── About.js
│   ├── Portfolio.js
│   └── Contact.js
├── components/
│   ├── Terminal.js ← NEW
│   └── ... other components
└── styles/
    ├── pages/ ← NEW FOLDER
    │   ├── Home.css
    │   ├── About.css
    │   ├── Portfolio.css
    │   └── Contact.css
    ├── Terminal.css ← NEW
    └── ... other styles
```

---

## ✅ Checklist

- [ ] Install react-router-dom
- [ ] Run npm install
- [ ] Start PHP backend
- [ ] Start React frontend
- [ ] Test all page links
- [ ] Customize terminal message
- [ ] Update contact info
- [ ] Test on mobile
- [ ] Deploy to production

---

## 🐛 If Something Goes Wrong

**"Module not found: react-router-dom"**

```bash
npm install react-router-dom
npm start
```

**Page won't load**

- Check backend is running
- Check console for errors
- Restart dev server

**Styling looks wrong**

- Clear browser cache (Ctrl+Shift+Delete)
- Restart npm start
- Check file paths

---

## 📊 Features at a Glance

| Feature              | Status |
| -------------------- | ------ |
| Multi-page routing   | ✅     |
| Terminal animation   | ✅     |
| Professional styling | ✅     |
| Mobile responsive    | ✅     |
| Smooth transitions   | ✅     |
| Contact form         | ✅     |
| Project filters      | ✅     |

---

## 🎉 You're Ready!

Everything is set up and working.

Just:

1. `npm start`
2. Enjoy your awesome portfolio!

---

For detailed info, see **UPGRADE_GUIDE.md**

Happy coding! 🚀
