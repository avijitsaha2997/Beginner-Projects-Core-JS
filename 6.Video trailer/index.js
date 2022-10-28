const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");


btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
    videoEl.currentTime = 0;
})
closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();

})