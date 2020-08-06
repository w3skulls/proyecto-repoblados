<?php
echo '<pre>';
require './../db.php';

abstract class CRUD{

	static private $pdo;
	public static function get(){ return self::$pdo = PDOCONN::getInstance(); }


	//Selecciona un usuario por su EMAIL (para ver si existe o no)
	public function getCat(){

		$conn = self::get();
		$st = $conn->prepare("SELECT * FROM categorias".PHP_EOL);
		$st->execute();
		
		$fetch = $st->fetchAll(PDO::FETCH_ASSOC);	
		$rc = $st->rowCount();
		return array('numrows' => $rc, 'data' => $fetch);
    }
}


$cat = CRUD::getCat();

var_dump($cat);
echo '</pre>';

?>

