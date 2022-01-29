// constants for password criterias
const passwordText = document.querySelector("#password");

const passwordUpper = document.querySelector("#checkUpper");
const passwordLower = document.querySelector("#checkLower");
const passwordNumber = document.querySelector("#checkNumeric");
const passwordSpecial = document.querySelector("#checkSpecial");

// * ... NEXT function of button "generate"
// when I click on "generate" a window pops up
// form functions
var lowerForm = document.getElementById("lower-prompt");
var upperForm =
    document.getElementById("upper-prompt");
    
function openForm(){
    upperForm.style.display = "block";
}
 function closeForm(){
    upperForm.style.display = "none"
 }

function nextForm(){
 lowerForm.style.display = "block";
 closeForm();
}

// then I am asked if i'd like an upper case in my password
// then I input "y" or "n"
// when the users input is given the next prompt is displayed
// user selects YES

//*** NEXT figure out a function for displaying the next prompt after answering the first ***
//var promptTwo = document.getElementById("lower-prompt").style.display = "block";
// user selects NO

