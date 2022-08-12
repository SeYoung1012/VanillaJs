//3-1장
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);


//3-2장
//자바스크립트로 html element를 가져오고 검색하기 
// const title = document.getElementById("something");

// title.innerText = "Got you!";

// console.log(title.className);


const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// const title = document.getElementsByTagName("h1");

// console.log(title);


//querySelector는 css selector로 쓸 수 있음
//querySelector는 h1을 세개가 있어도 첫번째 요소만 가져옴
//그래서 querySelectorAll를 써야 전체 요소를 가져올 수 있음
//const title = document.querySelectorAll(".hello h1");

//위 코드와 아래 코드는 같은 일을 함.
//const title = document.querySelector("#hello");
//const title = document.getElementById("hello");
//console.log(title);
// const title = document.querySelector(".hello h1");

// title.innerText = "hello";


//3-3강 이벤트
//니꼬샘은 querySelector를 자주 쓴다고 함.
// const title = document.querySelector(".hello:first-child h1");

// //console.dir(title);

// title.style.color = "blue";

// //event는 마우스가 올라오는 것. 
// const title = document.querySelector(".hello:first-child h1");

// function handleTitleClick() {
//     title.style.color = "blue";

// }

// title.addEventListener("click", handleTitleClick);


//3-4 이벤트 2.  

// const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// function handleTitleClick() {
//     title.style.color = "blue";

// }

// function handleMouseEnter () {

//     title.innerText = "Mouse is here!";

// }

// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!"

// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter" , handleMouseEnter);
// title.addEventListener("mouseleave" , handleMouseLeave);

//3-5강 이벤트 3
// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleClick() {
//     h1.style.color = "blue";

// }

// function handleMouseEnter () {

//     h1.innerText = "Mouse is here!";

// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!"

// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";

// }

// function handleWindowCopy(){
//     alert("copier!");

// }

// function handleWindowOffline(){
//     alert("SOS no WIFI")
// }

// function handleWindowOnline(){
//     alert("ALL GOOD")
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter" , handleMouseEnter);
// h1.addEventListener("mouseleave" , handleMouseLeave);


// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);




//3-6강 이벤트 사용 + ifelse

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;

//    if(currentColor=== "blue"){
//     newColor = "tomato";
//    }else {
//     newColor = "blue"
//    }
//    h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);


//3-7장
const h1 = document.querySelector("div.hello:first-child h1");

//클래스네임을 철자를 틀릴 수 있기 때문에 변수 선언해서 쓰자.

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.className === clickedClass){
        h1.className = "";
    }else {
        h1.className = clickedClass;
    }
    
}

h1.addEventListener("click", handleTitleClick);


//3-8장 classList 와 className
//classList는 class 목록으로 작업할 수 있게 허용.
//className은 그냥 모든 걸 교체. 이전에 썼던 class를 상관하지 않음.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains (clickedClass)){
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }
    
}

h1.addEventListener("click", handleTitleClick);


//개발자들이 가장 많이 하는 작업인 toggle
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    
    h1.classList.toggle("clicked")
    
}

h1.addEventListener("click", handleTitleClick);




