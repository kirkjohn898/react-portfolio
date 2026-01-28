# Email Setup Guide for Contact Form

## 🎯 Goal
Receive emails when someone submits the contact form on your portfolio.

---

## ✅ Step-by-Step Setup

### Step 1: Get Gmail App Password

1. Go to: **https://myaccount.google.com/apppasswords**
2. Sign in with your Gmail account
3. Select:
   - **App:** Mail
   - **Device:** Windows Computer (or your device)
4. Click **Generate**
5. Google will show a **16-character password**
6. **Copy this password** (it looks like: `abcd efgh ijkl mnop`)

---

### Step 2: Update Email Configuration

1. Open: `backend/config/email.php`
2. Update these lines:

```php
define('SMTP_USERNAME', 'your_gmail@gmail.com');        // Your Gmail
define('SMTP_PASSWORD', 'abcdefghijklmnop');            // 16-char password (remove spaces)
define('FROM_EMAIL', 'your_gmail@gmail.com');           // Same as above
define('TO_EMAIL', 'normiemarapo@email.com');           // Where you receive messages
```

**Example:**
```php
define('SMTP_USERNAME', 'myportfolio@gmail.com');
define('SMTP_PASSWORD', 'abcdefghijklmnop');
define('FROM_EMAIL', 'myportfolio@gmail.com');
define('TO_EMAIL', 'myemail@gmail.com');
```

---

### Step 3: Ensure 2-Step Verification is Enabled

Gmail requires 2-Step Verification for app passwords:

1. Go to: **https://myaccount.google.com/security**
2. Look for **2-Step Verification**
3. If it's OFF, click it and turn it ON
4. Once enabled, you can generate app passwords

---

### Step 4: Test the Backend

1. Make sure PHP server is running:
   ```bash
   cd e:\Portfolio\portfolio\backend
   php -S localhost:8000
   ```

2. Go to React app: `http://localhost:3000`

3. Fill out the contact form and submit

4. Check your email (TO_EMAIL address) - you should receive it! ✅

---

## ⚙️ How It Works

**When someone submits the form:**

1. ✅ Email sent to **YOU** (portfolio owner) with their message
2. ✅ Confirmation email sent to **THEM** (visitor)
3. ✅ Message saved to database (if MySQL is running)

---

## 🐛 Troubleshooting

### "Email didn't arrive"

**Check these:**
- [ ] Gmail 2-Step Verification is ON
- [ ] App Password is correct (16 characters, no spaces)
- [ ] TO_EMAIL is correct
- [ ] PHP server is running on port 8000

### Still not working?

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Submit the form
4. Click the POST request to `localhost:8000/api/contact.php`
5. Check the **Response** tab
6. Look for `"email_sent": true` or `false`

---

## 📧 What Gets Sent

### Email TO YOU:
```
From: Your Gmail
Subject: New Portfolio Contact from John: Project Inquiry
Body:
  Name: John Doe
  Email: john@example.com
  Subject: Project Inquiry
  Date: 2026-01-28 10:30:00
  Message: [Their message here]
```

### Confirmation Email TO VISITOR:
```
From: Your Gmail
Subject: We received your message
Body:
  Hi [Name],
  Thank you for contacting me. I have received your message and will get back to you soon.
  [Shows their message back]
```

---

## ✨ Optional: Use Different Email Service

If Gmail doesn't work, you can use:
- **SendGrid** (free tier available)
- **Mailgun** (free tier available)
- **Firebase** (free tier available)

Let me know if you want to set up any of these!

---

## 🎉 Success!

Once configured correctly, you'll get an email every time someone submits the contact form. Perfect!
