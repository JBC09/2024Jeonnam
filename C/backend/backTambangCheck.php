<?php
    include './dbconn.php';


    $userId = $_POST["userId"];

    $sql = "SELECT * FROM festivalTambang WHERE userId = '$userId' AND state = 0";

    $result = mysqli_query($connect, $sql);

    $sql = "SELECT * FROM tambangUser WHERE userId = '$userId' AND state = 0";

    $result2 = mysqli_query($connect, $sql);

    if(mysqli_num_rows($result) > 0){
        echo json_encode(["state" => "t1"]);
    }
    else if(mysqli_num_rows($result2) > 0) {
        echo json_encode(["state" => "t2"]);
    }
    else {
        echo json_encode(["state" => "t3"]);
    }
?>