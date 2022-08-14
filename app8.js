
// //4-3 강
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");


//  //preventDefault로 input에 쓴 value값이 console에 나옴.
// function onLoginSubmit(event) {
//  event.preventDefault();
//   console.log(loginInput.value);
 
//  }
 
// //preventDefault()로 사이트로 넘어가는 걸 막음
// //addEventListener 안에 있는 함수는 직접 실행하지 않음
// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
  
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

//가끔은 어디가 클릭되었는지 정보를 알고 싶을 때가 있음.
//js는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어줌
//handleLinkClick({information about the event that just happend})


//4-4강
//user에게 인사하기
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// //일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용.

// const HIDDEN_CLASSNAME = "hidden";

//  //preventDefault로 input에 쓴 value값이 console에 나옴.
// function onLoginSubmit(event) {
//  event.preventDefault();
//  loginForm.classList.add(HIDDEN_CLASSNAME);
//  const username = loginInput.value;
// // greeting.innerText= "Hello " + username;
//  greeting.innerText= `Hello ${username}`;
//  greeting.classList.remove(HIDDEN_CLASSNAME);

 
//  }

// loginForm.addEventListener("submit", onLoginSubmit);

//4-5강
//input value 값을 저장하는 법. 
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//  event.preventDefault();
//  loginForm.classList.add(HIDDEN_CLASSNAME);
//  const username = loginInput.value;
//  localStorage.setItem("username", username);
//  greeting.innerText= `Hello ${username}`;
//  greeting.classList.remove(HIDDEN_CLASSNAME);

 
//  }

// loginForm.addEventListener("submit", onLoginSubmit);

//4-6강, 4-7강
//localStorage가 비어있으면 form 부터 보여줌
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//1. event가 원래 인터넷이 하던 행동을 멈춤. 브라우저 기본동작이 막히고 그건 새로고침.
//2.form 을 다시 숨겨줌
//3. loginInput.value username을 변수로 저장. 
//4. username값을 username key와 함께  localStorage에 저장함.
//5. paintGreetings 함수를 호출. input에 입력한 유저명을 받고 있음.

function onLoginSubmit(event) {
 event.preventDefault();
 loginForm.classList.add(HIDDEN_CLASSNAME);
 const username = loginInput.value;
 localStorage.setItem(USERNAME_KEY, username);
 paintGreetings(username);

 
 }

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//saveUsername이 null 이면 아래 조건이 참이다. 
//그럼 loginForm으로부터 hidden_classname을 제거함
//그럼 form이 나타나고 -> loginForm에다가 addEventListener이 되고,submit을 기다림
//onLoginSubmit의 function 이 시작됨 
if (savedUsername === null)  {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    //show the greeting
    //username이 있다면 paintGreetings 가 바로실행
   paintGreetings(savedUsername);
}





