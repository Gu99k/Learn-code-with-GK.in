let target = document.querySelector(".text-head");
const bgColorChange = () => {
    setTimeout(() => {
        target.style.color = "white";

    }, 0);

    setTimeout(() => {
        target.style.color = "lime";

    }, 2000);

    setTimeout(() => {
        target.style.color = "yellow";

    }, 4000);
}
bgColorChange();
setInterval(bgColorChange, 3000);
// -----------------------------------------------------------------------------------------------------------------
let targetLearn = document.querySelector(".second-text");
const learnTopic = () => {
    setTimeout(() => {
        targetLearn.textContent = "HTML Language";
    }, 0);
    setTimeout(() => {
        targetLearn.textContent = "CSS Language";
    }, 4000);
    setTimeout(() => {
        targetLearn.textContent = "JS Language";
    }, 8000);
    setTimeout(() => {
        targetLearn.textContent = "C Language";
    }, 12000);
    setTimeout(() => {
        targetLearn.textContent = "ReactJs Language";
    }, 16000);
}
learnTopic();
setInterval(learnTopic, 20000);

// =----------------------------------------------------------------------------------------------------------------

let switchMode = body.querySelector(".switch-mode");
switchMode.addEventListener("click", function () {
    body.classList.toggle("dark");
});



// =-------------------------Heading-sidenav-open-close-------------------------------------------------------------

