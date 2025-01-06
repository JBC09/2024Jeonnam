<?php

    session_start();

    unset($_SESSION["userId"]);
    unset($_SESSION["name"]);

    echo "<script>history.go(-1)</script>"

?>  