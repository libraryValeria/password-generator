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

// open criteria form (UPPERCASE)
function openForm() {
  generateBtn.style.display = "none";
  prompts[0].style.display = "block";
}
// next criteria presents to the user (LOWERCASE)
function lowerForm() {
  prompts[1].style.display = "block";
  prompts[0].style.display = "none";
}

function yesUpper() {
  console.log("deadass ;)");
}
function noUpper() {
  console.log("nahhh baby ;(");
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

//length criteria function for password
function lengthTest() {
  // get user length input
  var lengthInput = document.getElementById("length-input").value;

  // display password page
  var passwordPage = document.getElementById("password");
  passwordPage.style.display = "block";
  prompts[4].style.display = "none";

  // boundaries for password length
  var lengthMin = 9;
  var lengthMax = 27;
  if (lengthInput >= lengthMin && lengthInput <= lengthMax) {
    console.log(lengthInput);
    
    for (let i = 0; i < lengthInput; i++) {
      // GET random cases for each criteria
      var upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      var numberCase = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      
      //display random password to user
      var thePassword = document.getElementById("the-password");
      var randomPassword = upperCase + lowerCase + numberCase;

      thePassword.innerHTML = randomPassword;
      console.log(randomPassword);
    }
  } else {
    console.log("* dead-ASS ;p *");
  }
}
