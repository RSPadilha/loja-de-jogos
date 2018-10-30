<?php
	use \Psr\Http\Message\ServerRequestInterface as Request;
	use \Psr\Http\Message\ResponseInterface as Response;
	require_once './vendor/autoload.php';

	require_once 'usuario/UsuarioController.php';
	require_once 'jogo/JogoController.php';

	$app = new \Slim\App([
		'settings' => [
			'displayErrorDetails' => true]
		]);

	$app->get('/', function($req, $res) {
		echo '<h1>Você está na nossa loja de jogos</h1>';
		echo 'Site em https://loja-de-jogos-pi2.herokuapp.com/';
	});

	$app->group('/usuarios', function() {
		$this->get('', 'UsuarioController:listar');
		$this->get('/{id}', 'UsuarioController:buscar');
		$this->post('', 'UsuarioController:inserir');
		$this->put('/{id}', 'UsuarioController:atualizar');
		$this->delete('/{id}', 'UsuarioController:deletar');

		$this->get('/jogos/{id}', 'UsuarioController:listarJogos');

		$this->post('/autentica', 'UsuarioController:autentica');
	});

	$app->group('/jogos', function() {
		$this->get('', 'JogoController:listar');
		$this->get('/{id}', 'JogoController:buscar');
		$this->post('', 'JogoController:inserir');
		$this->put('/{id}', 'JogoController:atualizar');
		$this->delete('/{id}', 'JogoController:deletar');
	});

// Permite o CORS para *, pode ser definido só para o localhost ou server do heroku / Verificar quais methodos são necessarios (options)
	$app->add(function ($req, $res, $next) {
	    $response = $next($req, $res);
	    return $response
	            ->withHeader('Access-Control-Allow-Origin', '*')
	            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
	            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	});

	$app->run();