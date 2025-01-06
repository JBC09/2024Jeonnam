<?php


    include './dbconn.php';


    $sql = "SELECT * FROM festivals ORDER BY end_date desc";

    $result = mysqli_query($connect, $sql);

    whiles($result);
?>