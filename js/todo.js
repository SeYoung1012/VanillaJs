//7장
const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");과 아래와 같음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";



//console.log(태그내용)
//console.dir(객체 속성)
//console.dir(event.target.parentElement.innerText); -> 어떤 리스트가 삭제되는 지 알수 있음
//target은 HTML element임. 

//application이 시작할 때 toDos에 array 빈값으로 시작대신,
//아래 코드를 고쳐 주면 됨.
let  toDos = [];
//7-3강 saving To dos
//ex) const player = {name: "nico"} object나 array를 -> string으로 변환 JSON.stringify()
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    //toDo.id 는 number이고, li.id는 String임. 
    //형변환해주면 됨.
    console.log(typeof li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();

}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    //append는 맨 마지막에 놓여야함
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}
//2. 여기에서 function이 실행.

//submit event로 받고, 기본동작을 막고, input으로 value를 얻음
function handleToDoSubmit (event) {
    event.preventDefault();
    //newTodo는 input의 value를 비우기 전의 값을 나타내는 String
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}
//1. 제일 처음 form input에 value값을 전달받음.
toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of" , item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //자바스크립트는 Data Structure가 중요함.
    //대부분은 array 로 각각의 item을 가지고 무언가를 하고 싶어함.
    //forEach()는 array의 각 item에 대해  function을 실행하게 해줌
    //forEach함수는 painteToDo를 ParsedToDos배열의 요소마다 실행.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 

//array를 받아와서 item을 지워야함. 
//지우고 싶은 item을 제외하고 새 array를 만든다. 
//이 역할을 filter()가 함. 
//array에서 item값을 유지하는 건 function에서 리턴 true를 해야함. ->이게 제일중요
//이 공식을 이해하기
//const todos = [{text:"lalala"}, {text:"lololo"}]

//function sextFilter(todo){
//    return todo.text !== "lololo"
//}

//todos.filter(sexyFilter)
//0:{text: "lalala"}





//위 코드와 아래의 코드는 같은 기능을 함. 

// (item) => console.log("this is the turn of" , item)
// function sayHello (item) {
//     console.log("this is the turn of", item)

// }

//위 코드들은 sayHello("a"), sayHello("b")등등 작동

