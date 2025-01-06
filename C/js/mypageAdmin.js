
const festivalList = document.querySelector("#festivalList");
const festivalModal = document.querySelector("#festivalModal");
const modalForm = document.querySelector("#form");

//form element
const file = document.querySelector("#file");
const title = document.querySelector("#title");
const start_date = document.querySelector("#start_date");
const end_date = document.querySelector("#end_date");
const address = document.querySelector("#address");


fetch("./backend/backFestivalList.php")
    .then((res) => res.json())
    .then((data) => {

        data.forEach(element => {
            festivalList.innerHTML += `

                <div onclick="go(${element.pk})">
                    <img src="./images/축제 이미지/${element.image}" alt="">
                    <h3>${element.name}</h3>
                    <p>${element.address}</p>
                    <p>${element.start_date} ~  ${element.end_date}</p>
                </div>
     
        `
        });
    })

function go(n) {
    if (!loginCheck) {
        alert("로그인 하지 않으면 접근을 할 수 없습니다.");

        return false;
    }


    location.href = `./festivalDetail.php?id=${n}`;
}


modalForm.addEventListener("click", (e) => {
    e.stopPropagation();
})

festivalModal.addEventListener("click", () => {
    festivalModal.style.display = "none";
})

function modalOn() {
    festivalModal.style.display = "flex";
}

function festivalInsert() {
    const newForm = new FormData();


    newForm.append("file", file.files[0]);
    newForm.append("title", title.value);
    newForm.append("start_date", start_date.value);
    newForm.append("end_date", end_date.value);
    newForm.append("address", address.value);

    fetch("./backend/backFestivalInsert.php", {
        method: "POST",
        body: newForm
    })

    festivalModal.style.display = "none";
}




const tambangList = document.querySelector("#tambangList");

fetch("./backend/backTambangMiddleList.php")
    .then((res) => res.json())
    .then((data) => {
       
        data.forEach(element => {
            let div = ""

            if(element.state == 3){
                div = `
                <div class="users">
                    <h4 style="color:blue">탐방완료되었습니다.</h4>
                </div>
                `
            }   
            else if(element.state == 2) {
                div = `
                <div class="users">
                    <h4 style="color:green">수락되었습니다.</h4>
                </div>
                `
            }
            else if(element.state == 1){
                div = `
                <div class="users">
                    <h4  style="color:red">거절되었습니다.</h4>
                </div>
                `
            }
            else {
                div = `
                <div class="users">
                    <p class="btnSmall green" onclick="tambangOk(${element.pk})">수락</p>
                    <p class="btnSmall red" onclick="tambangNo(${element.pk})">거절</p>
                </div>
                `
            }

            tambangList.innerHTML += `  
            <div class="tambangItem" id=${element.ppk}>
                <div class="users">
                    <img src="./profile/${element.img}" alt="">  
                    <div>
                        <h3>${element.name}</h3> 
                        <h3>${element.userId}</h3>
                    </div>
                </div>

                <div class="content">
                    <h3>${element.title}</h3>
                    <h3>${element.festivalName}</h3>
                    <p>${element.start_date} ~ ${element.end_date}</p>
                    <p>최대인원: ${element.person}명</p>
                      ${div}
                </div>

              
            </div>
        `
        });
    })


    function tambangOk(n) {
        const newForm = new FormData();
        
        newForm.append("pk", n);

        fetch("./backend/backTambangOn.php",{
            method:"POST",
            body:newForm
        });
    }

    
    function tambangNo(n) {
        const newForm = new FormData();
        
        newForm.append("pk", n);

        fetch("./backend/backTambangOff.php",{
            method:"POST",
            body:newForm
        });
    }