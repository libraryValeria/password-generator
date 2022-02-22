// constants for password criterias
const passwordText = document.querySelector("#password");

// when I click on "generate" prompts pop up for the user
// variables for forms
var upperPrompt = document.getElementById("upper-prompt");
var lowerPrompt = document.getElementById("lower-prompt");
var numberPrompt = document.getElementById("number-prompt");
var symbolPrompt = document.getElementById("symbol-prompt");
var lengthPrompt = document.getElementById("length-prompt");

// array for all prompts
var prompts = [upperPrompt, lowerPrompt, numberPrompt, symbolPrompt, lengthPrompt];

// collect user inputs for each criteria
var userInput = document.getElementsByName("answer");
// convert user input node list to array
var inputArr = Array.from(userInput);
// console.log(userInput);

// GET random cases for each criteria
var upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var numberCase = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// open criteria form (UPPERCASE)
function openForm() {
  prompts[0].style.display = "block";
  
}
// next criteria presents to the user (LOWERCASE)
function lowerForm() {
  prompts[1].style.display = "block";
  prompts[0].style.display = "none";
  // get random on click if user checked yes
  for (i = 0; i < inputArr.length; i += 2) {
    if (inputArr[i].checked) {
      console.log(upperCase);
    }
  }
  return upperCase;
}

// next criteria presents to the user (NUMBERS)
function numberForm() {
  prompts[2].style.display = "block";
  prompts[1].style.display = "none";
  for (i = 0; i < inputArr.length; i += 2) {
    if (inputArr[i].checked) {
      console.log(lowerCase);
    }
  }
  return lowerCase;
}
// next criteria presents to the user (SYMBOLS)
function symbolForm() {
  prompts[3].style.display = "block";
  prompts[2].style.display = "none";
  for (i = 0; i < inputArr.length; i += 2) {
    if (inputArr[i].checked) {
      console.log(numberCase);
    }
  }
  return numberCase;
}
// function generates a random symbol if user checks yes
function symbolsCase() {
  const symbols = "!@#$%^&*(){}[]+=<>?/";
  var randoSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  prompts[4].style.display = "block";
  prompts[3].style.display = "none";
  for (i = 0; i < inputArr.length; i += 2) {
    if (inputArr[i].checked) {
      console.log(randoSymbol);
    }
  }
  return randoSymbol;
}

// length function-- potential for loop
function lengthCase(){
  console.log("howdy partner ;)");

}
// generate random password
