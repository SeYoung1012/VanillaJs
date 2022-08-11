
//2-11장

// const calculator = {
//     plus: function (a, b) {
//        alert(a + b);
//     },
//     minus: function(c, d){
//         alert(c - d);
//     },
//     div: function(e, f){
//         alert(e / f);
//     },
//     mul: function(g, h){
//         alert(g * h);
//     },
//     power: function(r, j){
//         alert(r** j);
//     }
// };

//console.log(calculator.plus(5, 1));


//consolelog는 무엇을 하는 건지 잘 봤음. 
//console이 아닌 데이터를 받거나, 화면출력을 해야함


const age = 96;

function calculateKrAge(ageOfForeigner){
   ageOfForeigner + 2;
   return "hello";
}
const krAge =  calculateKrAge(age);
console.log(krAge);


// const age = 96;

// function calculateKrAge(96){
//     return 98;
// }
// const krAge =  98;
// console.log(krAge);



// const calculator = {
//     plus: function (a, b) {
//        return a + b;
//     },
//     minus: function(a, b){
//         return a - b;
//     },
//     times: function(a, b){
//         return a * b;
//     },
//     div: function(a, b){
//         return a / b;
//     },
//     power: function(a, b){
//         return a ** b;
//     },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timeResult = calculator.times(10, minusResult);
// const divideResult = calculator.div(timeResult, plusResult);
// const powerResult = calculator.power(divideResult,minusResult);

//2- 12장
const calculator = {
    plus: function (a, b) {
        //a+b를 리턴했을 때 byebye는 동작하지 않음.
        //리턴하는 순간, function이 종료가 되기 때문
        //자바스크립트 규칙
        console.log("hello")
       return a + b;
       console.log("byebye")
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a * b;
    },
    div: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    },
};

//const, let, var 변수에 저장하면 type을 가짐
//console에 쓰면 변수에는 undefiend.
//아래에 plusResult에는 5가 담겨있고 마지막엔 결과가 남음.

const plusResult = calculator.plus(2, 3);






