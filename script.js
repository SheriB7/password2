// Assignment Code
//this will give result in box for generated password

var resultE1 = document.getElementById("#result");
var lengthE1 = document.getElementById("#length");
var uppercaseE1 = document.getElementById("#uppercase");
var lowercaseE1 = document.getElementById("#lowercase");
var numbersE1 = document.getElementById("#numbers");
var symbolsE1 = document.getElementById("#symbols");
var generateE1 = document.getElementById("#generate");
var clipboardE1 = document.getElementById("#clipboard");
var passwordTextEl = document.getElementById("#password")
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol

};

function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = '';
  var typesCount = lower + upper + number + symbol;
  console.log ("typesCount: " , typesCount);
  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter 
  (item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return '';  
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0]
      generatePassword = randomFunc[funcName]();
    });
  }
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  var symbols = "!@#$%^&*?+<>=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
