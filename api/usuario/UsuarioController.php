<?php
	require_once 'UsuarioDAO.php';

	class UsuarioController {
		public function listar($req, $res) {
			$dao = new UsuarioDAO;
			$lista = $dao->listar();
			return $res->withJson($lista)->withHeader('Content-type', 'application/json');
		}

		public function buscar($req, $res, $args) {
			$dao = new UsuarioDAO;
			$busca = $dao->buscar($args['id']);
			return $res->withJson($busca)->withHeader('Content-type', 'application/json');
		}

		public function inserir($req, $res) {
			$body = $req->getParsedBody();
			$usuario = new Usuario(null, $body['nome'], $body['usuario'], $body['senha'], $body['email'], null, null);
			$dao = new UsuarioDAO;
			$dao->inserir($usuario);
			return $res->withStatus(201);
		}

		public function atualizar($req, $res, $args) {
			// Pegar o objeto na requisicao?
			// Qual a necessidade do $args se no $body tbm tem essa informacao
			$body = $req->getParsedBody();
			$usuario = new Usuario($args['id'], $body['nome'], $body['usuario'], $body['senha'], $body['email'], null, null);
			$dao = new UsuarioDAO;
			$dao->atualizar($usuario);
			return $res->write('Atualizado');
		}

		public function deletar($req, $res, $args) {
			$dao = new UsuarioDAO;
			$dao->deletar($args['id']);
			return $res->write('Deletado');
		}

		public function listarJogos($req, $res, $args) {
			$dao = new UsuarioDAO;
			$listar = $dao->listarJogos($args['id']);
			return $res->withJson($listar)->withHeader('Content-type', 'application/json');
		}

		public function autentica($req, $res, $args) {
			$body = $req->getParsedBody();
			$dao = new UsuarioDAO;
			$login = $dao->autentica($body['usuario'], $body['senha']);
			if($login == 'login fail') return '{"error": "Bad Request"}';
			echo '{"userData": "'.$login.'"}';
			// return $res->write($login)->withHeader('Content-type', 'application/json');
		}
	}