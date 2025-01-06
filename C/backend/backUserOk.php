<?php


    include './dbconn.php';


    $pk = $_POST["pk"];


    $sql = "UPDATE tambanguser set state = 2 WHERE
    pk = $pk";

    mysqli_query($connect,$sql);
?>