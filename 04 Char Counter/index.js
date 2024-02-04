const textareaEl = document.getElementById("textarea");
const totalcharEl = document.getElementById("total-counter");
const remainingcharEl = document.getElementById("remaining-counter");

updateCounter();

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
});

function updateCounter(){
    totalcharEl.innerText = textareaEl.value.length;
    remainingcharEl.innerText = textareaEl.getAttribute("maxLength")-textareaEl.value.length;
}