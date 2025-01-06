<?php

    include './dbconn.php';

    $id = $_POST["id"];

    $sql = "SELECT * from festivals WHERE pk = $id";

    whiles(mysqli_query($connect,$sql));

?>