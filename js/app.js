//상수 const
//변수를 업데이트 할 때만 let을 사용.
//대부분은 const를 사용

const a = 5;
const b = 2;
let myName = "nico";



console.log( a + b);
console.log( a * b);
console.log( a / b);
console.log("hello" + myName);

//변수값이 변경
myName = "nicolas";

console.log("your new name is " + myName);

//자바스크립트에는 원래 var만 있었음. 
//var는 언제나 변함. 
//const 변수는 거의 변경하지 않으며, 주로 const를 사용.
//변수를 업데이트를 해야할 때에만 let을 씀. 


const amIFat = null;
let something;
console.log(something);

//undefined -> 타입 null -> 타입 false -> 타입 true -> 타입
//null과 undefined는 다르다. 
//null은 자연발생하지 않으며 null은 비어있음, undefined는 컴퓨터가 메모리를 인지하지만 값이 없는 것. 


//배열
const dayOfWeek = ["mon" , "thu", "wed" , "thu" , "fri" , "sat" ];

const nonsense = [1,2, "hello", false, true, undefined, "nico"]

console.log(dayOfWeek, nonsense);

//array 에서 아이템 받아오기
console.log(dayOfWeek[4]);

//배열에 하나 더 추가
dayOfWeek.push("sun")

console.log(dayOfWeek);


const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy[2]);

//object

const player = {
    name :"nico", 
    points : 10,
    fat : true
};
console.log(player.name);
console.log(player)
player.fat = false; //const는 변하지 않음. object 값이 변함.
console.log(player);

//object property 추가
player.lastName = "potato";
console.log(player);

player.points = player.points + 15;
console.log(player.points);






