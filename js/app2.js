//console.log("Hello my name is Nico");
//console.log("Hello my name is Dal");
// console.log("Hello my name is Shigatsu");
// console.log("Hello my name is Flynn");
// console.log("Hello my name is Flynn");
// console.log("Hello my name is Flynn");
// console.log("Hello my name is Flynn");
// console.log("Hello my name is Flynn");
// console.log("Hello my name is Flynn");
// console.log("Hello my name is Flynn");

//이렇게 긴 코드를 줄이기 위해서 function을 쓴다


//데이터를 function으로 보내는 방법 
//arguement를 받고
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + "and I'm "  + age);
     
// }

// //arguement를 보내고
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);


function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide (a, b){
    console.log(a / b);

}

plus(60, 8);
divide(98, 20)



const player = {

    name: "nico",
    sayHello : function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you!")
    }

};
 
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

