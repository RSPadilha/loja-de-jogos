<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require_once '../vendor/autoload.php';

require_once './usuario/UsuarioController.php';
require_once 'GameDAO.php';

$app = new \Slim\App;

$app->get('/', function($req, $res) {
	echo 'Você está na nossa loja de jogos';
	echo 'Site em https://loja-de-jogos-pi2.herokuapp.com/';
});

$app->get('/jogos', function($req, $res) {
	echo '<h1>Você está listando todos os jogos</h1>';
	$dao = new GameDAO;
	$dao->listAll();
	// $res->getBody()->write($query);
	// return $res;
});

$app->get('/jogos/{id}', function($req, $res, $args) {
	$dao = new GameDAO;
	$dao->searchById($args['id']);
	// $res->
	//return $res;
});

$app->post('/jogos', function($req, $res) {
	$name = $_POST['name'];
	$desc = $_POST['description'];
	$price = $_POST['price'];
	$dao = new GameDAO;
	$dao->insert($name, $desc, $price);
});

$app->delete('/jogos/{id}', function($req, $res, $args) {
	$id = $args['id'];
	$dao = new GameDAO;
	$dao->delete($id);
});

$app->group('/usuarios', function() {
	$this->get('', 'UsuarioController:listar');
	$this->get('/{id}', 'UsuarioController:buscar');
	$this->post('', 'UsuarioController:inserir');
	$this->put('/{id}', 'UsuarioController:atualizar');
	$this->delete('/{id}', 'UsuarioController:deletar');
});

// $app->group('/jogos', function () {
// 	$this->get('', 'JogosController:');
// 	$this->get('', 'JogosController:');
// 	$this->post('', 'JogosController:');
// 	$this->put('', 'JogosController:');
// 	$this->delete('', 'JogosController:');
// });

$app->run();