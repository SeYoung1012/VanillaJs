//7장
const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");과 아래와 같음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//console.log(태그내용)
//console.dir(객체 속성)
//console.dir(event.target.parentElement.innerText); -> 어떤 리스트가 삭제되는 지 알수 있음
//target은 HTML element임. 

const toDos = [];
//7-3강 saving To dos
//ex) const player = {name: "nico"} object나 array를 -> string으로 변환 JSON.stringify()
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));

}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    //append는 맨 마지막에 놓여야함
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

//submit event로 받고, 기본동작을 막고, input으로 value를 얻음
function handleToDoSubmit (event) {
    event.preventDefault();
    //newTodo는 input의 value를 비우기 전의 값을 나타내는 String
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);