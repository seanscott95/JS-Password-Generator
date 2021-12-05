// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generatePassword() {
  var lowerCasePassword = window.confirm("Do you want lower cases in your password?");
  var upperCasePassword = window.confirm("Do you want upper cases in your password?");
  var numbersPassword = window.confirm("Do you want numbers in your password?");
  var specialCharactersPassword = window.confirm("Do you want special characters in your password?");
  var lengthPassword = window.prompt("What length do you want your password?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// click on button generate prompts for password criteria
// select criteria to use
// prompt length between 8 and 128 char
// prompt to use lowercase, uppercase, numeric, and/or special characters
// with each prompt my input should be validated and at least one character type should be selected
//generate password once all prompts answered
// display page as an alert or written to page


//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page