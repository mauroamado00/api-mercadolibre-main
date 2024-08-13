<?php

    require_once __DIR__ . '../conexion/conexion.php';

class productos{


    public function agregarproductos($title, $permalink, $thumbnail, $price){


        $sql = "INSERT INTO productos(title,permalink,thumbnail,price) VALUES ('$title','$permalink', $thumbnail, $price)";
        $connection = $connection();
        $respuesta = $connection->query($sql);
        $id_producto = $connection->insert_id;

    }

?>