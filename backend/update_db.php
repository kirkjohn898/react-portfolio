<?php
require_once 'config.php';

// Check if subject column exists and add it if it doesn't
$sql = "SHOW COLUMNS FROM contact_messages LIKE 'subject'";
$result = $conn->query($sql);

if ($result->num_rows == 0) {
    // Add subject column
    $alter_sql = "ALTER TABLE contact_messages ADD COLUMN subject VARCHAR(255) AFTER email";
    
    if ($conn->query($alter_sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Database updated successfully. Subject column added.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error updating database: ' . $conn->error]);
    }
} else {
    echo json_encode(['success' => true, 'message' => 'Database is already up to date.']);
}

$conn->close();
?>
