const path = new URL((location.href)).searchParams;
const festivalDetail = document.querySelector("#festivalDetail");

let form = new FormData();

form.append("id", path.get("id"));
fetch("./backend/backFestivalDetail.php",{
    method: "POST",
    body: form
})
.then((res) => res.json())
.then((data) => {
    let element = data[0];

    festivalDetail.innerHTML = `
        <div>
            <img src="./images/축제 이미지/${element.image}" alt="">
            <div>
                <p>코스: ${element.name}</p>
                <p>주소: ${element.address}</p>
                <p>날짜: ${element.start_date} ~  ${element.end_date}</p>
            </div>  
        </div>
    `
})




const list = document.querySelector("#tambangList");



fetch("./backend/backTambangList.php",{
    method: "POST",
    body:form,
})
.then((res)=> res.json())
.then((data) => {
    
    
    data.forEach(element => {
        list.innerHTML +=    `  
            <div >
                <div class="users">
                    <img onclick="profileOn('${element.userId}', event)" src="./profile/${element.img}" alt=""> 
                    <div>
                        <h3 onclick="profileOn('${element.userId}', event)" >${element.name}</h3> 
                        <h3 onclick="profileOn('${element.userId}', event)" >${element.userId}</h3>
                    </div>
                </div>

                <div class="content">
                    <h3>${element.title}</h3>
                    <h3>${element.festivalName}</h3>
                    <p>${element.start_date} ~ ${element.end_date}</p>
                    <p>현재인원 ${element.count}명</p>
                    <p>최대인원: ${element.person}명</p>
                </div>

                <p class="btn red" onclick="join(${element.pk})">가입신청</p>
            </div>
        `
    });

    
})



function join(n) {
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

        if(data["state"] == "no"){
            alert("이미 신청되었거나, 가입되어있다냥");
        }
        else {
            alert("가입신청이 완료되었다냥")
        }
    })
}