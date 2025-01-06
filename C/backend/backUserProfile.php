<?php


    include './dbconn.php';


    $userId = $_POST["userId"];


    $sql = "SELECT a.*, COALESCE(avg(b.score),0) as avg, count(c.pk) as count1, count(d.pk) as count2 FROM user a LEFT JOIN 
    reviewuser b on a.userId = b.userId2 LEFT JOIN 
    festivalTambang c on a.userId = c.userId AND c.state = 2 LEFT JOIN
    tambanguser d on d.userId = a.userId AND d.state = 2 WHERE a.userId = '$userId' group by a.userId";


    $result = mysqli_query($connect,$sql);


    whiles($result);
?>