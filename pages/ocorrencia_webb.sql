-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/06/2025 às 03:50
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ocorrencia_webb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `ocorrencia_webb`
--

CREATE TABLE `ocorrencia_webb` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `endereco` varchar(150) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `senha` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `ocorrencia_webb`
--

INSERT INTO `ocorrencia_webb` (`id`, `nome`, `email`, `telefone`, `cpf`, `endereco`, `cidade`, `estado`, `senha`) VALUES
(1, 'eduardo', 'educamilo@gmail.com', '41999371806', '10303068965', 'dsdsds', 'dsds', 'sd', '$2y$10$402pcG/oZOrsibV0KsIuruHt2scBk/DqKDrPqzWOfBsP3GiTJa2QC'),
(2, 'eduardo', 'penis02@gmail.com', '32732351', '23212523', 'dsdssd', 'dssdsd', 'sd', '$2y$10$HZPz56yHlpPG7TYkDb3eVesfTQLlImK6bH4FyQuPyaqDxU3zaxMje'),
(3, 'sdsdsdsdsdsdsd', 'educamilo007@gmail.com', '32732351', '10303068965', 'dsdsds', 'dsds', 'ed', '$2y$10$xgLkMag4PskEJqyKmRC8G.iJtz18uuWFffNs8yLR54bOh5iRSjyBm'),
(4, 'vit', 'dsdsd@gmail.com', '32732351', '10303068965', 'dsdssd', 'fdfsdfdf', 'sd', '$2y$10$iOXMTu/FIQvNjspUt/gF..uVQnMz7r.b391cWvlouHW1YX/QgS/4W');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `ocorrencia_webb`
--
ALTER TABLE `ocorrencia_webb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `ocorrencia_webb`
--
ALTER TABLE `ocorrencia_webb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
