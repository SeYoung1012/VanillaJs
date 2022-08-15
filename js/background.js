//html 이미지를 자바스크립트로 넣어주는 방법
//array로 랜덤으로 뽑아 한가지 요소가 나옴. 
//Math.random은 소숫점까지 나오기 때문에 Math.floor로 소숫점을 내려줌.


const images = [ "0.jpg", "1.jpg", "2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)]


//자바스크립트에서 createElement를 사용해서 html element를 만들었음.

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);