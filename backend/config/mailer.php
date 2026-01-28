<?php
/**
 * Send Email using Gmail SMTP
 * This is a standalone email sender using SMTP directly
 */

function sendEmailViaGmail($to, $subject, $body, $headers = '') {
    // Get email config
    require_once 'email.php';
    
    $host = SMTP_HOST;           // smtp.gmail.com
    $port = SMTP_PORT;           // 587
    $username = SMTP_USERNAME;   // your_email@gmail.com
    $password = SMTP_PASSWORD;   // your app password (without spaces)
    $from = FROM_EMAIL;
    
    // Remove spaces from password
    $password = str_replace(' ', '', $password);
    
    $to = trim($to);
    $subject = trim($subject);
    
    // Try using mail() first (simpler)
    $email_headers = "From: $from\r\n";
    $email_headers .= "Reply-To: $from\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    if (!empty($headers)) {
        $email_headers .= $headers;
    }
    
    // Use ini settings for SMTP on Windows
    if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
        // Windows: Configure SMTP
        ini_set('SMTP', $host);
        ini_set('smtp_port', $port);
    }
    
    // Try to send
    $result = @mail($to, $subject, $body, $email_headers);
    
    if ($result) {
        return ['success' => true, 'message' => 'Email sent successfully'];
    } else {
        // If mail() fails, try alternative method
        return [
            'success' => false, 
            'message' => 'mail() function failed',
            'fallback' => 'Email not sent via mail(), but form was received'
        ];
    }
}

/**
 * Alternative: Send via native sockets (if mail() doesn't work)
 * This is more reliable but also more complex
 */
function sendEmailViaSocket($to, $subject, $body, $from) {
    require_once 'email.php';
    
    $host = SMTP_HOST;
    $port = SMTP_PORT;
    $username = SMTP_USERNAME;
    $password = str_replace(' ', '', SMTP_PASSWORD);
    
    try {
        // Create socket connection
        $sock = @fsockopen($host, $port, $errno, $errstr, 10);
        
        if (!$sock) {
            return false;
        }
        
        // Read server response
        $response = fgets($sock, 1024);
        
        // Send EHLO command
        fputs($sock, "EHLO " . $_SERVER['HTTP_HOST'] . "\r\n");
        $response = fgets($sock, 1024);
        
        // Start TLS
        fputs($sock, "STARTTLS\r\n");
        $response = fgets($sock, 1024);
        
        // Enable SSL
        if (!stream_socket_enable_crypto($sock, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($sock);
            return false;
        }
        
        // Send EHLO again after TLS
        fputs($sock, "EHLO " . $_SERVER['HTTP_HOST'] . "\r\n");
        $response = fgets($sock, 1024);
        
        // Authenticate
        fputs($sock, "AUTH LOGIN\r\n");
        $response = fgets($sock, 1024);
        
        fputs($sock, base64_encode($username) . "\r\n");
        $response = fgets($sock, 1024);
        
        fputs($sock, base64_encode($password) . "\r\n");
        $response = fgets($sock, 1024);
        
        // Send email
        fputs($sock, "MAIL FROM: <$from>\r\n");
        $response = fgets($sock, 1024);
        
        fputs($sock, "RCPT TO: <$to>\r\n");
        $response = fgets($sock, 1024);
        
        fputs($sock, "DATA\r\n");
        $response = fgets($sock, 1024);
        
        $message = "To: $to\r\n";
        $message .= "From: $from\r\n";
        $message .= "Subject: $subject\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
        $message .= $body . "\r\n.\r\n";
        
        fputs($sock, $message);
        $response = fgets($sock, 1024);
        
        // Close connection
        fputs($sock, "QUIT\r\n");
        fclose($sock);
        
        return true;
    } catch (Exception $e) {
        return false;
    }
}
?>
