const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainCounterEl = document.getElementById("remain-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();

})

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainCounterEl.innerText = 50 - textareaEl.value.length;
}