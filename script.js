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

// open criteria form
function openForm() {
  prompts[0].style.display = "block";
}

// next criteria presents to the user
function lowerForm() {
   prompts[1].style.display = "block";
   prompts[0].style.display = "none";
  }

function numberForm() {
  prompts[2].style.display = "block";
  prompts[1].style.display = "none";
}

function symbolForm() {
  prompts[3].style.display = "block";
  prompts[2].style.display = "none";
}

// then I am asked if i'd like an upper case in my password
// then I input "y" or "n"
// when the users input is given the next prompt is displayed
// user selects YES

//*** NEXT figure out a function for displaying the next prompt after answering the first ***
//var promptTwo = document.getElementById("lower-prompt").style.display = "block";
// user selects NO
