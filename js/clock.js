//5강 clock.만드는 법 setInterval

// const clock = document.querySelector("h2#clock");

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000);

//5-1강 timeout

// const clock = document.querySelector("h2#clock");

// function getClock() {
//     const date = new Date();
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// //getClock(); 없으면 00:00:00이 나오고 시간이 호출되지만, 
// //getClock()을 한번 호출하면 바로 시간이 나옴.
// getClock();
// setInterval(getClock, 1000);

//5-2장 
//자바스크립트에서 "1"을 만나면 "0"을 넣어주는 것. 
//padStart가 그 기능을 함. 
//ex)"1".padStart(2, "0") --> "01"
//ex) "12".padStart(2,"0") -->"12"가 출력. 이미 string이 길이가 2이기 때문에. 
//"1".padEnd(2, "0") -->"10" 


//date를 String으로 바꾸려면 -> String(new Date().getHours())


const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);