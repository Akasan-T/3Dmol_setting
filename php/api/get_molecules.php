<?php
header('Content-Type: application/json');
include 'db.php';

$sql = "SELECT id, name, scientific_name, type FROM molecules";
$result = $mysqli->query($sql);

$molecules = [];
while ($row = $result->Fetch_assoc()) {
    $molecules[] = $row;
}

echo json_encode($molecules);
?>