<?php
include 'db.php';

$result = $conn->query("SELECT * FROM students");
$students = array();

if ($result) {
    while($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
    echo json_encode($students);
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
