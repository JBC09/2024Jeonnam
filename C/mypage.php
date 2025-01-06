<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/mypage.css">
    <link rel="stylesheet" href="./css/festivalTambang.css">
    
</head>
<body>
    <?php
        include './header.php';

        if($grade == 1) {
            include './mypageAdmin.php';
        }
        else {
            include './mypageGeneral.php';
        }
    ?>
    

    <?php
        include './footer.php';
    ?>

</body>
</html>