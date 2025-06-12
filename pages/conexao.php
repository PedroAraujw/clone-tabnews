<?php
$servername = "if0_39211968_ocorrencia_webb";
$username = "if0_39211968";
$password = "";
$dbname = "sql307.infinityfree.com";  // Coloque aqui o nome correto do banco

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
