const startInOrderVowels = document.querySelector("#startInOrderVowels")
const startRandomVowels = document.querySelector("#startRandomVowels")
const startInOrderAlphabet = document.querySelector("#startInOrderAlphabet")
const startRandomAlphabet = document.querySelector("#startRandomAlphabet")
const btnBack =  document.querySelector(".btn-back")

startInOrderVowels.addEventListener("click", () => {
  window.location.href = "pageLyric.html"
  localStorage.setItem("functionLyrics", "vowelsInOrder")
})

startRandomVowels.addEventListener("click", () => {
  window.location.href = "pageLyric.html"
  localStorage.setItem("functionLyrics", "vowelsRandom")
})

startInOrderAlphabet.addEventListener("click", () => {
  window.location.href = "pageLyric.html"
  localStorage.setItem("functionLyrics", "alphabetInOrder")
})

startRandomAlphabet.addEventListener("click", () => {
  window.location.href = "pageLyric.html"
  localStorage.setItem("functionLyrics", "alphabetRandom")
})

btnBack.addEventListener("click", () => {
  window.location.href = "index.html"
})