

if(!loginCheck){
    alert("로그인 후 사용가능합니다");
    location.href = "./index.php";
}

const form = new FormData();
const tabs1 = document.querySelector("#tabs1");

let selectPk;


let type = "일반회원"

form.append("userId", loginUserId);

fetch("./backend/backUserCheck.php",{
    method: "POST",
    body: form
})
.then((res) => res.json())
.then((data) => {
    if(data["state"] == "manager"){
        type = "운영자"

        tab.innerHTML += `
            <p class="tabs">멤버 목록</p>
            <p class="tabs">신청 목록</p>
        `
    }
    else if(data["state"] == "member"){
        type = "멤버"
        tab.innerHTML += `
            <p class="tabs">멤버 목록</p>
        `
    }
    else {

    }

    const tabs = document.querySelectorAll(".tabs");
    const contents = document.querySelectorAll(".contents");

    tabs.forEach((element,idx) => {
        element.addEventListener("click",()=>{
            
            tabs.forEach(element2 => {
                element2.classList.remove("active");
            });


            element.classList.add("active");

            contents.forEach(element2 => {
                element2.classList.remove("active");
            }); 

            document.querySelector(`#tabs${idx+1}`).classList.add("active");                
        })
    });


    if(type == "일반회원") {
        
        fetch("./backend/backTambangCheck.php",{
            method: "POST",
            body: form
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data["state"] == "t1"){
                tabs1.textContent = "신청하신 축제 탐방 모집을 관리자가 검토 중입니다."
            }
            else if(data["state"] == "t2") {
                tabs1.textContent = "신청하신 축제 탐방 가입을 운영자가 검토 중입니다."
            }
            else if(data["state"] == "t3") {
                tabs1.textContent = "활동 중인 축제 탐방이 존재하지 않습니다."
            }
        })
    }
    else {
        managerMemeberList();
        userList();
        
    }

    if(type == "운영자"){
        noAppUserList();
    }
})


function managerMemeberList() {
    fetch("./backend/backTambangMypageList.php",{
        method: "POST",
        body: form
    })
    .then((res) => res.json())
    .then((data) => {
        const today = new Date();

        let element = data[0];
   
        if(element.manager == loginUserId && new Date(element.start_date) >= today) {
        
            tabs1.innerHTML += `
            <div onclick="detail(${element.ppk})"}>
                <p>제목: ${element.title}<p/>
                <p>축제: ${element.festivalName}<p/>
                <p>날짜: ${element.start_date} ~ ${element.end_date}<p/>
                <p>모집인원: ${element.count}명<p/>
                <p>모집인원: ${element.person}명<p/>
                <p class="btnSmall green" onclick="tambangOk(${element.pk},event)">탐방완료</p>
            </div>
            `
        }
        else {

            tabs1.innerHTML += `
            <div onclick="detail(${element.ppk})"}>
                <p>제목: ${element.title}<p/>
                <p>축제: ${element.festivalName}<p/>
                <p>날짜: ${element.start_date} ~ ${element.end_date}<p/>
                <p>모집인원: ${element.count}명<p/>
                <p>모집인원: ${element.person}명<p/>
            
            </div>
            `
        }           
        });

}


const review = document.querySelector("#review");
const modalForm = document.querySelector("#review #form");
const memberList = document.querySelector("#memberList");

function detail(n) {
    location.href = `./festivalDetail.php?id=${n}`;
}


function tambangOk(n,event) {
    event.stopPropagation();    

    review.style.display = "flex";

    selectPk = n;

    const newForm = new FormData();
    

    newForm.append("pk",n);

    fetch("./backend/backTambangOk.php", {
        method: "POST",
        body: newForm
    })
}

review.addEventListener("click",(e)=>{
    review.style.display = "none";
})

modalForm.addEventListener("click",(e)=>{
    e.stopPropagation();
})

