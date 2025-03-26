const startInOrderVowels = document.querySelector("#startInOrderVowels");
const startRandomVowels = document.querySelector("#startRandomVowels");
const startInOrderAlphabet = document.querySelector("#startInOrderAlphabet");
const startRandomAlphabet = document.querySelector("#startRandomAlphabet");
const btnBack = document.querySelector(".btn-back");

const basePath = window.location.pathname.includes("jogo-de-fixacao")
  ? "/jogo-de-fixacao/"
  : "/";

function navigateTo(page) {
  window.location.href = basePath + page;
}

startInOrderVowels.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "vowelsInOrder");
  navigateTo("pageLyric.html");
});

startRandomVowels.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "vowelsRandom");
  navigateTo("pageLyric.html");
});

startInOrderAlphabet.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "alphabetInOrder");
  navigateTo("pageLyric.html");
});

startRandomAlphabet.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "alphabetRandom");
  navigateTo("pageLyric.html");
});

btnBack.addEventListener("click", () => {
  navigateTo("index.html");
});
