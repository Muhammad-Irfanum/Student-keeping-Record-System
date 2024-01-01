
<?php
include 'db.php';  // Ensure this path is correct

$query = "SELECT * FROM scholarships";  // Adjust the table name and fields as per your database
$result = $conn->query($query);
$scholarships = array();

if ($result) {
    while($row = $result->fetch_assoc()) {
        $scholarships[] = $row;
    }
    echo json_encode($scholarships);
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
