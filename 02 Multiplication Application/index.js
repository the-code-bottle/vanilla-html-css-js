const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const formEl = document.getElementById("form");

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1*num2;

formEl.addEventListener("submit",()=>{
     const userAns = +inputEl.value;
     if(correctAns == userAns ){
        score++;
        updateLocalStorage();
     }else{
        score--;
        updateLocalStorage();
     }
     console.log(score);
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

scoreEl.innerText=` Score = ${score}`;