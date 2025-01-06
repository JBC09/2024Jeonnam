<?php

    include 'dbconn.php';

    $sql;
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $userId = $_POST["userId"];


        $sql = "SELECT b.pk FROM tambanguser a INNER JOIN
        festivalTambang b on a.tambangPk = b.pk WHERE a.userId = '$userId'";
    
        $result = mysqli_query($connect,$sql);
    
        $row = mysqli_fetch_assoc($result);
    
        $pk = $row["pk"];

        
        
        $sql = "SELECT a.*, a.userId as manager, c.name as festivalName, 
        c.pk as ppk, 
        COUNT(d.tambangPk) as count 
        FROM festivalTambang a 
        INNER JOIN festivals c ON a.festivalPk = c.pk AND a.pk = $pk
        LEFT JOIN tambanguser d ON d.tambangPk = a.pk AND d.state = 2
        GROUP BY d.tambangPk, a.pk";

    }


    whiles(mysqli_query($connect,$sql));

?>