// constants for password criterias
const passwordText = document.querySelector("#password");
var generateBtn = document.getElementById("generate-button");
// when I click on "generate" prompts pop up for the user
// variables for forms
var upperPrompt = document.getElementById("upper-prompt");
var lowerPrompt = document.getElementById("lower-prompt");
var numberPrompt = document.getElementById("number-prompt");
var symbolPrompt = document.getElementById("symbol-prompt");
var lengthPrompt = document.getElementById("length-prompt");

// array for all prompts
var prompts = [
  upperPrompt,
  lowerPrompt,
  numberPrompt,
  symbolPrompt,
  lengthPrompt,
];

// yes and no array
var yes = document.querySelector("div.criteria-form.main option[value='yes']");
var no = document.querySelector("div.criteria-form.main option[value='no']");
var choice = [yes, no];

// GET random cases for each criteria
var upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var numberCase = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// open criteria form (UPPERCASE)
function openForm() {
  generateBtn.style.display = "none";
  prompts[0].style.display = "block";
  if (choice[0]) {
    console.log("howdy partner");
  }
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
// function generates a random symbol if user checks yes
const symbols = "!@#$%^&*(){}[]+=<>?/";
var symbolCase = symbols[Math.floor(Math.random() * symbols.length)];

function lengthForm() {
  prompts[4].style.display = "block";
  prompts[3].style.display = "none";
}

//display password page
function password() {
  var passwordPage = document.getElementById("password");
  passwordPage.style.display = "block";
}

//for loop with boudaries test
function lengthTest() {
  // get user length input
  var lengthInput = document.getElementById("length-input").value;
  
  var lengthMin = 9;
  var lengthMax = 27;
  if(lengthInput >= lengthMin && lengthInput <= lengthMax){
    console.log(lengthInput);
  } 
  else{
    console.log('* dead-ASS ;p *')
  }
 
}
