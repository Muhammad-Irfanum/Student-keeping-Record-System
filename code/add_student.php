<?php
include 'db.php';

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$dob = $_POST['dob'];
$streamId = $_POST['streamId'];

$stmt = $conn->prepare("INSERT INTO students (first_name, last_name, date_of_birth, stream_id) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssi", $firstName, $lastName, $dob, $streamId);

if ($stmt->execute()) {
    echo "Student added successfully";
} else {
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
