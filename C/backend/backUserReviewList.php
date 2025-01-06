<?php

    include './dbconn.php';

    
    $sql;

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $pk = $_POST["pk"];

        $sql = "SELECT b.image, b.name, a.*, c.* ,avg(c.tambangScore) as avg, count(DISTINCT d.pk) as count
        FROM festivalTambang a INNER JOIN festivals
      b on a.festivalPk = b.pk AND a.state = 3 AND a.pk = $pk left JOIN review c on c.tambangPk = a.pk
      left JOIN tambanguser d on d.tambangPk = a.pk group by a.pk";
    }
    else {
        $sql = "SELECT b.image, b.name, a.*, c.* ,avg(c.tambangScore) as avg, count(DISTINCT d.pk) as count
      FROM festivalTambang a INNER JOIN festivals
    b on a.festivalPk = b.pk AND a.state = 3 left JOIN review c on c.tambangPk = a.pk
    left JOIN tambanguser d on d.tambangPk = a.pk group by a.pk";

    }

    $result =  mysqli_query($connect,$sql);

    whiles($result)
?>