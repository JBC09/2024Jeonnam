<?php

    include './dbconn.php';



    $file_name = $_FILES["file"]["name"];
    $file_tmp_name = $_FILES["file"]["tmp_name"];


    $userId = $_POST["userId"];
    $password = $_POST["password"];
    $name = $_POST["name"];
    $year = $_POST["year"];


    $file_name = $userId.$file_name;    

    move_uploaded_file($file_tmp_name, "../profile/".$file_name);
    
    

    try {
        
        $sql = "INSERT INTO user VALUES('$file_name','$userId'
        ,'$password','$name','$year', 0)";
    
        mysqli_query($connect, $sql);
        echo json_encode(["state"=> "ok"]);
    } catch (\Throwable $th) {
        echo json_encode(["state"=> "no"]);
    }



?>