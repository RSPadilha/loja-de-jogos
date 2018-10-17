<?php
	require_once 'PDOFactory.php';
	require_once 'Usuario.php';

	class UsuarioDAO {
		public function listar() {
			$listar = 'SELECT * FROM usuarios';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->query($listar);

			$usuarios = array();
			while ($linha = $comando->fetch(PDO::FETCH_OBJ)) {
				$usuarios[] = new Usuario($linha->id, $linha->nome, $linha->usuario, null, $linha->email, $linha->avatar, $linha->qtdJogos);
			}
			return $usuarios;
		}

		public function buscar($id) {
			$buscarId = 'SELECT * FROM usuarios WHERE id = :id';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($buscarId);
			$comando->bindValue('id', $id);
			$comando->execute();
			$usuario = $comando->fetch(PDO::FETCH_OBJ);
			return new Usuario($usuario->id, $usuario->nome, $usuario->usuario, null, $usuario->email, $usuario->avatar, $usuario->qtdJogos);
		}

		public function inserir(Usuario $usuario) {
			$inserir = 'INSERT INTO usuarios (nome, usuario, senha, email, avatar) VALUES (:nome, :usuario, :senha, :email, :avatar)';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($inserir);
			$comando->bindValue('nome', $usuario->nome);
			$comando->bindValue('usuario', $usuario->usuario);
			$comando->bindValue('senha', hash('sha256','joguinhos' . $usuario->senha));
			$comando->bindValue('email', $usuario->email);
			$comando->bindValue('avatar', $usuario->avatar);
			$comando->execute();
		}

		public function atualizar(Usuario $usuario) {
			$atualizar = 'UPDATE usuarios SET nome = :nome, usuario = :usuario, senha = :senha, email = :email, avatar = :avatar WHERE id = :id';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($atualizar);
			$comando->bindValue('nome', $usuario->nome);
			$comando->bindValue('usuario', $usuario->usuario);
			$comando->bindValue('senha', hash('sha256','joguinhos' . $usuario->senha));
			$comando->bindValue('email', $usuario->email);
			$comando->bindValue('avatar', $usuario->avatar);
			$comando->execute();
		}

		public function deletar($id) {
			$deletar = 'DELETE FROM usuarios WHERE id = :id';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($deletar);
			$comando->bindValue('id', $id);
			$comando->execute();
		}

		// ARRUMAR ESSA CONSULTA HORRIVEL
		public function listarJodos($id) {
			$listarJodos = 'SELECT usuarios.nome, jogos.nome FROM usuarios INNER JOIN lista_jogos ON usuarios.id = lista_jogos.idUsuario INNER JOIN jogos ON jogos.id = lista_jogos.idJogo WHERE usuarios.id = :id';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($listarJodos);
			$comando->bindValue('id', $id);
			$comando->execute();

			$listaJogos = array();
			while ($linha = $comando->fetch(PDO::FETCH_OBJ)) {
				$listaJogos = $linha->nome;
			}
			// $listaJogos = $comando->fetch(PDO::FETCH_OBJ);
			return $listaJogos;
		}
	}