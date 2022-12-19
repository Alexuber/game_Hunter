
let countClick = 0;
const blockCount = document.querySelector("#count");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const shootAudio = document.querySelector('#shootAudio')

const btnClick = () => {
    countClick +=1;
    blockCount.innerText = countClick;
}


btn2.onclick = () => {
   p2 = document.querySelector("#p2");
   console.dir(p2)
   p2.style.background = "red";
}

btn3.onclick = () => {
    shootAudio.play();
}

btn3.onclick();