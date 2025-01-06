<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/festivalTambang.css">
</head>
<body>

    <?php
    
        include './header.php';
    ?>

    <div class="modal" id="tambangModal">
        <div id="form">
            <div class="title">
                <h1>TAMBANG</h1>
                <h2>탐방모집</h2>
            </div>
            <div>
                <p>축제</p>
                <select name="" id="festivalSelect">
                    <option value="" selected>축제를 선택해주세요.</option>
                </select>
            </div>

            <div>
                <p>탐방제목</p>
                <input type="text" name="" id="title" placeholder="제목을 입력해주세요.">
            </div>

            <div>
                <p>날짜</p>
                <div>
                    <input type="date" name="" id="start_date">
                    ~
                    <input type="date" name="" id="end_date">
                </div>
            </div>

            <div>
                <p>모집인원</p>
                <input type="text" name="" id="personNumber" value="2">               
            </div>

            <p class="btn red" onclick="go()">모집하기</p>
        </div>
    </div>

    <div id="wrap">
    
           
     
        <div id="festivalTambang">
                <div class="title">
                    <h1>FESTIVAL TAMBANG</h1>
                    <h2>축제탐방</h2>
                </div>
                <p class="btnSmall red" onclick="tambangOn()">탐방모집</p>
                <?php
                    include './festivalTambangList.php'
                ?>
            </div>
        

       <div>
            <div class="title">
                <h1>TAMBANG REVIEW</h1>
                <h2>탐방후기</h2>
            </div>
            
            <div id="festivalReviewList">

            </div>
       </div>

    </div>


    
    <?php
        include './footer.php';
    ?>
    <script src="./js/festivalTambang.js"></script>
</body>
</html>