<?php
include 'db.php';

$studentId = $_POST['studentId'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$dob = $_POST['dob'];
$streamId = $_POST['streamId'];

$stmt = $conn->prepare("UPDATE students SET first_name = ?, last_name = ?, date_of_birth = ?, stream_id = ? WHERE student_id = ?");
$stmt->bind_param("sssii", $firstName, $lastName, $dob, $streamId, $studentId);

if ($stmt->execute()) {
    echo "Student updated successfully";
} else {
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
