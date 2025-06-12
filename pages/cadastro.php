<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = trim($_POST['cadastroNome']);
    $email = trim($_POST['cadastroEmail']);
    $telefone = trim($_POST['cadastroTelefone']);
    $cpf = trim($_POST['cadastroCPF']);
    $endereco = trim($_POST['cadastroEndereco']);
    $cidade = trim($_POST['cadastroCidade']);
    $estado = trim($_POST['cadastroEstado']);
    $senha = $_POST['cadastroSenha'];
    $confirmaSenha = $_POST['cadastroConfirmaSenha'];

    if ($senha !== $confirmaSenha) {
        echo "<script>alert('As senhas não coincidem!'); history.back();</script>";
        exit();
    }

    $checkEmail = $conn->prepare("SELECT id FROM ocorrencia_webb WHERE email = ?");
    if (!$checkEmail) {
        echo "<script>alert('Erro na preparação da consulta: " . $conn->error . "'); history.back();</script>";
        exit();
    }
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $checkEmail->store_result();

    if ($checkEmail->num_rows > 0) {
        echo "<script>alert('E-mail já cadastrado. Use outro.'); history.back();</script>";
        $checkEmail->close();
        exit();
    }
    $checkEmail->close();

    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO ocorrencia_webb (nome, email, telefone, cpf, endereco, cidade, estado, senha)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        echo "<script>alert('Erro na preparação da consulta: " . $conn->error . "'); history.back();</script>";
        exit();
    }
    $stmt->bind_param("ssssssss", $nome, $email, $telefone, $cpf, $endereco, $cidade, $estado, $senhaHash);

    if ($stmt->execute()) {
        echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href='login.html';</script>";
    } else {
        echo "<script>alert('Erro ao cadastrar: " . $stmt->error . "'); history.back();</script>";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Acesso inválido.";
}
?>
