<?php

    include './dbconn.php';


    $userId = $_POST["userId"];

    $sql = "SELECT b.pk FROM tambanguser a INNER JOIN
    festivalTambang b on a.tambangPk = b.pk WHERE a.userId = '$userId'";

    $result = mysqli_query($connect,$sql);

    $row = mysqli_fetch_assoc($result);

    $pk = $row["pk"];

    $sql = "SELECT a.*, c.*, a.userId as manager FROM festivalTambang a inner join
    tambanguser b on a.pk = b.tambangPk AND a.pk = $pk AND b.state = 2  inner join 
    user c on c.userId = b.userId";
    
    $result = mysqli_query($connect, $sql);

    whiles($result);

?>