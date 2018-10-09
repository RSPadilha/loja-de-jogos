<?php
class PDOFactory {
	public static function getConnection() {
		$user = 'an6k7gg7hmusxbqp';
		$pass = 'hl0f6d9wyggfn33k';
		$host = 'ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
		$port = '3306';
		$db = 'opxng7vu0prk5e09';

		return new PDO("mysql:host=$host;dbname=$db", $user, $pass);
	}
}