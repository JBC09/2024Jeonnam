<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    
<?php
        include './header.php';
    ?>

    <div id="sign">
        <div id="form">
            <div class="title">
                <h1>LOGIN</h1>
                <h2>로그인</h2>
            </div>
            <div>
                <p>아이디</p>
                <input type="text" name="" id="userId">
            </div>

            <div>
                <p>비밀번호</p>
                <input type="text" name="" id="password">
            </div>

            <p class="btn red" onclick="go()">로그인</p>
        </div>
    </div>

    
    <?php
        include './footer.php';
    ?>
<script src="./js/login.js"></script>
</body>
</html>