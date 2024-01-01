<?php
include 'db.php';

$result = $conn->query("SELECT * FROM streams");
$streams = array();

if ($result) {
    while($row = $result->fetch_assoc()) {
        $streams[] = $row;
    }
    echo json_encode($streams);
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
