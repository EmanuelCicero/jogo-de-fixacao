const startButton = document.querySelector(".startButton")
const numberMin = document.querySelector("#numberMin")
const numberMax = document.querySelector("#numberMax")

let valueMin;
let valueMax;

function addMinMax() {
  const min = document.querySelector("#numberMin")
  const max = document.querySelector("#numberMax")

  valueMin = Number(min.value)
  valueMax = Number(max.value)

  verifyNumber()

  localStorage.setItem("valueMax", valueMax)
  localStorage.setItem("valueMin", valueMin)
}

startButton.addEventListener("click", addMinMax)

function verifyNumber(){
  if((valueMax - valueMin) > 2){
    window.location.href =  "pageNumber.html"
  }else{
    alert("A diferença entre os numeros maximo e minimo deve ser de pelo menos 3")
  }
}

const verifyKeyPress = (el) => {
  if(el.keyCode === 13){
    addMinMax()
  }
}


document.addEventListener("click", function(e){
  const el = e.target
  if (el.type === "number"){
    el.value = ""
  }
})

numberMax.addEventListener("keypress", (el) => {
  verifyKeyPress(el)
})

numberMin.addEventListener("keypress", (el) => {
  verifyKeyPress(el)
})