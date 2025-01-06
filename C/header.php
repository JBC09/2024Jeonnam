<header>
        <a href="./index.php">
            <div class="logo">
                <img src="./images/logo.png" alt="">
                <h1>Universal Festival</h1>
                
            </div>
        </a>
        <nav>
            <a href="#">문화관광축제</a>
            <a href="./">전국 축제</a>
            <a href="./festivalList.php">축제 안내</a>
            <a href="./festivalTambang.php">축제 탐방</a>
        </nav>

        <?php
            session_start();

            $userId = "none";
            $name = "none";
            $grade = "none";
            if(isset($_SESSION["userId"])){

                $userId = $_SESSION["userId"];
                $name = $_SESSION["name"];
                $grade = $_SESSION["grade"];


                echo "<script>
                    let loginCheck = true;
                    let loginUserId = '$userId';
                    let loginGrade = '$grade'
                    let loginName = '$name'
                </script>";
                echo '  <div>
                            <a href="./mypage.php">마이페이지</a>
                            <a href="./logout.php">로그아웃</a>
                        </div>';
            }
            else {
                echo "<script>
                    let loginCheck = false;
                </script>";

                echo '  <div>
                    <a href="./login.php">로그인</a>
                    <a href="./sign.php">회원가입</a>
                </div>';
            }

        ?>
    </header>


    <div class="modal" id="profileModal">
        
    </div>


    <script>
    
        const profileModal = document.querySelector("#profileModal");
        
        profileModal.addEventListener("click",(e)=>{
            profileModal.style.display = "none";
        })
        
        function profileOn(userId,event) {
            event.stopPropagation();
            const newForm = new FormData();

            newForm.append("userId", userId);

            profileModal.style.display = "flex";

            fetch("./backend/backUserProfile.php",{
                method: "POST",
                body: newForm
            })
            .then((res) => res.json())
            .then((data) => {
                let element = data[0];

                profileModal.innerHTML = `
                <div id="form">
                    <div>
                        <img src="./profile/${element.img}" alt="">
                    </div>

                    <div>
                        <p>${element.userId}</p>
                    </div>

                    <div>
                        <p>${element.name}</p>
                    </div>

                    <div>
                        <p>평점: ${element.avg}</p>
                    </div>

                    <div>
                        <p>운영회수: ${element.count1}</p>
                    </div>

                    <div>
                        <p>탐방완료횟수: ${element.count2}</p>
                    </div>


                </div>
            `
            })

            
        }
    </script>