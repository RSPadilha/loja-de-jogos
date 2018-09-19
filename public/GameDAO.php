<?php
require 'connection.php';
require 'Game.php';

class GameDAO {

	public function listAll() {
		$query = 'SELECT * FROM games';
		$pdo = PDOFACTORY::getConnection();
		/* Retornar um array */
		foreach($pdo->query($query) as $row) {
			$return = 'ID: '. $row['id'].'<br>'.
				'Nome: '.$row['name'].'<br>'.
				'Descricao: '.$row['description'].'<br>'.
				'Preco: '.$row['price'].'<br><br>';
				echo $return;
		}
	}


	public function searchById($id) {
		$query = 'SELECT * FROM games WHERE id = :id';
		$pdo = PDOFACTORY::getConnection();
		$command = $pdo->prepare($query);
		$command->bindValue('id', $id);
		$command->execute();
	}


}