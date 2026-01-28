<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$_SERVER['REQUEST_METHOD'] = 'POST';
file_put_contents('php://stdin', '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}');

include 'api/contact.php';
?>
