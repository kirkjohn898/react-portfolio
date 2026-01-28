<?php
// Database migration script - automatically updates database schema
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once '../config.php';

$response = [
    'success' => false,
    'message' => '',
    'changes' => []
];

try {
    // Check if contact_messages table exists
    $table_check = $conn->query("SHOW TABLES LIKE 'contact_messages'");
    
    if (!$table_check || $table_check->num_rows === 0) {
        // Create table if it doesn't exist
        $create_table = "CREATE TABLE IF NOT EXISTS contact_messages (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255),
            message TEXT NOT NULL,
            is_read BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if ($conn->query($create_table)) {
            $response['changes'][] = 'Created contact_messages table';
        } else {
            throw new Exception('Failed to create table: ' . $conn->error);
        }
    }
    
    // Check if subject column exists
    $column_check = $conn->query("SHOW COLUMNS FROM contact_messages LIKE 'subject'");
    
    if (!$column_check || $column_check->num_rows === 0) {
        // Add subject column
        $add_column = "ALTER TABLE contact_messages ADD COLUMN subject VARCHAR(255) AFTER email";
        
        if ($conn->query($add_column)) {
            $response['changes'][] = 'Added subject column to contact_messages table';
        } else {
            throw new Exception('Failed to add subject column: ' . $conn->error);
        }
    } else {
        $response['changes'][] = 'Subject column already exists';
    }
    
    // Verify all required columns exist
    $verify = $conn->query("SHOW COLUMNS FROM contact_messages");
    $columns = [];
    while ($row = $verify->fetch_assoc()) {
        $columns[] = $row['Field'];
    }
    
    $required_columns = ['id', 'name', 'email', 'subject', 'message', 'created_at'];
    $missing = array_diff($required_columns, $columns);
    
    if (count($missing) > 0) {
        throw new Exception('Missing columns: ' . implode(', ', $missing));
    }
    
    $response['success'] = true;
    $response['message'] = 'Database migration completed successfully';
    $response['changes'][] = 'Verified all required columns exist: ' . implode(', ', $columns);
    
} catch (Exception $e) {
    $response['success'] = false;
    $response['message'] = 'Migration failed: ' . $e->getMessage();
}

$conn->close();
echo json_encode($response);
?>
