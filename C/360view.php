<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/360view.css">
</head>
<body>
    <div id="wrap">
       

        <div id="box">
            <img src="./파노라마/2024 웰컴대학로/back.jpg" alt="">
            <img src="./파노라마/2024 웰컴대학로/bottom.jpg" alt="">
            <img src="./파노라마/2024 웰컴대학로/front.jpg" alt="">
    
            <img src="./파노라마/2024 웰컴대학로/right.jpg" alt="">
            <img src="./파노라마/2024 웰컴대학로/left.jpg" alt="">
            <img src="./파노라마/2024 웰컴대학로/top.jpg" alt="">
        </div>

        <div id="btnNav">
            <p onclick="mapOpen()">지도</p>
            <p onclick="zoomIn()">확대</p>
            <p onclick="zoomOut()">축소</p>
            <p onclick="FullScreen()">전체화면
            <p onclick="locLeft()">왼쪽</p>
            <p onclick="locRight()">오른쪽</p>
            <p onclick="locTop()">위</p>
            <p onclick="locBottom()">아래</p>
        </div>
    </div>


    <div id="map">
        <div id="wraps">
            <h2>지도</h2>
            <svg id="svg" width="700" height="600" viewport="0 0 700 600" xmlns="http://www.w3.org/2000/svg">

            </svg>  
            <p onclick="mapClose()" id="close">닫기</p>
       
        </div>
 
    </div>

    <script src="./js/360view.js"></script>
</body>
</html>