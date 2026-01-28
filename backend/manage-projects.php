<?php
/**
 * Project Management Utility
 * Simple script to add, update, or delete projects from command line
 * Usage: php manage-projects.php add "Title" "Description" "Link" "Technologies"
 */

require_once 'config.php';

$action = isset($argv[1]) ? $argv[1] : '';

if (php_sapi_name() !== 'cli') {
    die('This script must be run from command line');
}

function addProject($title, $description, $link = '', $technologies = '', $image_url = '') {
    global $conn;
    
    $title = $conn->real_escape_string($title);
    $description = $conn->real_escape_string($description);
    $link = $conn->real_escape_string($link);
    $technologies = $conn->real_escape_string($technologies);
    $image_url = $conn->real_escape_string($image_url);
    
    $sql = "INSERT INTO projects (title, description, link, technologies, image_url) 
            VALUES ('$title', '$description', '$link', '$technologies', '$image_url')";
    
    if ($conn->query($sql) === TRUE) {
        echo "✓ Project added successfully!\n";
        return true;
    } else {
        echo "✗ Error: " . $conn->error . "\n";
        return false;
    }
}

function listProjects() {
    global $conn;
    
    $sql = "SELECT id, title, link, created_at FROM projects ORDER BY id DESC";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        echo "\nProjects:\n";
        echo str_repeat("-", 80) . "\n";
        while ($row = $result->fetch_assoc()) {
            echo "ID: {$row['id']} | {$row['title']} | Created: {$row['created_at']}\n";
        }
        echo str_repeat("-", 80) . "\n";
    } else {
        echo "No projects found.\n";
    }
}

switch ($action) {
    case 'add':
        if (isset($argv[2])) {
            $title = $argv[2];
            $description = $argv[3] ?? '';
            $link = $argv[4] ?? '';
            $technologies = $argv[5] ?? '';
            addProject($title, $description, $link, $technologies);
        } else {
            echo "Usage: php manage-projects.php add \"Title\" \"Description\" \"Link\" \"Technologies\"\n";
        }
        break;
    
    case 'list':
        listProjects();
        break;
    
    default:
        echo "Available commands:\n";
        echo "  list                    - List all projects\n";
        echo "  add [title] [desc]      - Add new project\n";
        break;
}

$conn->close();
?>
