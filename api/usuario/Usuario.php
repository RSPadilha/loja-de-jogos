<?php
class Usuario {
	public $id, $nome, $senha;
	
	public function __construct($id, $nome, $senha) {
		$this->id = $id;
		$this->nome = $nome;
		$this->senha = $senha;
	}
}