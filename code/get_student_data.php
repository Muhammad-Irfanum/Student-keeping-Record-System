<?php
include 'db.php';

$studentId = $_GET['studentId'];
$stmt = $conn->prepare("SELECT * FROM students WHERE student_id = ?");
$stmt->bind_param("i", $studentId);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    echo json_encode($row);
} else {
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
