<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require 'GameDAO.php';

$app = new \Slim\App;


/* Declaração de paths */
$app->get('/', function ($req, $res) {
	echo 'Você está na nossa loja de jogos';
});


$app->get('/jogos', function($req, $res) {
	$dao = new GameDAO;
	$dao->listAll();

	// $res->getBody()->write($query);
	// return $res;
});


$app->get('/jogos/{id}', function ($req, $res, $args) {
	$dao = new GameDAO;
	$dao->searchById($args['id']);
	// $res->
	//return $res;
});


$app->run();