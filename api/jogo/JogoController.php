<?php
	require_once 'JogoDAO.php';

	class JogoController {
		public function listar($req, $res) {
			$dao = new JogoDAO;
			$lista = $dao->listar();
			return $res->withJson($lista)->withHeader('Content-type', 'application/json');
		}

		public function buscar($req, $res, $args) {
			$dao = new JogoDAO;
			$busca = $dao->buscar($args['id']);
			return $res->withJson($busca)->withHeader('Content-type', 'application/json');
		}

		public function inserir($req, $res) {
			$body = $req->getParsedBody();
			$jogo = new Jogo(null, $body['nome'], $body['descricao'], $body['preco'], $body['capa']);
			$dao = new JogoDAO;
			$dao->inserir($jogo);
			return $res->withJson($jogo)->withHeader('Content-type', 'application/json');
			//return $res->withStatus(201);
		}

		public function atualizar($req, $res, $args) {
			$body = $req->getParsedBody();
			$jogo = new Jogo($args['id'], $body['nome'], $body['descricao'], $body['preco'], $body['capa']);
			$dao = new JogoDAO;
			$dao->atualizar($jogo);
			return $res->write('Atualizado');
		}

		public function deletar($req, $res, $args) {
			$dao = new JogoDAO;
			$dao->deletar($args['id']);
			return $res->write('Deletado');
		}
	}