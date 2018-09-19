<?php
require 'connection.php';
require 'Game.php';

class GameDAO {

	public function listAll() {
		$query = 'SELECT * FROM games';
		$pdo = PDOFACTORY::getConnection();
		foreach($pdo->query($query) as $row) {
			$query = 'ID: '. $row['id'].'<br>'.
				'Nome: '.$row['name'].'<br>'.
				'Descricao: '.$row['description'].'<br>'.
				'Preco: '.$row['price'].'<br><br>';
		}
	}
}