<?php
// Database credentials
$servername = "localhost"; // Typically 'localhost' for a local server
$username = "root";       // Default username for XAMPP's MySQL
$password = "";           // Default password for XAMPP's MySQL is empty
$dbname = "test"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
