<?php
class Game {
	private $id, $name, $description, $price;
	
	public function __construct($name, $description, $price) {
		$this->name = $name;
		$this->description = $description;
		$this->price = $price;
	}
}