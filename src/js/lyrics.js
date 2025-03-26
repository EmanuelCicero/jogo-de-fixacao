const displayLetter = document.querySelector(".displayName")
const formButton = document.querySelector("#formButton")
const btnBack =  document.querySelector(".btn-back")

function vowelsInOrder(){
  const vowels = ["A a", "E e", "I i" , "O o" , "U u"]
  let index = 0
  
  function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1 )) + min
  }

  function createButton (n){
    const createButton = document.createElement("button")
    createButton.classList.add("mainButton")
    formButton.appendChild(createButton)
    createButton.innerHTML = n
    
    createButton.addEventListener("click", function() {
      checkLetter(n);
    });
  }

  function checkLetter(letter) {
    const letterShown = displayLetter.textContent;
    
    if (letter === letterShown) {
      index++
      randomLetterButton()
      if (index >= vowels.length){
        vowelsInOrder()
      }
    } else {
      alert("Errado, tente novamente.");
    }
  }

  function randomLetterButton(){
  formButton.innerHTML = ""
  const getLetterDisplay = letterDisplay()
  let n = []
  const positionRandom = randomNumber(0,3)
  
  for (let i = 0; i < 4; i++){
    if (i === positionRandom){
      n.push(getLetterDisplay)
    }else{
      let letterRandom;
      do {
        letterRandom = getRandomItems(vowels)
      } while (letterRandom === getLetterDisplay || n.includes(letterRandom))
        n.push(letterRandom)
      }
    }
    n.forEach(num => createButton(num))
  }

  function getRandomItems(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function letterDisplay () {
    return displayLetter.innerText = vowels[index]
  }

  randomLetterButton()
}

function vowelsRandom(){
  const vowels = ["A a", "E e", "I i" , "O o" , "U u"]
  let index = 0
  
  function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1 )) + min
  }

  function createButton (n){
    const createButton = document.createElement("button")
    createButton.classList.add("mainButton")
    formButton.appendChild(createButton)
    createButton.innerHTML = n
    
    createButton.addEventListener("click", function() {
      checkLetter(n);
    });
  }

  function checkLetter(letter) {
    const letterShown = displayLetter.textContent;
    
    if (letter === letterShown) {
      index++
      randomLetterButton()
      if (index >= vowels.length){
        vowelsRandom()
      }
    } else {
      alert("Errado, tente novamente.");
    }
  }

  function randomLetterButton(){
  formButton.innerHTML = ""
  const getLetterDisplay = letterDisplay()
  let n = []
  const positionRandom = randomNumber(0,3)
  
  for (let i = 0; i < 4; i++){
    if (i === positionRandom){
      n.push(getLetterDisplay)
    }else{
      let letterRandom;
      do {
        letterRandom = getRandomItems(vowels)
      } while (letterRandom === getLetterDisplay || n.includes(letterRandom))
        n.push(letterRandom)
      }
    }
    n.forEach(num => createButton(num))
  }

  function getRandomItems(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function letterDisplay () {
    return displayLetter.innerText = getRandomItems(vowels)
  }

  randomLetterButton()
}

function alphabetInOrder(){
  const alphabet = ["A a", "B b", "C c", "D d", "E e", "F f", "G g", "H h", "I i", "J j", "K k", "L l", "M m", 
  "N n", "O o", "P p", "Q q", "R r", "S s", "T t", "U u", "V v", "W w", "X x", "Y y", "Z z"]
  let index = 0
  
  function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1 )) + min
  }

  function createButton (n){
    const createButton = document.createElement("button")
    createButton.classList.add("mainButton")
    formButton.appendChild(createButton)
    createButton.innerHTML = n
    
    createButton.addEventListener("click", function() {
      checkLetter(n);
    });
  }

  function checkLetter(letter) {
    const letterShown = displayLetter.textContent;
    
    if (letter === letterShown) {
      index++
      randomLetterButton()
      if (index >= alphabet.length){
        alphabetInOrder()
      }
    } else {
      alert("Errado, tente novamente.");
    }
  }

  function randomLetterButton(){
  formButton.innerHTML = ""
  const getLetterDisplay = letterDisplay()
  let n = []
  const positionRandom = randomNumber(0,3)
  
  for (let i = 0; i < 4; i++){
    if (i === positionRandom){
      n.push(getLetterDisplay)
    }else{
      let letterRandom;
      do {
        letterRandom = getRandomItems(alphabet)
      } while (letterRandom === getLetterDisplay || n.includes(letterRandom))
        n.push(letterRandom)
      }
    }
    n.forEach(num => createButton(num))
  }

  function getRandomItems(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function letterDisplay () {
    return displayLetter.innerText = alphabet[index]
  }

  randomLetterButton()
}

function alphabetRandom(){
  const alphabet = ["A a", "B b", "C c", "D d", "E e", "F f", "G g", "H h", "I i", "J j", "K k", "L l", "M m", 
    "N n", "O o", "P p", "Q q", "R r", "S s", "T t", "U u", "V v", "W w", "X x", "Y y", "Z z"]
    let index = 0
    
    function randomNumber (min , max){
      return Math.floor(Math.random() * (max - min + 1 )) + min
    }
  
    function createButton (n){
      const createButton = document.createElement("button")
      createButton.classList.add("mainButton")
      formButton.appendChild(createButton)
      createButton.innerHTML = n
      
      createButton.addEventListener("click", function() {
        checkLetter(n);
      });
    }
  
    function checkLetter(letter) {
      const letterShown = displayLetter.textContent;
      
      if (letter === letterShown) {
        index++
        randomLetterButton()
        if (index >= alphabet.length){
          alphabetRandom()
        }
      } else {
        alert("Errado, tente novamente.");
      }
    }
  
    function randomLetterButton(){
    formButton.innerHTML = ""
    const getLetterDisplay = letterDisplay()
    let n = []
    const positionRandom = randomNumber(0,3)
    
    for (let i = 0; i < 4; i++){
      if (i === positionRandom){
        n.push(getLetterDisplay)
      }else{
        let letterRandom;
        do {
          letterRandom = getRandomItems(alphabet)
        } while (letterRandom === getLetterDisplay || n.includes(letterRandom))
          n.push(letterRandom)
        }
      }
      n.forEach(num => createButton(num))
    }
  
    function getRandomItems(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
  
    function letterDisplay () {
      return displayLetter.innerText = getRandomItems(alphabet)
    }
  
    randomLetterButton()
}


btnBack.addEventListener("click", () => {
  window.location.href = "configLyric.html"
})

let storedFunction = localStorage.getItem("functionLyrics");
switch (storedFunction) {
  case "vowelsInOrder":
    vowelsInOrder();
    break;
  case "vowelsRandom":
    vowelsRandom();
    break;
  case "alphabetInOrder":
    alphabetInOrder();
    break;
  case "alphabetRandom":
    alphabetRandom();
    break;
}