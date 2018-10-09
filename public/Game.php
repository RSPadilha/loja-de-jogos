<?php
class Game {
	public $id, $name, $description, $price;
	
	public function __construct($id, $name, $description, $price) {
		$this->id = $id;
		$this->name = $name;
		$this->description = $description;
		$this->price = $price;
	}
}