let paths;
let sub;


const wrap = document.querySelector("#wrap");
const svg = document.querySelector("#svg");
const circle = document.querySelector("#circle");
const title = document.querySelector("#title");

// 사이드바 
const sideBar = document.querySelector("#sideBar");
const sideBtn = document.querySelector("#sideBtn");
const dataWrap = document.querySelector("#dataWrap");
const search = document.querySelector("#search");
const redPointer = document.querySelector("#redPointer");
const cateAll = document.querySelectorAll(".cate");



let bigCircle;

let timer;
let clickPath = ""
let subCheck = false;
let city;
let isShift = false;
let festivalCategory = "전체";
let festivalData;
let festivalSmallData;



let downX, downY;

const dataMap = new Map();


fetch("./festivals.json")
    .then((res) => res.json())
    .then((data) => {

        festivalData = data.sort((a,b) => 
            new Date(b.start_date) - new Date(a.start_date));
        
        drawSide();
    })

function searchs() {
    drawSide();
    console.log("das");
}
function drawSide() {
    festivalSmallData = festivalData;

    const greenEl = document.querySelectorAll(".green");


    if(greenEl.length != 0) {
        festivalSmallData = [];

        greenEl.forEach(element => {
            let temp = festivalData.filter((v) => {
                return v.city == dataMap.get(element).name;
            })

            temp.forEach(element => {
                festivalSmallData.push(element);
            });
            
        });
        console.log(festivalSmallData);
    }

    if(festivalCategory != "전체"){
        festivalSmallData = festivalSmallData.filter((v) => {
            return v.type == festivalCategory;
        })
    }

    festivalSmallData = festivalSmallData.filter((v) => {
        return (v.name.indexOf(search.value) !== -1) || 
               (v.phone.indexOf(search.value) !== -1) || 
               (v.address.indexOf(search.value) !== -1);
    });

  

    dataWrap.innerHTML = "";

    festivalSmallData.forEach((element,idx) => {
        const div = document.createElement("div");
        const titleEl = document.createElement("h1");
        const dateEl = document.createElement("h2");
        const placeEl = document.createElement("h2");
        const phoneEl = document.createElement("h2");

        div.appendChild(titleEl);
        div.appendChild(dateEl);
        div.appendChild(placeEl);
        div.appendChild(phoneEl);


        titleEl.textContent = element.name;
        dateEl.textContent = element.start_date + " ~ " + element.end_date;
        placeEl.textContent = element.address;
        phoneEl.textContent = element.phone;

        dataWrap.appendChild(div);

        div.addEventListener("mouseover",(e)=>{
            const subEl = document.querySelectorAll(".sub");
            redPointer.style.display = "block";
            
            let count = 0;

            subEl.forEach(element2 => {

                if(dataMap.get(element2).name == element.city){
                    title.style.display = "block";
                    title.style.left = dataMap.get(element2).midX + "px";
                    title.style.bottom = dataMap.get(element2).midY + "px";
            
                    title.textContent = dataMap.get(element2).name;

                    element2.classList.add("golds");

                    div.addEventListener("mouseleave",(e)=>{
      
                        element2.classList.remove("golds");
                        redPointer.style.display = "none";
                        title.style.display = "none";
                    })
                    count++;
                }
          
            });
            
            
            if(count == 0){
                const pathEl = document.querySelectorAll(".paths");
                pathEl.forEach(element2 => {
                    
                    if(dataMap.get(element2).name == element.state){
                        title.style.display = "block";
                        title.style.left = dataMap.get(element2).midX + "px";
                        title.style.bottom = dataMap.get(element2).midY + "px";
                
                        title.textContent = dataMap.get(element2).name;

                        element2.classList.add("golds");

                        div.addEventListener("mouseleave",(e)=>{
      
                            element2.classList.remove("golds");
                            redPointer.style.display = "none";
                            title.style.display = "none";
                        })
                    }
                });
            }

           

            redPointer.style.left = findX(element.lng) + "px";
            redPointer.style.bottom = findY(element.lat) + "px";
        })

       
       
    });

}



fetch("./map.json")
    .then((res) => res.json())
    .then((data) => {

        data.forEach(element => {
            createPath(element);
        });

    })

let maxX = 132;
let maxY = 43;

function findX(x) {
    return (x - 124) / 8 * 100 * 7;
}

function findY(y) {
    return (y - 33.0) / 6 * 100 * 6;
}

