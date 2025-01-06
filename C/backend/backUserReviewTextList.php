<?php


    include './dbconn.php';


    $pk = $_POST["pk"];

    $sql = "SELECT a.*, b.*, c.userId as manager FROM review a 
    INNER JOIN user b on a.userId = b.userId
    INNER JOIN festivalTambang c on a.tambangPk = c.pk
    WHERE tambangPk = $pk";

    $result = mysqli_query($connect, $sql);
    whiles($result);
?>