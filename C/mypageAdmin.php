<link rel="stylesheet" href="./css/festivalList.css">

<div id="wrap">
  

    <div>
        <div class="title">
            <h1>FESTIVAL LIST</h1>
            <h2>축제리스트</h2>
        </div>

        
        <p class="btnSmall red" onclick="modalOn()">축제추가</p>
    

        <div id="festivalList">

            
        </div>
    </div>


    <div>
        <div class="title">
            <h1>TAMBANG LIST</h1>
            <h2>탐방리스트</h2>
        </div>
        
        <?php
            include './festivalTambangList.php'
        ?>
    </div>
</div>


<div class="modal" id="festivalModal">
    <div id="form">
        <div class="title">
            <h1>ADD FESTIVAL</h1>
            <h2>축제 추가</h2>
        </div>
        <div>
            <p>이미지</p>
            <input type="file" name="" id="file">
        </div>

        <div>
            <p>축제명</p>
            <input type="text" name="" id="title">
        </div>

        <div>
            <p>축제 기간</p>
            <div>
            <input type="date" name="" id="start_date">
            ~
            <input type="date" name="" id="end_date">
            </div>
        </div>

        <div>
            <p>축제 장소</p>
            <input type="text" name="" id="address">
        </div>

        <p class="btn red" onclick="festivalInsert()">등록</p>
    </div>
</div>

<script src="./js/mypageAdmin.js"></script>