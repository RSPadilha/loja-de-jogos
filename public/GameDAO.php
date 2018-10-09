<?php
require 'PDOFactory.php';
require 'Game.php';

class GameDAO {
	public function listAll() {
		$query = 'SELECT * FROM games';
		$pdo = PDOFactory::getConnection();
		/* Retornar um array ou JSON */
		foreach($pdo->query($query) as $row) {
			$result = 'ID: '. $row['id'].'<br>'.
				'Nome: '.$row['name'].'<br>'.
				'Descricao: '.$row['description'].'<br>'.
				'Preco: '.$row['price'].'<br><br>';
				echo $result;
		}
	}

	public function searchById($id) {
		$query = "SELECT * FROM games WHERE id = :id";
		$pdo = PDOFactory::getConnection();
		$command = $pdo->prepare($query);
		$command->bindValue('id', $id);
		$command->execute();
		$result = $command->fetch(PDO::FETCH_OBJ);
		echo $result->id ."<br>";
		echo $result->name ."<br>";
		echo $result->description ."<br>";
		echo $result->price ."<br>";
	}

	public function insert($name, $description, $price) {
		// $var = $req->getParsedBody();
		// $game = new Game(0, $var['name'], $var['description'], $var['price']);
		$query = 'INSERT INTO games (name, description, price) VALUES (:name, :description, :price)';
		$pdo = PDOFactory::getConnection();
		$command = $pdo->prepare($query);
		$command->bindValue('name', $name);
		$command->bindValue('description', $description);
		$command->bindValue('price', $price);
		$command->execute();
	}

	public function delete($id) {
		$pdo = PDOFactory::getConnection();
		$command = $pdo->prepare('DELETE FROM games WHERE id = :id');
		$command->bindValue('id', $id);
		$command->execute();
	}
}