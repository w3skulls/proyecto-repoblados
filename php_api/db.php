<?php

include_once 'config.php';


class PDOCONN extends PDO{

	static protected $_instance;

	public function __construct(){
		return parent::__construct(DSN, DB_USERNAME, DB_PASSWORD);
	}

	static public function getInstance(){
		if(!isset(self::$_instance)){
			self::$_instance = new self(DSN, DB_USERNAME, DB_PASSWORD);
        }
        echo "Conectado a Base de Datos<br/>";
		return self::$_instance;
	}

	public function __destruct(){}
}




?>