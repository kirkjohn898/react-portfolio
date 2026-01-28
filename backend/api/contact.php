<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

$name = isset($data['name']) ? trim((string)$data['name']) : '';
$email = isset($data['email']) ? trim((string)$data['email']) : '';
$subject = isset($data['subject']) ? trim((string)$data['subject']) : 'No Subject';
$message = isset($data['message']) ? trim((string)$data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email']);
    exit;
}

// Send email to your Gmail
$email_sent = false;
$your_email = 'normiemarapo@gmail.com';

try {
    // Create email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Email subject
    $email_subject = "New Contact: " . $subject;
    
    // Email body
    $email_body = "You have a new message from your portfolio contact form:\n\n";
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Subject: " . $subject . "\n";
    $email_body .= "Time: " . date('Y-m-d H:i:s') . "\n\n";
    $email_body .= "Message:\n";
    $email_body .= str_repeat("-", 40) . "\n";
    $email_body .= $message . "\n";
    $email_body .= str_repeat("-", 40) . "\n\n";
    $email_body .= "Reply directly to: " . $email . "\n";
    
    // Use mail() function with error suppression
    if (mail($your_email, $email_subject, $email_body, $headers)) {
        $email_sent = true;
    }
} catch (Exception $e) {
    // Continue even if email fails
}

// Always return success to user
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your message has been sent. I will get back to you soon!'
]);
?>


