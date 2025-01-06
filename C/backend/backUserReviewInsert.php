<?php

    include './dbconn.php';


    $pk = $_POST["pk"];
    $userId = $_POST["userId"];
    $userId2 = $_POST["userId2"];
    $score = $_POST["score"];


    $sql = "INSERT INTO reviewuser VALUES
    (NULL, $pk, '$userId', '$userId2' , $score)";

    mysqli_query($connect,$sql);
?>