<?php
	require_once 'PDOFactory.php';
	require_once 'Jogo.php';

	class JogoDAO {
		public function listar() {
			$listar = 'SELECT * FROM jogos';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($listar);
			$comando->execute();
			
			$jogos = array();
			while ($linha = $comando->fetch(PDO::FETCH_OBJ)) {
				$jogos[] = new Jogo($linha->id, $linha->nome, $linha->descricao, $linha->preco, $linha->capa);
			}
			return $jogos;
		}

		public function buscar($id) {
			$buscarId = 'SELECT * FROM jogos WHERE id = :id';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($buscarId);
			$comando->bindValue('id', $id);
			$comando->execute();
			$jogo = $comando->fetch(PDO::FETCH_OBJ);
			return new Jogo($jogo->id, $jogo->nome, $jogo->descricao, $jogo->preco, $jogo->capa);
		}

		public function inserir(Jogo $jogo) {
			$inserir = 'INSERT INTO jogos (nome, descricao, preco, capa) VALUES (:nome, :descricao, :preco, :capa)';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($inserir);
			$comando->bindValue('nome', $jogo->nome);
			$comando->bindValue('descricao', $jogo->descricao);
			$comando->bindValue('preco', $jogo->preco);
			$comando->bindValue('capa', $jogo->capa);
			$comando->execute();
		}

		public function atualizar(Jogo $jogo) {
			$atualizar = 'UPDATE usuarios SET nome = :nome, descricao = :descricao, preco = :preco, capa = :capa';
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare($atualizar);
			$comando->bindValue('nome', $jogo->nome);
			$comando->bindValue('descricao', $jogo->descricao);
			$comando->bindValue('preco', $jogo->preco);
			$comando->bindValue('capa', $jogo->capa);
			$comando->execute();
		}

		public function delete($id) {
			$pdo = PDOFactory::getConexao();
			$comando = $pdo->prepare('DELETE FROM games WHERE id = :id');
			$comando->bindValue('id', $id);
			$comando->execute();
		}
	}