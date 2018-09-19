<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require 'GameDAO.php';

$app = new \Slim\App;


/* Declaração de paths */
$app->get('/jogos', function($req, $res, $args) {
	$dao = new GameDAO;
	$dao->listAll();

	// $res->getBody()->write($query);
	
	// return $res;
});


$app->run();