function reviewGo() {


    const tam1 = document.querySelector("#tam1");
    const tam2 = document.querySelector("#tam2");

    const newform1 = new FormData();



    newform1.append("userId", loginUserId);
    newform1.append("tambangScore", tam1.value);
    newform1.append("review", tam2.value);
    newform1.append("pk", selectPk);

    fetch("./backend/backReviewInsert.php", {
        method:"POST",
        body: newform1
    })



    const users = document.querySelectorAll(`.${loginUserId}`);

    users.forEach(element => {
        const newform2 = new FormData();

        newform2.append("userId",loginUserId);
        newform2.append("userId2", element.id);
        newform2.append("score", element.value);
        newform2.append("pk", selectPk);


        fetch("./backend/backUserReviewInsert.php", {
            method:"POST",
            body: newform2
        })
    });


    review.style.display = "none";
}


function userList(){
    const tabs2 = document.querySelector("#tabs2");

    fetch("./backend/backendUserList.php", {
        method: "POST",
        body: form
    })
    .then((res) => res.json())
    .then((data) => {

        let arr = "";
        let brr = "";

        let crr = "";
        let drr = "";


       for(const element of data){
            if(element.userId == loginUserId) continue;

            if(element.userId != element.manager){
                arr += `
                    <div>
                        <img src="./profile/${element.img}" alt="">
                        <p>${element.userId}</p>
                        <p>${element.name}</p>
                    </div>
                `

                crr += `
                    <div>
                        <img src="./profile/${element.img}" alt="">
                        <p>${element.userId}</p>
                        <p>${element.name}</p>
                        <p> <input type="tel" class="${loginUserId}" id="${element.userId}" name="" ></p>
                    </div>
                `
            }
            else {
                brr = `
                    <div>
                        <img src="./profile/${element.img}" alt="">
                        <h3>운영자</h3>
                        <p>${element.userId}</p>
                        <p>${element.name}</p>
                    </div>
                `
                drr += `
                    <div>
                        <img src="./profile/${element.img}" alt="">
                        <h3>운영자</h3>
                        <p>${element.userId}</p>
                        <p>${element.name}</p>
                        <p> <input type="tel" class="${loginUserId}" id="${element.userId}" name="" ></p>
                    </div>
                `
            }
       }

       brr += arr;
       drr += crr;
       tabs2.innerHTML = brr;  
       memberList.innerHTML = drr;
    })

}



function noAppUserList() {
    const tabs3 = document.querySelector("#tabs3");

    fetch("./backend/backUserMiddleList.php", {
        method: "POST",
        body: form
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

       for(const element of data){

            tabs3.innerHTML += `
                <div>
                    <img src="./profile/${element.img}" alt="">
                    <p>${element.userId}</p>
                    <p>${element.name}</p>
                    
                  
                    <p class="btnSmall green" onclick="userOk(${element.tamPk})">수락</p>
                    <p class="btnSmall red" onclick="userNo(${element.tamPk})">거절</p>
                    
                </div>
            `
       }
    })

}



function userOk(n) {
    const newForm = new FormData();

    newForm.append("pk",n);

    fetch("./backend/backUserOk.php",{
        method:"POST",
        body: newForm
    })
    
    location.reload(true);
}

function userNo(n) {
    const newForm = new FormData();

    newForm.append("pk",n);

    fetch("./backend/backUserNo.php",{
        method:"POST",
        body: newForm
    })

    location.reload(true);    
}


reviewList();

function reviewList() {
    const tambangReviewList = document.querySelector("#tambangReviewList");

    fetch("./backend/backFestivalTambangOkList.php",{
        method:"POST",
        body:form
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(element => {
            let btn = "";

            if(element.count == 0){
                btn = `<p class='btnSmall green' onclick="reviewOn(1,${element.pk})">후기작성하기</p>`
            }
            else {
                btn = `<p class='btnSmall green' onclick="reviewOn(2,${element.pk})">후기보기</p>`
            }

            tambangReviewList.innerHTML += `
                <div>
                    <img src="./images/축제 이미지/${element.image}" alt="">
                    <p>${element.title}</p>
                    <p>${element.festivalName}</p>
                    <p>${element.start_date} ~ ${element.end_date}<p/>
                    ${btn}
                </div>
                `
        });
    })
}


function reviewOn(n, pk) {

    if(n == 1){
        review.style.display = "flex";

        selectPk = pk;
    }
    else {
        location.href = `./reviewDetail.php?id=${pk}`;
    }

}


