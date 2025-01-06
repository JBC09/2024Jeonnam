const wrap = document.querySelector("#wrap");
const box = document.querySelector("#box");

let startX;
let startY;

let moveX = 0;
let moveY = 0;

let selected = false;

let zooms = 500;



function drawView(x, y) {
    box.style.transform = `perspective(${zooms}px) 
    translateZ(${zooms}px) 
    rotateX(${x}deg) 
    rotateY(${y}deg)`
}

wrap.addEventListener("mousedown", (e) => {
    startX = e.offsetX;
    startY = e.offsetY;

    selected = true;

})

wrap.addEventListener("mousemove", (e) => {
    if (selected) {



        if (moveY + (e.offsetY - startY) / 7 > 90) {
            drawView(90, moveX + (startX - e.offsetX) / 7)
            return false;
        }

        if (moveY + (e.offsetY - startY) / 7 < -90) {
            drawView(-90, moveX + (startX - e.offsetX) / 7)
            return false;
        }

        drawView(moveY + (e.offsetY - startY) / 7, moveX + (startX - e.offsetX) / 7)


    }
})

addEventListener("mouseup", (e) => {
    selected = false;

    moveX += (startX - e.offsetX) / 7;
    if (moveY + (e.offsetY - startY) / 7 > 90) {
        moveY = 90;
        return false;
    }

    if (moveY + (e.offsetY - startY) / 7 < -90) {
        moveY = -90;
        return false;
    }

    moveY += (e.offsetY - startY) / 7;
})

addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        zoomIn();
    } else {
        // 마우스 휠을 아래로 스크롤 (줌 아웃)
        zoomOut();
    }
});

function zoomIn() {
    if (zooms == 1500) {
        return false;
    }

    zooms += 500 * 0.1;
    box.style.transition = "0.1s linear";

    drawView(moveY, moveX);

    setTimeout(() => {
        box.style.transition = "0s";

    }, 350);
}


function zoomOut() {


    if (zooms == 500 * 0.7) {
        return false;
    }

    zooms -= 500 * 0.1;


    box.style.transition = "0.1s linear";
    drawView(moveY, moveX);

    setTimeout(() => {
        box.style.transition = "0s";

    }, 350);
}

function locLeft() {
    moveX -= 3;

    box.style.transition = "0.1s linear";
    drawView(moveY, moveX);

    setTimeout(() => {
        box.style.transition = "0s";

    }, 350);
}

function locRight() {
    moveX += 3;

    box.style.transition = "0.1s linear";
    drawView(moveY, moveX);

    setTimeout(() => {
        box.style.transition = "0s";

    }, 350);
}


function locTop() {

    moveY += 3;

    if (moveY > 90) {
        moveY = 90;
    }

    box.style.transition = "0.1s linear";
    drawView(moveY, moveX);

    setTimeout(() => {
        box.style.transition = "0s";

    }, 350);
}

function locBottom() {
    moveY -= 3;

    if (moveY < -90) {
        moveY = -90;
    }

    box.style.transition = "0.1s linear";
    drawView(moveY, moveX);

    setTimeout(() => {
        box.style.transition = "0s";

    }, 350);
}




let fullCheck = false;

function FullScreen() {
    if (!fullCheck) {
        document.documentElement.requestFullscreen();
        fullCheck = true;
    }
    else {
        document.exitFullscreen();
        fullCheck = false;
    }
}


let paths;
let sub;

let maxX = 132;
let maxY = 43;
let idx = 0;

let wraps = document.querySelector("#wraps");
let imgbox = document.querySelector("#box");


function mapOpen() {
    map.style.display = "flex";
}

function mapClose() {
    map.style.display = "none";
}



let arr = ["2024 웰컴대학로", "계룡산산신제", "2025 카운트다운&해맞이 축제","장보고수산물축제","제51회신라문화제"];

const dataMap = new Map();

function findX(x) {
    return (x - 124) / 8 * 100 * 7;
}

function findY(y) {
    return (y - 33.0) / 6 * 100 * 6;
}


fetch("./map.json")
.then((res) => res.json())
.then((data) => {

    data.forEach(element => {
        element.cities.forEach(element2 => {
            createPath(element2);
        });
    });

})


fetch("./festivals.json")
.then((res) => res.json())
.then((data) => {

    festivalData = data.sort((a,b) => 
        new Date(b.start_date) - new Date(a.start_date));
    
    festivalData.forEach(element => {
        if(arr.includes(element.name)){
        

            const pointer = document.createElement("div");
            const pointerH1 = document.createElement("h1");

            if(element.name == "2024 웰컴대학로"){
                pointer.classList.add("red");
                pointerH1.classList.add("redText");
            }

            pointerH1.textContent = element.name;


            pointer.classList.add("pointer");
            pointerH1.classList.add("pointerH1");

            

            pointer.style.left = findX(element.lng) + "px";
            pointer.style.bottom = findY(element.lat) + "px";

            pointerH1.style.left = findX(element.lng) + "px";
            pointerH1.style.bottom = findY(element.lat) + "px";

            pointer.addEventListener("click",(e)=>{
                
                const pointers = document.querySelectorAll(".pointer");
                const pointersH1 = document.querySelectorAll(".pointerH1");

                pointers.forEach(element => {
                    element.classList.remove("red");
                });

                pointersH1.forEach(element => {
                    element.classList.remove("redText");
                });

                pointer.classList.add("red");
                pointerH1.classList.add("redText");


                imgbox.innerHTML = `
                    <img src="./파노라마/${element.name}/back.jpg" alt="">
                    <img src="./파노라마/${element.name}/bottom.jpg" alt="">
                    <img src="./파노라마/${element.name}/front.jpg" alt="">
            
                    <img src="./파노라마/${element.name}/right.jpg" alt="">
                    <img src="./파노라마/${element.name}/left.jpg" alt="">
                    <img src="./파노라마/${element.name}/top.jpg" alt="">
                `
            })  

            

            wraps.appendChild(pointer);
            wraps.appendChild(pointerH1);
        }
    });
})

const createPath = (coordinates) => {
    let pathData = ""

    let x1 = 700, y1 = 700, x2 = 0, y2 = 0;

    coordinates.map.forEach(element => {
        pathData += element.map((coord, index) => {
            if (findX(coord[0]) < x1) {
                x1 = findX(coord[0]);
            }

            if (findY(coord[1]) < y1) {
                y1 = findY(coord[1]);
            }

            if (findX(coord[0]) > x2) {
                x2 = findX(coord[0]);
            }

            if (findY(coord[1]) > y2) {
                y2 = findY(coord[1]);
            }

            return `${index === 0 ? 'M' : 'L'} ${findX(coord[0])} ${findY(coord[1])}`
        }).join(' ');
    });

    coordinates.midX = (x1 + x2) / 2;
    coordinates.midY = (y1 + y2) / 2;
    coordinates.pk = `ss${Math.floor((coordinates.midX))}s${Math.floor(coordinates.midY)}`;

    let opacity = coordinates.count / 240;

    if (opacity < 0.1) {
        opacity = 0.1;
    }


    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', pathData);
    pathElement.setAttribute('fill-opacity', `${opacity}`);
    pathElement.setAttribute('stroke', `black`);
    pathElement.id = "p" + idx;
    pathElement.classList.add("paths");
    dataMap.set(pathElement, coordinates);


    svg.appendChild(pathElement);

    idx++;
    paths = document.querySelectorAll('.paths');
};