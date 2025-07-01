<?php
$host = 'db';
$db = '3Dmol_setting';
$user = 'user';
$pass = 'password';

$mysqli = new mysqli($host, $user, $pass, $db);
if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(["error" => "DB接続失敗: " . $mysqli->connect_error]);
    exit();
}
$mysqli->set_charset("utf8");
?>