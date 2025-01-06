<?php

    include './dbconn.php';


    $userId = $_POST["userId"];
    $pk = $_POST["tambangPk"];


 
    $date = date("y-m-d");

    $sql = "SELECT count(b.tambangPk) FROM festivalTambang a left JOIN tambanguser b
    on a.pk = b.tambangPk where a.start_date > $date AND (a.userId = '$userId' || b.userId = '$userId') AND b.state != 3 group by b.tambangPk, a.person having count(b.tambangPk) != a.person";

    $result2 = mysqli_query($connect,$sql);

    if(mysqli_num_rows($result2) > 0){
        echo json_encode(["state"=>"no"]);
    }
    else{

        $sql = "SELECT count(a.tambangPk) as count, b.person FROM tambanguser a
        right JOIN festivalTambang b on a.tambangPk = b.pk  where b.pk = $pk
        group by a.tambangPk";

        $result = mysqli_query($connect,$sql);

        $row = mysqli_fetch_assoc($result);

        $count = $row["count"];
        $countMax = $row["person"];

        if($count == $countMax){
            echo json_encode(["state"=>$count]);
        }
        else {
            $sql = "INSERT INTO tambanguser VALUES(NULL, $pk ,'$userId' ,0)";

            mysqli_query($connect,$sql);
    
            echo json_encode(["state"=>"ok"]);
        }
    }

?>