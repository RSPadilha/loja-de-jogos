<?php
	require_once 'PDOFactory.php';
	require_once 'Usuario.php';

	class UsuarioDAO {
		public function listar() {
			$listar = 'SELECT * FROM usuarios';
			$pdo = PDOFactory::getConnection();
			$comando = $pdo->prepare($listar);
			$comando->execute();
			
			$usuarios = array();
			while ($linha = $comando->fetch(PDO::FETCH_OBJ)) {
				$usuarios[] = new Usuario($linha->id, $linha->nome, null);
			}
			return $usuarios;
		}

		public function buscar($id) {
			$buscarid = 'SELECT * FROM usuarios WHERE id = :id';
			$pdo = PDOFactory::getConnection();
			$comando = $pdo->prepare($buscarid);
			$comando->bindValue('id', $id);
			$comando->execute();
			$usuario = $comando->fetch(PDO::FETCH_OBJ);
			return new Usuario($usuario->id, $usuario->nome, null);
		}

		public function inserir(Usuario $usuario) {
			$inserir = 'INSERT INTO usuarios (nome, senha) VALUES (:nome, :senha)';
			$pdo = PDOFactory::getConnection();
			$comando = $pdo->prepare($inserir);
			$comando->bindValue('nome', $usuario->nome);
			$comando->bindValue('senha', hash('sha256','joguinhos' . $usuario->senha));
			$comando->execute();
		}

		public function atualizar(Usuario $usuario) {
			$atualizar = 'UPDATE usuarios SET nome = :nome, senha = :senha WHERE id = :id';
			$pdo = PDOFactory::getConnection();
			$comando = $pdo->prepare($atualizar);
			$comando->bindValue('nome', $usuario->nome);
			$comando->bindValue('senha', hash('sha256','joguinhos' . $usuario->senha));
			$comando->execute();
		}

		public function deletar($id) {
			$deletar = 'DELETE FROM usuarios WHERE id = :id';
			$pdo = PDOFactory::getConnection();
			$comando = $pdo->prepare($deletar);
			$comando->bindValue('id', $id);
			$comando->execute();
		}
	}