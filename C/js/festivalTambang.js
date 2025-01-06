

let db;
const festivalSelect = document.querySelector("#festivalSelect");
const start_date = document.querySelector("#start_date");
const end_date = document.querySelector("#end_date");
const personNumber = document.querySelector("#personNumber");
const title = document.querySelector("#title");
const tambangModal = document.querySelector("#tambangModal");
const modals = document.querySelectorAll(".modal");


fetch("./backend/backFestivalList.php")
.then((res) => res.json())
.then((data) => {
    db = data;

    data.forEach((element,idx) => {
        festivalSelect.innerHTML += `
            <option value="${idx}" >${element.name}</option>
        `   
    });
})  


function dateCheck(element) {

    if(festivalSelect.value == "") {
        alert("축제를 먼저 선택해주세야");
        return false;
    }
    let idx = festivalSelect.value;

    let elStart = new Date(db[idx].start_date);
    let elEnd = new Date(db[idx].end_date);

    if(new Date(element.value) >= elStart && new Date(element.value) <= elEnd){
        console.log("통과");
        return true;
    }
    else {
        element.value = "";
        alert("해당 축제기간이 아닙니다");
        return false;
    }
}


start_date.addEventListener("change",(e)=>{
    dateCheck(start_date);
})

end_date.addEventListener("change",(e)=>{
    dateCheck(end_date)
})

personNumber.addEventListener("keyup",(e)=>{
    if(Number(personNumber.value) < 2){
        personNumber.value = 2;
        alert("최소인원은 2명 이상이어야 합니다");
    }
})


function go(){
   if(dateCheck(start_date) && dateCheck(end_date) && Number(personNumber.value) >= 2){
        let idx = festivalSelect.value;


        let form = new FormData();

        form.append("userId", loginUserId);
        form.append("title", title.value);
        form.append("start_date", start_date.value);
        form.append("end_date", end_date.value);
        form.append("person", personNumber.value);
        form.append("festivalPk", db[idx].pk);


        fetch("./backend/backTambangInsert.php",{
            method:"POST",
            body:form
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })

        tambangModal.style.display = "none";

   }
   else {
        alert("입력칸을 올바르게 채워주세요");
   }
}


function tambangOn() {
    if(!loginCheck){
        alert("로그인인 되어야합니다");
        return false;
    }   
    tambangModal.style.display = "flex";
}



const list = document.querySelector("#tambangList");

fetch("./backend/backTambangList.php")
.then((res)=> res.json())
.then((data) => {

    
    data.forEach(element => {
        list.innerHTML +=    `  
            <div class="tambangItem" id=${element.ppk}>
                <div class="users">
                    <img  onclick="profileOn('${element.userId}',event)" src="./profile/${element.img}" alt=""> 
                    <div>
                        <h3  onclick="profileOn('${element.userId}',event)" >${element.name}</h3> 
                        <h3 onclick="profileOn('${element.userId}',event)" >${element.userId}</h3>
                    </div>
                </div>

                <div class="content">
                    <h3>${element.title}</h3>
                    <h3>${element.festivalName}</h3>
                    <p>${element.start_date} ~ ${element.end_date}</p>
                    <p>현재인원 ${element.count}명</p>
                    <p>최대인원: ${element.person}명</p>
                </div>

                <p class="btn red" onclick="join(${element.pk}, event)">가입신청</p>
            </div>
        `
    });

    const tambangItem = document.querySelectorAll(".tambangItem");

    tambangItem.forEach(element => {
        element.addEventListener("click", (e) => {
            location.href = `./festivalDetail.php?id=${element.id}`;
        })
    });
})


function join(n,event) {
    event.stopPropagation();

    if(!loginCheck) {
        alert("로그인을 먼저 해주세요.");
        return false;
    }

    const form = new FormData();

    form.append("userId", loginUserId);
    form.append("tambangPk", n);


    fetch("./backend/backTambangUserInsert.php",{
        method:"POST",
        body: form
    })
    .then((res) => res.json())
    .then((data) => {

        if(data["state"] == "max"){
            alert("이미 최대인원이다냥");
        }   
        else if(data["state"] == "no"){
            alert("이미 신청되었거나, 가입되어있다냥");
        }
        else {
            alert("가입신청이 완료되었다냥")
        }
    })
}



const festivalReviewList = document.querySelector("#festivalReviewList");

fetch("./backend/backUserReviewList.php")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.forEach(element => {
        festivalReviewList.innerHTML += `
            <div onclick="reviewDetailGo(${element.tambangPk})">
                <img src="./images/축제 이미지/${element.image}" alt="">
                <h1>${element.title}</h1>
                <p>${element.name}</p>
                <p>모집인원 ${element.count}명</p>
                <p>${element.avg}점</p>
            </div>
        `
    });
})

function reviewDetailGo(n) {
    location.href = `./reviewDetail.php?id=${n}`;
    
}