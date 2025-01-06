<?php

    include './dbconn.php';

    $tambangScore = $_POST["tambangScore"];
    $review = $_POST["review"];
    $tambangPk = $_POST["pk"];
    $userId = $_POST["userId"];


    $sql = "INSERT INTO review VALUES(NULL, $tambangPk,
    $tambangScore, '$review','$userId')";

    mysqli_query($connect, $sql);


?>