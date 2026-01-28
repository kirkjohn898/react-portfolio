<?php
// Database configuration - NO HEADERS
$host = 'localhost';
$db = 'portfolio_db';
$user = 'root';
$password = '';

// Create connection
$conn = new mysqli($host, $user, $password, $db);

// Check connection silently (don't output headers)
if ($conn->connect_error) {
    $conn = null;
}

// Set charset
if ($conn) {
    $conn->set_charset("utf8");
}
?>
