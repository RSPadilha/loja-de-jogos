<?php
// TODO Fetch config file direto do heroku pros dados não ficarem expostos
class PDOFactory {
	public static function getConexao() {
		// LOCAL
		// $user = 'root';
		// $pass = '';
		// $host = 'localhost';
		// $db = 'loja-de-jogos';

		// ONLINE HEROKU
		$user = 'an6k7gg7hmusxbqp';
		$pass = 'hl0f6d9wyggfn33k';
		$host = 'ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
		$port = '3306';
		$db = 'opxng7vu0prk5e09';

		return new PDO("mysql:host=$host;dbname=$db", $user, $pass);
	}
}