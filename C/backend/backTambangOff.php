<?php


    include './dbconn.php';

    $pk = $_POST["pk"];

    $sql = "UPDATE festivalTambang set state = 1 WHERE pk = $pk";

    mysqli_query($connect, $sql);
?>