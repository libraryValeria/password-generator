// constants for password criterias
const passwordText = document.querySelector("#password");

const passwordUpper = document.querySelector("#checkUpper");

// when I click on "generate" prompts pop up for the user
// variables for forms
var upperPrompt = document.getElementById("upper-prompt");
var lowerPrompt = document.getElementById("lower-prompt");
var numberPrompt = document.getElementById("number-prompt");
var symbolPrompt = document.getElementById("symbol-prompt");

// array for all prompts
var prompts = [upperPrompt, lowerPrompt, numberPrompt, symbolPrompt];

// collect user inputs for each criteria
var userInput = document.getElementsByName("answer");
var inputArr = Array.from(userInput);

console.log(userInput);
// GET random cases for each criteria
var upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var numberCase = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

function symbolsCase() {
  const symbols = "!@#$%^&*(){}[]+=<>?/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// open criteria form (UPPERCASE)
function openForm() {
  prompts[0].style.display = "block";
}
// next criteria presents to the user (LOWERCASE)
function lowerForm() {
  prompts[1].style.display = "block";
  prompts[0].style.display = "none";
  // get random on click if user checked yes
  for (i = 0; i < inputArr.length; i+= 2) {
    if (inputArr[i].checked) {
      console.log(upperCase);
    } 
  }
}

// next criteria presents to the user (NUMBERS)
function numberForm() {
  prompts[2].style.display = "block";
  prompts[1].style.display = "none";
  for (i = 0; i < inputArr.length; i+= 2) {
    if (inputArr[i].checked) {
      console.log(lowerCase);
    } 
  }

}
// next criteria presents to the user (SYMBOLS)
function symbolForm() {
  prompts[3].style.display = "block";
  prompts[2].style.display = "none";
  for (i = 0; i < inputArr.length; i+= 2) {
    if (inputArr[i].checked) {
      console.log(numberCase);
    } 
  }
}

// function generate random ***
// function for 'no' input (???)
