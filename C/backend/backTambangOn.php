<?php


    include './dbconn.php';

    $pk = $_POST["pk"];

    
    $date = date("y-m-d");
    $sql = "DELETE from festivalTambang WHERE pk = $pk AND end_date <= '$date'"; 
    mysqli_query($connect, $sql);


    $sql = "UPDATE festivalTambang set state = 2 WHERE pk = $pk";

    mysqli_query($connect, $sql);
?>