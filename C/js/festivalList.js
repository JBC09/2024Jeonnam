
const festivalList = document.querySelector("#festivalList");

fetch("./backend/backFestivalList.php")
.then((res) => res.json())
.then((data) => {
    
    data.forEach(element => {
        festivalList.innerHTML += `

                <div onclick="go(${element.pk})">
                    <div style="background-Image: url('./images/축제 이미지/${element.image}')">
                    </div>
                    <h3>${element.name}</h3>
                    <p>${element.address}</p>
                    <p>${element.start_date} ~  ${element.end_date}</p>
                </div>
     
        `
    });
})

function go(n) {
    if(!loginCheck) {
        alert("로그인 하지 않으면 접근을 할 수 없습니다.");

        return false;
    }


    location.href = `./festivalDetail.php?id=${n}`;
}


