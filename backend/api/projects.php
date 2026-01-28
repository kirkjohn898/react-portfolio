<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Sample projects data
$projects = [
    [
        'id' => 1,
        'title' => 'E-Commerce Platform',
        'description' => 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
        'link' => 'https://github.com/yourprofile/ecommerce',
        'technologies' => 'React, JavaScript, Node.js, MongoDB, Stripe',
        'image_url' => '/images/ecommerce.jpg'
    ],
    [
        'id' => 2,
        'title' => 'Thesis Management System',
        'description' => 'Comprehensive thesis management system with document uploads, feedback, and approval workflow.',
        'link' => 'https://github.com/yourprofile/thesis',
        'technologies' => 'React, PHP, MySQL, Bootstrap',
        'image_url' => '/images/thesis.jpg'
    ],
    [
        'id' => 3,
        'title' => 'Task Management App',
        'description' => 'Collaborative task management application with real-time updates and team features.',
        'link' => 'https://github.com/yourprofile/taskapp',
        'technologies' => 'React, Firebase, Material-UI, JavaScript',
        'image_url' => '/images/tasks.jpg'
    ],
    [
        'id' => 4,
        'title' => 'Weather Dashboard',
        'description' => 'Beautiful weather application displaying current weather and forecasts for multiple cities.',
        'link' => 'https://github.com/yourprofile/weather',
        'technologies' => 'React, JavaScript, OpenWeather API, Chart.js',
        'image_url' => '/images/weather.jpg'
    ]
];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($projects);
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
?>
