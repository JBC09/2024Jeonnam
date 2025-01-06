<?php

    include 'dbconn.php';

    $sql;
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $pk = $_POST["id"];
        
        $sql = "SELECT a.*, b.*, c.name as festivalName, 
        c.pk as ppk,
        count(CASE WHEN d.state = 2 THEN d.tambangPk ELSE NULL END) as count FROM festivalTambang a inner join 
        user b on a.userId = b.userId AND a.state != 3 inner join festivals c on 
        a.festivalPk = c.pk AND c.pk = $pk left join 
        tambanguser d on d.tambangPk = a.pk  group by d.tambangPk";
    }
    else {
        $sql = "SELECT a.*, b.*, c.name as festivalName, 
        c.pk as ppk,
        count(CASE WHEN d.state = 2 THEN d.tambangPk ELSE NULL END  ) as count FROM festivalTambang a inner join 
        user b on a.userId = b.userId AND a.state != 3 inner join 
        festivals c on a.festivalPk = c.pk left join 
        tambanguser d on d.tambangPk = a.pk group by d.tambangPk";
    }   

    whiles(mysqli_query($connect,$sql));

?>