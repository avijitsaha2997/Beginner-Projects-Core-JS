const num1 = Math.round(Math.random() * 10);
const num2 = Math.round(Math.random() * 10);
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scorEl = document.getElementById("score");
const resetEl = document.getElementById("reset");

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}
scorEl.innerText = `Score ${score}`;

formEl.addEventListener("submit", () => {

    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    }




})
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));

}

resetEl.addEventListener("click", () => {
    score = 0;
    updateLocalStorage();
    scorEl.innerText = `Score 0`;
})




