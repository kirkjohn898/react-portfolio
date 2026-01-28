<?php
// Database Setup and Check Script
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = 'localhost';
$user = 'root';
$password = '';
$db = 'portfolio_db';

// Try to connect to MySQL without selecting a database first
$conn = new mysqli($host, $user, $password);

if ($conn->connect_error) {
    echo json_encode([
        'success' => false,
        'step' => 'MySQL Connection',
        'error' => $conn->connect_error
    ]);
    exit;
}

// Check if database exists
$db_check = $conn->query("SHOW DATABASES LIKE '$db'");

if ($db_check->num_rows === 0) {
    // Create database
    if ($conn->query("CREATE DATABASE $db")) {
        $message = "Database created successfully";
    } else {
        echo json_encode([
            'success' => false,
            'step' => 'Create Database',
            'error' => $conn->error
        ]);
        exit;
    }
} else {
    $message = "Database already exists";
}

// Select database
if (!$conn->select_db($db)) {
    echo json_encode([
        'success' => false,
        'step' => 'Select Database',
        'error' => $conn->error
    ]);
    exit;
}

// Check if contact_messages table exists
$table_check = $conn->query("SHOW TABLES LIKE 'contact_messages'");

if ($table_check->num_rows === 0) {
    // Create table
    $create_table = "CREATE TABLE contact_messages (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    if ($conn->query($create_table)) {
        $table_message = "contact_messages table created";
    } else {
        echo json_encode([
            'success' => false,
            'step' => 'Create Table',
            'error' => $conn->error
        ]);
        exit;
    }
} else {
    $table_message = "contact_messages table already exists";
}

// Check for subject column
$subject_check = $conn->query("SHOW COLUMNS FROM contact_messages LIKE 'subject'");

$subject_status = ($subject_check->num_rows > 0) ? "Subject column exists" : "Subject column missing";

// Try to add subject column if missing
if ($subject_check->num_rows === 0) {
    $conn->query("ALTER TABLE contact_messages ADD COLUMN subject VARCHAR(255) AFTER email");
    $subject_status = "Subject column added";
}

// Check if projects table exists
$projects_check = $conn->query("SHOW TABLES LIKE 'projects'");

if ($projects_check->num_rows === 0) {
    $create_projects = "CREATE TABLE projects (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        link VARCHAR(500),
        technologies VARCHAR(500),
        image_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    $conn->query($create_projects);
    $projects_message = "projects table created";
} else {
    $projects_message = "projects table already exists";
}

$conn->close();

echo json_encode([
    'success' => true,
    'steps' => [
        'MySQL Connection' => 'Connected',
        'Database Setup' => $message,
        'Contact Messages Table' => $table_message,
        'Subject Column' => $subject_status,
        'Projects Table' => $projects_message
    ],
    'message' => 'Database setup completed successfully'
]);
?>
