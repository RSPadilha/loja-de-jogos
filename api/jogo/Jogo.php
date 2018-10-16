<?php
	class Jogo {
		public $id, $nome, $descricao, $preco, $capa;
		
		public function __construct($id, $nome, $descricao, $preco, $capa) {
			$this->id = $id;
			$this->nome = $nome;
			$this->descricao = $descricao;
			$this->preco = $preco;
			$this->capa = $capa;
		}
	}