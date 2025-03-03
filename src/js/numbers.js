const displayNumber = document.querySelector(".diplayName")
const formButton = document.querySelector("#formButton")
const btnBack =  document.querySelector(".btn-back")

let valueMin = Number(localStorage.getItem("valueMin")) || 0
let valueMax = Number(localStorage.getItem("valueMax")) || 0

function randomNumber (min , max){
  return Math.floor(Math.random() * (max - min + 1 )) + min
}

function createButton (n){
  const createButton = document.createElement("button")
  createButton.classList.add("mainButton")
  formButton.appendChild(createButton)
  createButton.innerHTML = n
  
  createButton.addEventListener("click", function() {
    checkNumber(n);
  });
}

function checkNumber(number) {
  const numberShown = parseInt(document.querySelector(".diplayName").textContent);
  
  if (number === numberShown) {
    randomNumbersButton()
  } else {
    alert("Errado, tente novamente.");
  }
}

function randomNumbersButton(){
  formButton.innerHTML = ""
  const getNumberDisplay = numberDisplay()
  let n = []
  const positionRandom = randomNumber(0, 3)

  for (let i = 0; i < 4; i++){
    if (i === positionRandom){
      n.push(getNumberDisplay)
    }else{
      let numberRandom;
      do {
        numberRandom = randomNumber(valueMin,valueMax)
      } while (numberRandom === getNumberDisplay || n.includes(numberRandom))
      
      n.push(numberRandom)
    }
  }
  n.forEach(num => createButton(num))
}

function numberDisplay () {
  return displayNumber.innerText = randomNumber(valueMin,valueMax)
}

btnBack.addEventListener("click", () => {
  window.location.href = "index.html"
})

randomNumbersButton()