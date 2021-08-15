// Initial welcome prompt
alert("Welcome to password Genie. Please Click the Generate Password button, and follow the promts.");

// Password length

function getPasswordLength() {

   var lengthOfPassword = prompt("Please type in the length (must be from 8 to 128 characters) of your password.");
   while (lengthOfPassword < 8 || lengthOfPassword > 128 || lengthOfPassword == null) {
      // If entry is invalid, use prompt again to re-define length variable
      alert("You did not choose a valid length. Please try again")
      lengthOfPassword = prompt("Please type in the length (must be from 8 to 128 characters) of your password.");
   }
   // Return length to function call variable
   return lengthOfPassword;
};

// Password build

function initializePassword() {
   
   // User Alert
   alert("Confirm which character types you need!");

   // LC
   var hasLowercase = confirm("Lower Case?");
   // UC
   var hasUppercase = confirm("Upper Case?");
   // Numbers
   var hasNumerics = confirm("Numbers");
   // SC
   var hasSpecials = confirm("Special Characters?");

   // Array
   var confirmArray = new Array(hasLowercase, hasUppercase, hasNumerics, hasSpecials);
   // Array Check
   var allPromptsFalseCheck = confirmArray.every( confirmElement  => !confirmElement );
   // Oh-no
   if (allPromptsFalseCheck) {
      alert("Please Select Character Types")
      initializePassword();   
   };

   // Shit for prompts
   const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
   const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const numeric = '0123456789';
   const specialChars = `!"#$%&'()*+,-./:;<>=?@[]^_\\{}|~`;

   var characterRange = '';

   if (hasLowercase) { 
      characterRange += lowerCase; 
   }
   if (hasUppercase) { 
      characterRange += upperCase; 
   }
   if (hasNumerics) { 
      characterRange += numeric; 
   }
   if (hasSpecials) { 
      characterRange += specialChars; 
   }

   // Return 
   return characterRange;
};

// Password

function generatePassword() {

  
   var userLength = getPasswordLength();
   var characters = initializePassword();
   
   var yourPassword = '';  
   for (let i = 0; i < userLength; i++) {
      yourPassword += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return yourPassword;
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener
generateBtn.addEventListener("click", writePassword);