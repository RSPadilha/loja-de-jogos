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
			$usuario = new Usuario(null, $body['usuario'], $body['senha']);
			$dao = new UsuarioDAO;
			$dao->inserir($usuario);
			return $res->withStatus(201);
		}

		public function atualizar($req, $res, $args) {
			// Pegar o objeto na requisicao?
			$body = $req->getParsedBody();
			$usuario = new Usuario($args['id'], $body['nome'], $body['senha']);
			$dao = new UsuarioDAO;
			$dao->atualizar($usuario);
			return $res->write('Atualizado');
		}

		public function deletar($req, $res, $args) {
			$dao = new UsuarioDAO;
			$dao->deletar($args['id']);
			return $res->write('Deletado');
		}
	}