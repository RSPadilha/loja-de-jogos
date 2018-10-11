<?php
require_once 'PDOFactory.php';
require_once 'Usuario.php';

class UsuarioDao {
	public function inserir(Usuario $usuario) {
		$query = 'INSERT INTO usuarios (nome, senha) VALUES (:nome, :senha)';
		$pdo = PDOFactory::getConnection();
		$command = $pdo->prepare($query);
		$command->bindValue('nome', $usuario->nome);
		$command->bindValue('senha', hash('sha256','joguinhos' . $usuario->senha));
		$command->execute();
	}
}