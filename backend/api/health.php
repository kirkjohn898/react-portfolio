<?php
// Simple health check endpoint - no database required
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'status' => 'ok',
    'message' => 'Backend server is running',
    'timestamp' => date('Y-m-d H:i:s'),
    'php_version' => phpversion()
]);
?>
