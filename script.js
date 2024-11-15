const audioParabens = new Audio("assets/xuxa-parabens.mp3");
audioParabens.volume = 0.5

const button = document.querySelector(".sparkle-button");
if (button) {
    button.addEventListener("click", (e) => {
        location.href = ""
    })
}

const presente = document.querySelector(".box-body");
if (presente) {

    presente.addEventListener("click", (e) => {
        const modal = document.querySelector(".modal");
        presente.classList.add("clicado")
        modal.style.animation = "sumir .8s forwards 1.5s";
        audioParabens.play();
    })
}

const videos = document.querySelectorAll("video");
if (videos) {
    videos.forEach((video) => {
        video.muted = true;
        video.addEventListener("click", () => {
            video.paused ? video.play() : video.pause();
        })
    })
}

const acorda = new Audio("assets/acorda-monark.mp3");
const btnAcorda = document.querySelector(".btn-acorda");
if (btnAcorda) {
    btnAcorda.addEventListener("click", () => {
        acorda.paused ? acorda.play() : acorda.pause();
    })
}