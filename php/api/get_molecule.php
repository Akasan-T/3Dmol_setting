<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=UTF-8');

header('Content-Type: application/json; charset=UTF-8');

try {
    $pdo = new PDO('mysql:host=db;dbname=3Dmol_setting;charset=utf8mb4', 'user', 'password');

    $name = isset($_GET['id']) ? $_GET['id'] : '';
    $stmt = $pdo->prepare("SELECT name, description, cif_filename FROM molecules WHERE name = ?");
    $stmt->execute([$name]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        echo json_encode($row, JSON_UNESCAPED_UNICODE);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "データが見つかりません"]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "サーバーエラー",
        "message" => $e->getMessage()
    ]);
}
?>