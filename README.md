# Web Application with Search Functionality

This is a Node.js web application that demonstrates the implementation of search functionality following the MVC (Model-View-Controller) pattern. The application allows users to search for products by their names and displays the search results in a user-friendly format.

## Features

- Search functionality to filter products by name
- MVC pattern implementation for better code organization
- User-friendly display of search results using EJS templates

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
Navigate to the project directory:

bash
Copy code
cd <project_directory>
Install the required dependencies:

bash
Copy code
npm install
npm i express
Start the application:

bash
Copy code
npm start
This will start the Node.js server. You can access the application at http://localhost:3000 in your web browser.

Usage
Open your web browser and navigate to http://localhost:3000.
Use the search form to search for products by name.
View the search results displayed on the "searchResults" page.
Project Structure
php
Copy code
.
├── controllers
│   └── productcontroller.js    # Contains the controller logic for handling search requests
├── models
│   └── product.js               # Defines the product model (if applicable)
├── public                      # Static assets (CSS, JavaScript, images)
│   └── styles.css
├── views
│   ├── layout.ejs              # Main layout template
│   └── searchResults.ejs       # View for displaying search results
├── app.js                      # Entry point of the application
└── package.json                # Project metadata and dependencies
Technologies Used
Node.js
Express.js
EJS (Embedded JavaScript) for templating
Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvement, please feel free to open an issue or submit a pull request.
