<?php
	require_once 'bancoDeDados/Conexao.php';
	require_once 'Jogo.php';

	class JogoDAO {
		public function listar() {
			$listar = 'SELECT * FROM jogos';
			$pdo = Conexao::getConexao();
			$comando = $pdo->query($listar);
			
			$jogos = array();
			while ($linha = $comando->fetch(PDO::FETCH_OBJ)) {
				$jogos[] = new Jogo($linha->id, $linha->nome, $linha->descricao, $linha->preco, $linha->capa);
			}
			return $jogos ? $jogos : null;
		}

		public function buscar($id) {
			$buscarId = 'SELECT * FROM jogos WHERE id = :id';
			$pdo = Conexao::getConexao();
			$comando = $pdo->prepare($buscarId);
			$comando->bindValue('id', $id);
			$comando->execute();
			$jogo = $comando->fetch(PDO::FETCH_OBJ);
			return $jogo ? new Jogo($jogo->id, $jogo->nome, $jogo->descricao, $jogo->preco, $jogo->capa) : null;
		}

		public function inserir(Jogo $jogo) {
			$inserir = 'INSERT INTO jogos (nome, descricao, preco, capa) VALUES (:nome, :descricao, :preco, :capa)';
			$pdo = Conexao::getConexao();
			$comando = $pdo->prepare($inserir);
			$comando->bindValue('nome', $jogo->nome);
			$comando->bindValue('descricao', $jogo->descricao);
			$comando->bindValue('preco', $jogo->preco);
			$comando->bindValue('capa', $jogo->capa);
			$comando->execute();
		}

		public function atualizar(Jogo $jogo) {
			$atualizar = 'UPDATE usuarios SET nome = :nome, descricao = :descricao, preco = :preco, capa = :capa';
			$pdo = Conexao::getConexao();
			$comando = $pdo->prepare($atualizar);
			$comando->bindValue('nome', $jogo->nome);
			$comando->bindValue('descricao', $jogo->descricao);
			$comando->bindValue('preco', $jogo->preco);
			$comando->bindValue('capa', $jogo->capa);
			$comando->execute();
		}

		public function delete($id) {
			$pdo = Conexao::getConexao();
			$comando = $pdo->prepare('DELETE FROM games WHERE id = :id');
			$comando->bindValue('id', $id);
			$comando->execute();
		}
	}