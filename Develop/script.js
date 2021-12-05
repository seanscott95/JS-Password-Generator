// Assignment Code
var generateBtn = document.querySelector("#generate");
var  criteria = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialCharacters: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  numbers: "123456789"
};
//array function
var getCriteria = {
  getLowerCase: function() {
    return criteria.lowerCase[Math.floor(Math.random() * criteria.lowerCase.length)];
  },
  getUpperCase: function() {
    return criteria.upperCase[Math.floor(Math.random() * criteria.upperCase.length)];
  },
  getSpecialCharacters: function() {
    return criteria.specialCharacters[Math.floor(Math.random() * criteria.specialCharacters.length)];
  },
  getNumbers: function() {
    return criteria.numbers[Math.floor(Math.random() * criteria.numbers.length)];
  }
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};
//generate password
function generatePassword() {
  var lowerCasePassword = window.confirm("Do you want lower cases in your password?");
  var upperCasePassword = window.confirm("Do you want upper cases in your password?");
  var numbersPassword = window.confirm("Do you want numbers in your password?");
  var specialCharactersPassword = window.confirm("Do you want special characters in your password?");
  var lengthPassword = window.prompt("Between 8 and 128 characters what length do you want your password?");
  var minimumCount = 0;
  var minimumLowerCasePassword = "";
  var minimumUpperCasePassword = "";
  var minimumNumbersPassword = "";
  var minimumSpecialCharactersPassword = "";
  if (lowerCasePassword === true) {
    minimumLowerCasePassword = getCriteria.getLowerCase();
    minimumCount++;
  }
  if (upperCasePassword === true) {
    minimumUpperCasePassword = getCriteria.getUpperCase();
    minimumCount++;
  }
  if (numbersPassword === true) {
    minimumNumbersPassword = getCriteria.getNumbers();
    minimumCount++;
  }
  if (specialCharactersPassword === true) {
    minimumSpecialCharactersPassword = getCriteria.getSpecialCharacters();
    minimumCount++;
  }
  var randomPasswordGenerated = "";
  for (i=0; i < parseInt(lengthPassword) - minimumCount; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
  }
  randomPasswordGenerated += minimumNumbersPassword;
  randomPasswordGenerated += minimumLowerCasePassword;
  randomPasswordGenerated += minimumUpperCasePassword;
  randomPasswordGenerated += minimumSpecialCharactersPassword;

  return randomPasswordGenerated;
};

generateBtn.addEventListener("click", writePassword);

// line 60 for (i=0; i < parseInt(lengthPassword) - minimnumCount; i++) {
//  var randomNumberPicked = Math.floor(Math.random() * 4);

// line 62 randomPasswordGenerated += randomNumberPicked;


// var randomNumberPicked = Math.floor(Math.random() * 4);
// randomPasswordGenerated += password.charAt(Math.floor(Math.random() * lengthPassword.length));

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