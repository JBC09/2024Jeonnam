const profile = document.querySelector("#profile");
const userId = document.querySelector("#userId");
const password = document.querySelector("#password");
const name = document.querySelector("#name");
const year = document.querySelector("#year");




function go() {

    const userRegex = /^[^A-Za-z\d]{0}(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
    const passRegex = /^[^A-Za-z\d~!@*?]{0}(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@*?])[A-Za-z\d~!@*?]{1,8}$/;
    const nameRegex = /^[^가-힣]{0}(?=.*[가-힣])[가-힣]{1,}$/;


    if(!userRegex.test(userId.value)) {
       alert("아이디 확인바람");
       return false;
    }

    
    if(!passRegex.test(password.value)) {
        alert("비밀번호 확인바람");
        return false;
    }


    if(!nameRegex.test(name.value)) {
        alert("이름 확인바람");
        return false;
    }


    if(profile.files[0].type != "image/jpeg"){
        alert(profile.files[0].type + " 확장자는 들어올 수 없습니다.");
        return false;
    }

    const form = new FormData();

    form.append("file", profile.files[0]);
    form.append("userId", userId.value);
    form.append("password", password.value);
    form.append("name", name.value);
    form.append("year", year.value);

    fetch("./backend/backSign.php",{
        method: "POST",
        body: form
    })
    .then((res) => res.json())
    .then((data) => {

        if(data["state"] == "ok"){
            alert("회원가입 성공함");
            location.href = "./index.php";
        }
    })

}