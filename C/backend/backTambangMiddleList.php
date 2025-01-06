<?php

    include 'dbconn.php';

    $sql;
   
    $sql = "SELECT a.*, b.*, c.name as festivalName, 
    c.pk as ppk,
    count(CASE WHEN d.state = 2 THEN d.tambangPk ELSE NULL END  ) as count FROM festivalTambang a inner join 
    user b on a.userId = b.userId  inner join 
    festivals c on a.festivalPk = c.pk left join 
    tambanguser d on d.tambangPk = a.pk group by d.tambangPk";
 
    whiles(mysqli_query($connect,$sql));

?>