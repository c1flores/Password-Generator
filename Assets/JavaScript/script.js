
// DOM transversal code for modifying "generate" button 
var generateBtn = document.querySelector("#generate");


// Array appendix for different character types
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '"', '#', '$', "%", '&', "'", '(', ')', '*', ',', '-', '+', '.', '/', ':', ';', ',', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}',
'~', '`'];

// Function to prompt acceptance critera and return updated object values for future referece
function prompts() {
  var isCleared= false;
  do {

    var passwordLength = prompt('Choose a password length between 8 and 128 characters');
    var lowerCase = confirm('Do you want the password to include lowercase characters?');
    var upperCase = confirm('Do you want the password to include uppercase characters?');
    var numeric = confirm('Do you want the password to include numbers?');
    var special = confirm('Do you want the password to include special characters?');

    var userCriteria = {
      passwordLength: passwordLength,
      lowerCase: lowerCase,
      upperCase: upperCase,
      numeric: numeric,
      special: special

    }
   
    if((passwordLength < 8) || (passwordLength > 128))
    alert('Please choose between 8 and 128 characters');

    else if((!lowerCase) && (!upperCase) && (!numeric) && (!special))

    alert('Please choose at least one character type to encrypt password');
    
    else 
    isCleared = true;

  } while(!isCleared);
       return userCriteria;
}


  // Function that does work of converging user responses and making a secure password that aligns with their preferences

  // This function was adapted from Ramesh Fadatare's generateX() function in "JavaScript Project = Password Generator" source code example at url: https://www.sourcecodeexamples.net/2020/09/javascript-project-password-generator.html
  
  function generatePassword() {
    var passwordChoices = prompts();
    var passwordCombination = [];
    var securePassword = "";
    
    if(passwordChoices.lowerCase) {

      for (var i of lowerChar)
        passwordCombination.push(i);

    }

    if(passwordChoices.upperCase) {

      for (var i of upperChar)
        passwordCombination.push(i);

    }

    if(passwordChoices.numeric) {

      for (var i of numbers)
        passwordCombination.push(i);
        
    }

    if(passwordChoices.special) {

      for (var i of specialChar)
        passwordCombination.push(i);

    }
  
    console.log(passwordCombination);

    for (var i = 0; i < passwordChoices.passwordLength; i++ ) {

    securePassword += passwordCombination[Math.floor(Math.random() * passwordCombination.length)];

    }

    console.log(securePassword);

    return securePassword;
}
  
  

// DOM transversal code for browser interpreter to replace passwordText with value generated after program runs
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// DOM transversal code for reading in user "click" to generate password
generateBtn.addEventListener("click", writePassword);

