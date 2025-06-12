<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = trim($_POST['loginUsuario']);
    $senha = $_POST['loginSenha'];

    // Busca o usuário pelo email ou nome na tabela ocorrencia_webb
    $sql = "SELECT * FROM ocorrencia_webb WHERE email = ? OR nome = ? LIMIT 1";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        echo "<script>alert('Erro na preparação da consulta: " . $conn->error . "'); history.back();</script>";
        exit();
    }

    $stmt->bind_param("ss", $usuario, $usuario);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $usuarioDados = $resultado->fetch_assoc();

        // Verifica a senha usando password_verify()
        if (password_verify($senha, $usuarioDados['senha'])) {
            // Login OK - aqui você pode iniciar sessão, por exemplo
            echo "<script>alert('Login bem-sucedido!'); window.location.href='dashboard.html';</script>";
        } else {
            echo "<script>alert('Senha incorreta!'); history.back();</script>";
        }
    } else {
        echo "<script>alert('Usuário não encontrado!'); history.back();</script>";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Acesso inválido.";
}
?>
