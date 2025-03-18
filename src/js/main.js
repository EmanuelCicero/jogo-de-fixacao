const startRandom = document.querySelector("#startRandom")
const startInOrder = document.querySelector("#startInOrder")
const numberMin = document.querySelector("#numberMin")
const numberMax = document.querySelector("#numberMax")
const btnBack =  document.querySelector(".btn-back")



let valueMin;
let valueMax;

function addMinMax() {
  const min = document.querySelector("#numberMin")
  const max = document.querySelector("#numberMax")

  valueMin = Number(min.value)
  valueMax = Number(max.value)

  localStorage.setItem("valueMax", valueMax)
  localStorage.setItem("valueMin", valueMin)
}

startRandom.addEventListener("click", () => {
  localStorage.setItem("fuctionInOrder", "numbersRandom")
  addMinMax()
  verifyNumber()
})

startInOrder.addEventListener("click", () => {
  localStorage.setItem("fuctionInOrder", "numbersInOrder")
  addMinMax()
  verifyNumber()
})

function verifyNumber(){
  if((valueMax - valueMin) > 2){
    window.location.href =  "pageNumber.html"
  }else{
    alert("A diferença entre os numeros maximo e minimo deve ser de pelo menos 3")
  }
}

btnBack.addEventListener("click", () => {
  window.location.href = "index.html"
})