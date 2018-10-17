<?php
	class Usuario {
		/*
		id			smalint(6), PK
		nome		varchar(60), not null
		usuario		varchar(20) not null, unique
		senha		varchar(64) not null
		email		varchar(60)
		avatar		varchar(60)
		qtdJogos	smallint(6), not null, default 0
		*/
		public $id, $nome, $usuario, $senha, $email, $avatar, $qtdJogos;
		
		public function __construct($id, $nome, $usuario, $senha, $email, $avatar, $qtdJogos) {
			$this->id = $id;
			$this->nome = $nome;
			$this->usuario = $usuario;
			$this->senha = $senha;
			$this->email = $email;
			$this->avatar = $avatar;
			$this->qtdJogos = $qtdJogos;
		}
	}