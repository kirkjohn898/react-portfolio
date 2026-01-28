<?php
// Simple test endpoint to verify backend connectivity and database
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Test database connection
require_once '../config.php';

$response = [
    'server_running' => true,
    'database_connected' => false,
    'table_exists' => false,
    'subject_column_exists' => false,
    'messages' => []
];

// Check database connection
if ($conn->connect_error) {
    $response['database_connected'] = false;
    $response['messages'][] = 'Database error: ' . $conn->connect_error;
    echo json_encode($response);
    exit;
}

$response['database_connected'] = true;
$response['messages'][] = 'Database connected successfully';

// Check if table exists
$table_check = $conn->query("SHOW TABLES LIKE 'contact_messages'");
if ($table_check && $table_check->num_rows > 0) {
    $response['table_exists'] = true;
    $response['messages'][] = 'contact_messages table exists';
    
    // Check if subject column exists
    $column_check = $conn->query("SHOW COLUMNS FROM contact_messages LIKE 'subject'");
    if ($column_check && $column_check->num_rows > 0) {
        $response['subject_column_exists'] = true;
        $response['messages'][] = 'Subject column exists';
    } else {
        $response['messages'][] = 'WARNING: Subject column does NOT exist. Run the database migration.';
    }
} else {
    $response['messages'][] = 'ERROR: contact_messages table does not exist';
}

$conn->close();
echo json_encode($response);
?>
