

CREATE DATABASE IF NOT EXISTS portfolio_db;

USE portfolio_db;

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    link VARCHAR(500),
    technologies VARCHAR(500),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact Messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data for projects
INSERT INTO
    projects (
        title,
        description,
        link,
        technologies,
        image_url
    )
VALUES (
        'E-Commerce Platform',
        'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
        'https://github.com/yourprofile/ecommerce',
        'React, JavaScript, Node.js, MongoDB, Stripe',
        'https://via.placeholder.com/300x200?text=Ecommerce'
    ),
    (
        'Task Management App',
        'A collaborative task management application with real-time updates and team features.',
        'https://github.com/yourprofile/taskapp',
        'React, Firebase, Material-UI, JavaScript',
        'https://via.placeholder.com/300x200?text=Task+Manager'
    ),
    (
        'Weather Dashboard',
        'A beautiful weather application that displays current weather and forecasts for multiple cities.',
        'https://github.com/yourprofile/weather',
        'React, JavaScript, OpenWeather API, Chart.js',
        'https://via.placeholder.com/300x200?text=Weather'
    ),
    (
        'Blog Platform',
        'A modern blogging platform with markdown support, comments, and user authentication.',
        'https://github.com/yourprofile/blog',
        'React, PHP, MySQL, Bootstrap',
        'https://via.placeholder.com/300x200?text=Blog'
    ),
    (
        'Portfolio Website',
        'Responsive portfolio website showcasing my projects and skills with smooth animations.',
        'https://github.com/yourprofile/portfolio',
        'React, CSS3, JavaScript',
        'https://via.placeholder.com/300x200?text=Portfolio'
    ),
    (
        'Chat Application',
        'Real-time chat application with user authentication and message history.',
        'https://github.com/yourprofile/chat',
        'React, Socket.io, Node.js, MongoDB, JavaScript',
        'https://via.placeholder.com/300x200?text=Chat+App'
    ),
    (
        'PHP REST API',
        'RESTful API with CORS support, database integration, and comprehensive error handling.',
        'https://github.com/yourprofile/api',
        'PHP, MySQL, REST API',
        'https://via.placeholder.com/300x200?text=REST+API'
    ),
    (
        'C# Desktop App',
        'Windows desktop application with modern UI and database connectivity.',
        'https://github.com/yourprofile/desktop',
        'C#, .NET, Windows Forms',
        'https://via.placeholder.com/300x200?text=Desktop+App'
    ),
    (
        'Java Project',
        'Object-oriented Java application with clean architecture and design patterns.',
        'https://github.com/yourprofile/java',
        'Java, Spring Boot, MySQL',
        'https://via.placeholder.com/300x200?text=Java+App'
    ),
    (
        'Full-Stack Application',
        'Complete full-stack web application from frontend to backend database.',
        'https://github.com/yourprofile/fullstack',
        'React, PHP, JavaScript, MySQL',
        'https://via.placeholder.com/300x200?text=Full+Stack'
    );