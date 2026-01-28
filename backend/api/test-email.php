<?php
// Test email configuration
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$results = [
    'php_version' => phpversion(),
    'os' => PHP_OS,
    'mail_function' => ini_get('mail.transport'),
    'smtp' => ini_get('SMTP'),
    'smtp_port' => ini_get('smtp_port'),
    'config_loaded' => false,
    'email_config' => [],
    'test_email_sent' => false,
    'message' => ''
];

// Try to load email config
if (@include_once '../config/email.php') {
    $results['config_loaded'] = true;
    $results['email_config'] = [
        'SMTP_HOST' => SMTP_HOST,
        'SMTP_PORT' => SMTP_PORT,
        'FROM_EMAIL' => FROM_EMAIL,
        'TO_EMAIL' => TO_EMAIL,
        'FROM_NAME' => FROM_NAME,
        'SMTP_USERNAME_SET' => !empty(SMTP_USERNAME),
        'SMTP_PASSWORD_SET' => !empty(SMTP_PASSWORD)
    ];
    
    // Try to send test email
    $test_email = TO_EMAIL;
    $test_subject = "Portfolio Email Test - " . date('Y-m-d H:i:s');
    $test_body = "This is a test email from your portfolio contact form.\n\nIf you receive this, your email is working correctly!";
    
    $headers = "From: " . FROM_EMAIL . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    if (@mail($test_email, $test_subject, $test_body, $headers)) {
        $results['test_email_sent'] = true;
        $results['message'] = 'Test email sent successfully! Check your inbox.';
    } else {
        $results['message'] = 'Config loaded but mail() function failed. PHP mail may not be configured on this system.';
    }
} else {
    $results['message'] = 'Email config file not found. Please run setup first.';
}

http_response_code(200);
echo json_encode($results, JSON_PRETTY_PRINT);
?>
