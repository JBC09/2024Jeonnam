<?php

    $connect = mysqli_connect("localhost","root", NULL, "2024전남");

    
    
    function whiles($data){
        $array = array();

        while($row = mysqli_fetch_assoc($data)){
            array_push($array,$row);
        }

        echo json_encode($array);
    }

?>