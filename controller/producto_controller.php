<?php

requiere once __DIR__ . '../models/producto_dao.php'

$function = $_GET['function'];


switch($function){

    case 'agregar';
    agregarproductos();

}

    function agregarproductos(){

        $title = $_POST['title'];
        $permalink = $_POST['permalink'];
        $thumbnail = $_POST['thumbnail'];
        $price = $_POST['price'];
        $resultado = (new Productos())->agregarproductos($title, $permalink, $thumbnail, $price);
        echo_json_encode($resultado);

    }

?>