<?php

    include './dbconn.php';

    $fileName = $_FILES["file"]["name"];
    $fileTmpName = $_FILES["file"]["tmp_name"];


    $title = $_POST["title"];
    $start_date = $_POST["start_date"];
    $end_date = $_POST["end_date"];
    $address = $_POST["address"];

    
    $fileName = $title.$fileName;

    move_uploaded_file($fileTmpName, "../images/축제 이미지/".$fileName);

    $sql = "INSERT INTO festivals VALUES(
    NULL,'$title', '$fileName', '$start_date', '$end_date','$address')";


    mysqli_query($connect,$sql);

?>