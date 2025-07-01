<?php
header('Content-Type: application/json');
include 'db.php';

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if ($id <= 0) {
    http_response_code(400);
    echo json_decode(["error" => "IDが不正です"]);
    exit();
}

$stmt = $mysqli->prepare("SELECT * FROM molecules WHERE id = ?");
$stmt -> bind_param("i", $id);
$stmt -> execute();
$result = $stmt->get_result();

if ($row = $result->fetch_ass0c()) {
    echo json_encode($row);
} else{
    http_response_code(404);
    echo json_encode(["error" => "データが見つかりません"]);
}
?>