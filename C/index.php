<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <input type="checkbox" name="" id="modals">
    <div id="modal">
        <div id="content">
            <img src="./images/그룹 1.png" alt="">
            <div id="btnNav">
                <label for="s">
                    <input type="checkbox" name="" id="s">
                    <p>오늘 하루 열지 않기</p>
                </label>

                <label for="modals">
                    <p class="btnSmall">닫기</p>
                </label>
            </div>
        </div>
    </div>


    <!-- 헤더 영역 -->
    <?php
        include './header.php';

    ?>
 

    <div id="wrap">
            <div id="visual">
            <input type="radio" name="slide" id="play" checked>
            <input type="radio" name="slide" id="stop" >


            <div id="slideWrap">
                <div>
                    <h1>첫번째</h1>
                </div>

                <div>
                    <h1>두번째</h1>
                </div>

                <div>
                    <h1>세번째</h1>
                </div>

                <!-- 보여주기용 -->
                <div>
                    <h1>첫번째</h1>
                </div>

                <div>
                    <h1>두번째</h1>
                </div>

                <div>
                    <h1>세번째</h1>
                </div>
            </div>


            <div id="slideBtnWrap">
               
                <label for="stop">STOP</label>
                <label for="play">PLAY</label>
            </div>
        </div>  



        <div id="notice">
            <h1>공지사항</h1>
            
            <p>마우스를 올리면 이미지가 따라오는 기능</p>
        </div>


        <div id="monthFestival">
            <h1>이번달축제안내 영역 무한 슬라이더</h1>

            <input type="radio" name="t" id="t0">
            <input type="radio" name="t" id="t1" checked>
            <input type="radio" name="t" id="t2">
            <input type="radio" name="t" id="t3">
            <input type="radio" name="t" id="t4">
            <input type="radio" name="t" id="t5">
            <input type="radio" name="t" id="t6">

            <div id="hiddenWrap">
                <div id="imgWrap">
                    <div>5</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
            </div>

            <div id="monthBtnNav">
            
                <div>
                    <label for="t4">이전</label>
                    <label for="t6">다음</label>
                </div>

                <div>
                    <label for="t0">이전</label>
                    <label for="t2">다음</label>
                </div>

                <div>
                    <label for="t1">이전</label>
                    <label for="t3">다음</label>
                </div>

                <div>
                    <label for="t2">이전</label>
                    <label for="t4">다음</label>
                </div>

                <div>
                    <label for="t3">이전</label>
                    <label for="t5">다음</label>
                </div>

                <div>
                    <label for="t4">이전</label>
                    <label for="t6">다음</label>
                </div>
               
            </div>
        </div>


        <div id="count">
            <div id="chart1">
                <div>
                    <div class="cData"></div>
                    <p>2021년</p>
                </div>

                <div>
                    <div class="cData"></div>
                    <p>2022년</p>
                </div>

                <div>
                    <div class="cData"></div>
                    <p>2023년</p>
                </div>
            </div>
        
        </div>


       <div id="ww">
            <div id="view360">
                <div id="imgWrap">
                    
                </div>

                <div id="hiddenFigure">
                    <div id="figureWrap">
                        <img src="./images/360 축제 뷰어 서비스/left.jpg" alt="">
                        <img src="./images/360 축제 뷰어 서비스/front.jpg" alt="">
                        <img src="./images/360 축제 뷰어 서비스/right.jpg" alt="">
                        <img src="./images/360 축제 뷰어 서비스/back.jpg" alt="">
                    </div>
                </div>
                
                <div id="time"></div>
                <div id="ho"></div>
                <div id="left"></div>
                <div id="right"></div>
              
            </div>

       </div>

     </div>


     <?php
        include './footer.php';
    ?>
</body>
</html>