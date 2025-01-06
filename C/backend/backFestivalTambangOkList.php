<?php

    include './dbconn.php';

    $userId = $_POST["userId"];

    $sql = "SELECT a.image, a.name as festivalName, b.*, count(d.tambangPk) 
    as count FROM festivals a INNER JOIN festivalTambang b on a.pk = b.festivalPk
    INNER JOIN tambanguser c on b.pk = c.tambangPk
     left JOIN review d on b.pk = d.tambangPk AND d.userId = '$userId' WHERE b.state = 3 
     AND (b.userId = '$userId' OR c.userId = '$userId') group by d.tambangPk, d.userId  ORDER BY b.end_date desc";


    $result = mysqli_query($connect, $sql);

    whiles($result);
?>