const festivalReviewList = document.querySelector("#festivalReviewList");
const userList = document.querySelector("#userList");

const path = (new URL(location.href)).searchParams.get("id");

const form = new FormData();

form.append("pk", path);



fetch("./backend/backUserReviewList.php",{
    method:"POST",
    body:form
})
.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.forEach(element => {
        festivalReviewList.innerHTML += `
            <div onclick="reviewDetailGo(${element.tambangPk})">
                <img src="./images/축제 이미지/${element.image}" alt="">
                <div>
                    <p>제목: ${element.title}</p>
                    <p>코스: ${element.name}</p>
                    <p>모집인원: ${element.count}명</p>
                    <p>후기: ${element.avg}점</p>
                </div>
            </div>
        `
    });
})


fetch("./backend/backUserReviewTextList.php",{
    method:"POST",
    body:form
})
.then((res) => res.json())
.then((data) => {

    
    let arr = "";
    let brr = "";

    data.forEach(element => {
        if(element.userId == element.manager){
            arr += `
                <div>
                    <img onclick="profileOn('${element.userId}',event)" src="./profile/${element.img}" alt="">
                    <h3>팀방운영자</h3>
                    <p onclick="profileOn('${element.userId}',event)">${element.name}</p>
                    <p onclick="profileOn('${element.userId}',event)">${element.userId}</p>
                    <p>"${element.review}"</p>
                    <p>${element.tambangScore}점
                        
                    </p>
                </div>
            `
        }
        else {
            brr  += `
            <div>
                <img onclick="profileOn('${element.userId}',event)" src="./profile/${element.img}" alt="">
                <p onclick="profileOn('${element.userId}',event)">${element.name}</p>
                <p onclick="profileOn('${element.userId}',event)">${element.userId}</p>
                <p>"${element.review}"</p>
                <p>${element.tambangScore}점</p>
            </div>
        `
        }
    });

    arr+= brr;
    userList.innerHTML = arr;
    console.log(data);
})

function reviewDetailGo(n) {
    location.href = `./reviewDetail.php?id=${n}`;
    
}

