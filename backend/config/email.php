<?php
/**
 * PHPMailer Configuration File
 * Configure your email settings here
 */

// Email Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'normiemarapo@gmail.com');        // Change this to your Gmail
define('SMTP_PASSWORD', 'mbsz eglt giul uepc');           // Change this to your Gmail App Password
define('FROM_EMAIL', 'normiemarapo@gmail.com');           // Same as SMTP_USERNAME
define('TO_EMAIL', 'normiemarapo@gmail.com');           // Where to receive contact messages
define('FROM_NAME', 'Portfolio Contact Form');

/**
 * HOW TO SETUP GMAIL:
 * 
 * 1. Go to: https://myaccount.google.com/apppasswords
 * 2. Select "Mail" and "Windows Computer" (or your device)
 * 3. Google will generate a 16-character password
 * 4. Copy that password and paste it in SMTP_PASSWORD above (remove spaces)
 * 5. Update SMTP_USERNAME and FROM_EMAIL with your Gmail address
 * 6. Update TO_EMAIL with the email where you want to receive messages
 * 
 * Your Gmail must have 2-Step Verification enabled!
 */
?>
