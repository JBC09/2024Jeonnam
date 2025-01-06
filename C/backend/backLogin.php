<?php


    include './dbconn.php';


    $userId = $_POST["userId"];
    $password = $_POST["password"];


    $sql = "SELECT * FROM user WHERE userId = '$userId' AND 
    password = '$password'";

    $result = mysqli_query($connect,$sql);

    if(mysqli_num_rows($result) > 0) {

        $row = mysqli_fetch_assoc($result);

        session_start();

        $_SESSION["userId"] = $userId;
        $_SESSION["name"] = $row["name"];
        $_SESSION["grade"] = $row["grade"];

        echo json_encode(["state"=> "ok"]);
    }
    else {
        echo json_encode(["state"=> "no"]);
    }

?>