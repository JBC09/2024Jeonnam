const userId = document.querySelector("#userId");
const password = document.querySelector("#password");



function go() {

    const form = new FormData();

    form.append("userId", userId.value);
    form.append("password", password.value);



    fetch("./backend/backLogin.php", {
        method: "POST",
        body: form
    }) 
    .then((res) => res.json())
    .then((data) => {
        if(data["state"] == "ok"){
            alert("로그인 성공");
            location.href = "./index.php";
        }
        else {
            alert("아이디나 비밀번호 오류");
        }
    })
}