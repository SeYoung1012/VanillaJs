//4-1장 Form Submission
//querySelector()를 사용할 때는 대상이  id인지 명확히 해줘야함. 
//querySelector()는 calssName, tagname 모두 검색을 가능하게 함.
//getElementBuId는 그럴 일이 없음

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(username);

// }

// loginButton.addEventListener ("click", onLoginBtnClick);

//4-2장

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

//preventDefault로 input에 쓴 value값이 console에 나옴.
function onLoginSubmit(event) {
    event.preventDefault
    console.log(loginInput.value);

}

loginForm.addEventListener("submit", onLoginSubmit);


