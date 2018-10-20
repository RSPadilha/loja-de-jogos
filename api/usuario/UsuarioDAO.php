<?php
	require_once 'bancoDeDados/Conexao.php';
	require_once 'Usuario.php';

	class UsuarioDAO {
		public function listar() {
			$listar = 'SELECT * FROM usuarios';
			$pdo = Conexao::getConexao();
			$comando = $pdo->query($listar);

			$usuarios = array();
			while ($linha = $comando->fetch(PDO::FETCH_OBJ)) {
				$usuarios[] = new Usuario($linha->id, $linha->nome, $linha->usuario, null, $linha->email, $linha->avatar, $linha->qtdJogos);
			}
			return $usuarios ? $usuarios : null;
		}

		public function buscar($id) {
			$buscarId = 'SELECT * FROM usuarios WHERE id = :id';
			$pdo = Conexao::getConexao();
			$comando = $pdo->prepare($buscarId);
			$comando->bindValue('id', $id);
			$comando->execute();
			$usuario = $comando->fetch(PDO::FETCH_OBJ);
			return $usuario ? new Usuario($usuario->id, $usuario->nome, $usuario->usuario, null, $usuario->email, $usuario->avatar, $usuario->qtdJogos) : null;
		}

		public function inserir(Usuario $usuario) {
			$inserir = 'INSERT INTO usuarios (nome, usuario, senha, email, avatar) VALUES (:nome, :usuario, :senha, :email, :avatar)';
			$pdo = Conexao::getConexao();
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
			$pdo = Conexao::getConexao();
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
			$pdo = Conexao::getConexao();
			$comando = $pdo->prepare($deletar);
			$comando->bindValue('id', $id);
			$comando->execute();
		}

		public function listarJogos($id) {
			$listarJogos = 'SELECT j.nome FROM jogos j, lista_jogos l WHERE l.idUsuario = :id AND j.id = l.idJogo';
			$pdo = Conexao::getConexao();
			$comando = $pdo->prepare($listarJogos);
			$comando->bindValue('id', $id);
			$comando->execute();

			$listaJogos = array();
			while ($linha = $comando->fetch(PDO::FETCH_OBJ)) {
				$listaJogos[] = $linha->nome;
			}
			return $listaJogos ? $listaJogos : null;
		}
	}