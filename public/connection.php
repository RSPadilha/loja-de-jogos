<?php
class PDOFactory {

private static $pdo; // Não precisa disso?

	public static function getConnection() {
		$host = 'localhost';
		$dbname = 'game_store';
		$db = "mysql:host=$host;dbname=$dbname";
		$user = 'root';
		$pwd = '';

		$pdo = new PDO($db, $user, $pwd);

		return $pdo;
	}
}