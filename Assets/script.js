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

  var counter = 0;
  var counterLowerCase = "";
  var counterUpperCase = "";
  var counterNumbers = "";
  var counterSpecialCharacters = "";
};