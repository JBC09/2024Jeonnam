<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/festival.css">
</head>
<body>

   
<?php
        include './header.php'
    ?>
    
   <div id="allWrap">   

        <div id="sideBar">
        
          

            <img id="sideBtn" src="./images/leftArrow.png" alt="">

            <div>
                <input type="text" name="" id="search" placeholder="축제명, 축제 장소, 연락처">
                <p class="btn actives" onclick="searchs()">검색</p>
            </div>

            <div>
                <p class="btn cate actives">전체</p>
                <p class="btn cate">경험</p>
                <p class="btn cate">연인과 함께</p>
                <p class="btn cate">여행</p>
                <p class="btn cate">자연</p>
                <p class="btn cate">가족과 함께</p>
            </div>

            <div id="dataWrap"></div>
        </div>

        <div class="title">
            <h1>ALL FESTIVALS</h1>
            <h2>전국축제</h2>
        </div>

        <div id="wraps">
            <svg id="svg"  width="700" hight="600" viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle" cx="50" cy="50" r="0" />
            </svg>

            <h1 id="title"></h1>

            <div id="redPointer"></div>
        </div>
   </div>
    
   <?php
        include './footer.php'
    ?>
    

    <script src="./js/festival.js"></script>
</body>
</html>