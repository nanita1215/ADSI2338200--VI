<?php
if($_POST){
    $nombre = $_POST['name'];
    $fecha = $_POST['fecha'] ;
    function obtener_edad_segun_fecha($fecha_nacimiento)
    {
        $nacimiento = new DateTime($fecha_nacimiento);
        $ahora = new DateTime(date("Y-m-d"));
        $diferencia = $ahora->diff($nacimiento);
        return $diferencia->format("%y");
    }

    $edad = obtener_edad_segun_fecha($fecha);

    echo "Su nombre es: " . $nombre . "<br>" . "Y tiene: " . $edad . " años ";
}