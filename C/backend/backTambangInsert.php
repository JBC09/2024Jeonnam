<?php

    include './dbconn.php';

    $userId = $_POST["userId"];
    $title = $_POST["title"];
    $start_date = $_POST["start_date"];
    $end_date = $_POST["end_date"];
    $person = $_POST["person"];
    $festivalPk = $_POST["festivalPk"];

    $sql = "SELECT * FROM festivalTambang WHERE userId = '$userId' AND state != 3";

    $result = mysqli_query($connect, $sql);

    if(mysqli_num_rows($result) > 0){
        echo json_encode(["state"=>"no"]);
    }
    else {
        $sql = "INSERT INTO festivalTambang VALUES(NULL, 
        '$userId', '$title', '$start_date', '$end_date', $person, $festivalPk, 0)";

        try {
            
            mysqli_query($connect, $sql);

            $pk = mysqli_insert_id($connect);


            $sql = "INSERT INTO tambanguser VALUES(NULL, $pk ,'$userId' ,2)";

            mysqli_query($connect, $sql);
            echo json_encode(["state"=>"ok"]);
        } catch (\Throwable $th) {
            echo json_encode(["state"=>"no"]);
        }
    }
    
?>
