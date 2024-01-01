<?php
include 'db.php';

$studentId = $_POST['studentId'];

$stmt = $conn->prepare("DELETE FROM students WHERE student_id = ?");
$stmt->bind_param("i", $studentId);

if ($stmt->execute()) {
    echo "Student deleted successfully";
} else {
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
