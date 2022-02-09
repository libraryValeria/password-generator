// constants for password criterias
const passwordText = document.querySelector("#password");

const passwordUpper = document.querySelector("#checkUpper");
const passwordLower = document.querySelector("#checkLower");
const passwordNumber = document.querySelector("#checkNumeric");
const passwordSpecial = document.querySelector("#checkSpecial");

// * ... NEXT function of button "generate"
// when I click on "generate" a window pops up
// form functions
var upperPrompt = document.getElementById("upper-prompt");
var lowerPrompt = document.getElementById("lower-prompt");
var numberPrompt = document.getElementById("number-prompt");
var symbolPrompt = document.getElementById("symbol-prompt");

// array for all prompts
var prompts = [upperPrompt, lowerPrompt, numberPrompt, symbolPrompt];
// open criteria form (UPPERCASE)
function openForm() {
  prompts[0].style.display = "block";
}
// next criteria presents to the user (LOWERCASE)
function lowerForm() {
  prompts[1].style.display = "block";
  prompts[0].style.display = "none";
}
// next criteria presents to the user (NUMBERS)
function numberForm() {
  prompts[2].style.display = "block";
  prompts[1].style.display = "none";
}
// next criteria presents to the user (SYMBOLS)
function symbolForm() {
  prompts[3].style.display = "block";
  prompts[2].style.display = "none";
}

// GET random cases for each criteria
var upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var numberCase = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

function symbolsCase() {
  const symbols = "!@#$%^&*(){}[]+=<>?/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// function collect user inputs for each criteria
var answerYes = document.getElementsByName("answer-yes");
var answerNo = document.getElementsByName("answer-no");
