const startInOrderVowels = document.querySelector("#startInOrderVowels")
const startRandomVowels = document.querySelector("#startRandomVowels")
const startInOrderAlphabet = document.querySelector("#startInOrderAlphabet")
const startRandomAlphabet = document.querySelector("#startRandomAlphabet")
const btnBack =  document.querySelector(".btn-back")



startInOrderVowels.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "vowelsInOrder")
  window.location.href = "../../pageLyric.html"
})

startRandomVowels.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "vowelsRandom")
  window.location.href =  "../../pageLyric.html"
})

startInOrderAlphabet.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "alphabetInOrder")
  window.location.href =  "../../pageLyric.html"
})

startRandomAlphabet.addEventListener("click", () => {
  localStorage.setItem("functionLyrics", "alphabetRandom")
  window.location.href =  "../../pageLyric.html"
})

btnBack.addEventListener("click", () => {
  window.location.href = "index.html"
})