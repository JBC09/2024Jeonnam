<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./CSS/sign.css">
</head>
<body>
    
<?php
        include './header.php';
    ?>
    <div id="sign">
        <div id="form">
            <div class="title">
                <h1>SIGN UP</h1>
                <h2>회원가입</h2>
            </div>
            <div>
                <p>프로필 이미지</p>
                <input type="file" name="" id="profile">
            </div>
           
            <div>
                <p>아이디</p>
                <input type="text" name="" id="userId">
            </div>
           
            <div>
                <p>비밀번호</p>
                <input type="password" name="" id="password">
            </div>
            

            <div>
                <p>이름</p>
                <input type="text" name="" id="name">
            </div>

            <div>
                <p>생년월일</p>
                <input type="text" name="" id="year">
            </div>

            <p class="btn red" onclick="go()">회원가입</p>
        </div>
    </div>

    
    <?php
        include './footer.php';
    ?>

    <script src="./js/sign.js"></script>
</body>
</html>