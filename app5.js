//2-13강
// const age = parseInt(prompt("How old are you?"));


// //console에 출력되는 age값은 string이다. 
// //string을 int로 변환하는 방법. 
// console.log(age);


//2-14강
//NaN => Not A Number
// const age = parseInt(prompt("How old are you?"));


// if(isNaN(age)) {
//     // condition == true
//     console.log("Please write a number ");    
// }else if(age < 18) {
//     console.log("You are too young.");
// } else {
//     console.log("You can drink");
// }


//2-15강 

// const age = parseInt(prompt("How old are you?"));

// true || true ===true
// false || true === true
// true || false === true
// false || false === false


// true && true === true
// false && true === false
// true && false === false
// false && false === false


// if(isNaN(age) || age < 0) {
//     // condition == true
//     console.log("Please write a real positive number ");    
// }else if(age < 18) {
//     console.log("You are too young.");
// } else if( age >= 18 && age <= 50) {

//     console.log("You can drink");

// }else  if(age > 50 && age <=80){
//     console.log("You should exercise");
// }else if(age > 80) {
//     console.log("You can do whatever you want.");
// }


//2-16강
const age = parseInt(prompt("How old are you?"));


if(isNaN(age) || age < 0) {
    // condition == true
    console.log("Please write a real positive number ");    
}else if(age < 18) {
    console.log("You are too young.");
} else if( age >= 18 && age <= 50) {
    console.log("You can drink");
}else  if(age > 50 && age <=80){
    console.log("You should exercise");
}else if(age === 100){
    console.log("wow you are wise");
}else if(age > 80) {
    console.log("You can do whatever you want.");

}