let idx = 0;

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

    
 

    if(!subCheck) {
            pathElement.addEventListener("click", () => {
                if (isShift) {
                    isShift = false;
                    alert("안됨");
                }
            })
       
            pathElement.addEventListener("mousedown", (e) => {
                
                let maxLine = 0;

                dataMap.get(pathElement).map.forEach(element => {
                    element.forEach(element2 => {
                        let v = Math.sqrt(Math.abs(findX(element2[0]) - downX) ** 2 + Math.abs(findY(element2[1]) - downY) ** 2);

                        if (v > maxLine) {
                            maxLine = v;
                        }
                    });
                });


                circle.style.transition = "3s linear";
                svg.appendChild(circle);
                
                paths = document.querySelectorAll(".paths");

                paths.forEach(element => {
                    if (element.id != pathElement.id) {
                        svg.appendChild(element);  
                    }
                });

                bigCircle = setTimeout(() => {
                    circle.setAttribute("r", maxLine);
                }, 100);


                timer = setTimeout(() => {

                    circle.style.transition = "0s linear";
                    circle.setAttribute("r", 0);

                    subCheck = true;
                    
                    city = dataMap.get(pathElement).name;
                    dataMap.get(pathElement).cities.forEach(pathElement => {
                        createPath(pathElement)
                    });

                    subCheck = false;

                }, 3100); // 3초 후에 실행
            })


            pathElement.addEventListener('mouseup', () => {
                clearTimeout(timer);
                circle.style.transition = "0s linear";
                circle.setAttribute("r", 0);
            });

            pathElement.addEventListener('mouseleave', () => {
                clearTimeout(timer);
                circle.style.transition = "0s linear";
                circle.setAttribute("r", 0);
            });

    
    }
    else {
        pathElement.classList.add("sub");
        coordinates.city = city;

        pathElement.addEventListener("click", () => {

            if (isShift) {
                let sub = document.querySelectorAll(".sub");

                sub.forEach(element => {
                    if (dataMap.get(element).city == coordinates.city) {

                        const titles = document.querySelector(`#${dataMap.get(element).pk}`);

                        if (titles != undefined) {
                            wrap.removeChild(titles);
                        }

                        svg.removeChild(element);
                        dataMap.delete(element);
                    }

                });

                drawSide();
                
                return false;
            }

            if ((pathElement.classList[2]) != undefined) {
                pathElement.classList.remove("green");
                pathElement.setAttribute("fill", "black");

                const titles = document.querySelector(`#${dataMap.get(pathElement).pk}`);
                wrap.removeChild(titles);
            }
            else {
                const titles = document.createElement("p");

                titles.className = "subTitle";
                titles.style.left = dataMap.get(pathElement).midX + "px";
                titles.style.bottom = dataMap.get(pathElement).midY + "px";

                titles.textContent = dataMap.get(pathElement).name;
                titles.id = dataMap.get(pathElement).pk;

                wrap.appendChild(titles);
                pathElement.classList.add("green");
                pathElement.setAttribute("fill", "green");

            }

            isClickElement = "";
            drawSide();
        })
    }


    pathElement.addEventListener("mouseover", (e) => {

        title.style.display = "block";
        title.style.left = coordinates.midX + "px";
        title.style.bottom = coordinates.midY + "px";

        title.textContent = coordinates.name;
    })

    pathElement.addEventListener("mouseleave", (e) => {
        title.style.display = "none";
    })

    svg.appendChild(pathElement);

    idx++;
    paths = document.querySelectorAll('.paths');
};



svg.addEventListener("mousemove", (e) => {
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);

    downX = e.offsetX;
    downY = e.offsetY;
})




svg.addEventListener("mouseup", (e) => {

    clearTimeout(bigCircle)

    circle.style.transition = "0s linear";

    circle.setAttribute("r", 0);


})


addEventListener("keydown", (e) => {
    if (e.key == "Shift") {
        isShift = true;
    }
})

addEventListener("keyup", (e) => {
    if (e.key == "Shift") {
        isShift = false;
    }
})



// 사이드바


let isSideCheck =  false;

cateAll.forEach(element => {

    element.addEventListener("click",()=>{
        cateAll.forEach(element2 => {
            element2.classList.remove("actives");
        })

        festivalCategory = element.textContent;
        element.classList.add("actives");
        drawSide();
    });
});

sideBtn.addEventListener("click",()=>{
    if(isSideCheck) {
        sideBar.style.left = "0px";
        isSideCheck = false;
        sideBtn.style.transform = "rotate(0deg)";
    }
    else {
       
        sideBar.style.left = "-480px";
        isSideCheck = true;
        sideBtn.style.transform = "rotate(180deg)";
    }
});