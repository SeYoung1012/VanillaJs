
//const는 항상, let은 변화가 있을 때만 쓸 것. 
//var는 의미가 불분명해서 쓰지 않는 게 좋다. 
//2-9장

const a = null;
//null은 비어있음을 뜻함. 

let hello;
console.log(hello);
//undefined -> hello는 존재하지만, 안에 아무것도 없다
//값이 없다 

//자바스크립트 null과 undefined 가 있다.

const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy[2]);
toBuy[2] = "water";
console.log(toBuy);

toBuy.push("meat");
console.log(toBuy);

//2-10장
//object에 대한 설명
const player = {
    name: "Nico",
    age: 98
};
console.log(player);
player.name = "nicolas"
console.log(player);

player.sexy = "soon";
console.log(player, console);


function plus (apple , salad){
    //data를 안에서 작성하는 것보다 바깥에 작성하는 게 좋음
    //function의 목적은 여러가지 일을 같은 코드로 하기 위함.
    console.log(apple + salad);
}
 
plus( 5 , 10);
plus(1.33453, 9898);
plus(9898, 1.33453);

//arguement를 많이 ㄴ쓰더라도 첫번째 arguement만 받아서 연산
function minusFive(banana) {
    console.log(banana - 5);

}
//바깥에서 banana를 출력하면 에러가 뜸. 저 안에 바디에서만 사용.
console.log(banana);
minusFive(10,10, 12,34, 4,5,6,7);

//과제 function을 사용해서 연산하기 
const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function(c, d){
        console.log(c - d);
    },
    div: function(e, f){
        console.log(e / f);
    },
    mul: function(g, h){
        console.log(g * h);
    },
    power: function(r, j){
        console.log(r ** j);
    }
};

calculator.add(5, 1);
calculator.minus(10, 5)
calculator.div(10, 5);
calculator.mul(10, 2);
calculator.power(4, 2);