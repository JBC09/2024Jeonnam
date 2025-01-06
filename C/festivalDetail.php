<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/festivalDetail.css">
</head>
<body>
    <?php
        include './header.php';
    ?>


    <div id="wrap">
         <div id="festivalDetail">
        
        </div>
   
    
        
        <div>

   
            <div class="title">
                <h1>FESTIVAL TAMBANG</h1>
                <h2>축제 탐방</h2>
            </div>
            <?php
                include './festivalTambangList.php'
            ?>
        </div>
     </div>


     <?php
        include './footer.php';
    ?>
    <script src="./js/festivalDetail.js"></script>
</body>
</html>