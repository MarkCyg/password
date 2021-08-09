/* **********************************************
   JAVASCRIPT PASSWORD GENERATOR: MAXIMUM PASSAGE
   Directed by Brent Gaines
   Cinematography by Brent Gaines
   Password Generator Voice: Daniel Day-Lewis
   **********************************************
*/

// Initial welcome prompt
alert("Welcome, gentle and gracious user, to my password generator! Boy, doesn't that beautiful red button look tempting? Someone should click on it.");

// *** FUNCTION TO GET LENGTH OF PASSWORD ***

function getPasswordLength() {

   var lengthOfPassword = prompt("Please type in the length (must be from 8 to 128 characters) of your desired password.");
   while (lengthOfPassword < 8 || lengthOfPassword > 128 || lengthOfPassword == null) {
      // If entry is invalid, use prompt again to re-define length variable
      alert("You did not choose a valid length. Try it again, this time with some gusto!")
      lengthOfPassword = prompt("Please type in the length (must be from 8 to 128 characters) of your desired password.");
   }
   // Return length to function call variable
   return lengthOfPassword;

};

// *** FUNCTION TO CONFIRM CHARACTER TYPES AND BUILD STRING OF CHARACTER RANGE FOR PASSWORD ***

function initializePassword() {
   
   // Alert user with instructions
   alert("Now, please confirm which character types you'd like in your password. You must choose at least one!");

   // Prompt for lowercase characters
   var hasLowercase = confirm("Would you like lowercase letters in your password?");
   // Prompt for uppercase
   var hasUppercase = confirm("How about some uppercase letters? They're pretty cool, right?");
   // Prompt for numbers
   var hasNumerics = confirm("Alright, how about numeric characters? Numbers never hurt anybody!");
   // Prompt for special characters
   var hasSpecials = confirm("Surely, you can't leave out special characters! Or can you...");

   // Initiliaze a new array consisting of the confirm prompt Boolean variables
   var confirmArray = new Array(hasLowercase, hasUppercase, hasNumerics, hasSpecials);
   // Check if every value in the array is false 
   var allPromptsFalseCheck = confirmArray.every( confirmElement  => !confirmElement );
   // If so, prompt the user to try again and use recursion to re-call the function
   if (allPromptsFalseCheck) {
      alert("You didn't pick any of the types. We can't go strolling around the internet with a blank password. Give it another go.")
      initializePassword();   
   }

   // *** Get the string for the full range of desired character types through condition statements ***
   
   // Declare constant character range types
   const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
   const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const numeric = '0123456789';
   const specialChars = `!"#$%&'()*+,-./:;<>=?@[]^_\\{}|~`;

   // Start a full range variable as a blank string to add to upon condition
   var characterRange = '';

   // If each confirmation is true, add the corresponding string to the range
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

   // Return the character range
   return characterRange;
};

// * MAIN FUNCTION FOR PASSWORD GENERATION

function generatePassword() {

   // Call both above functions through usable variables to prime for password generation
   var userLength = getPasswordLength();
   var characters = initializePassword();

   // Initialize password string to be passed to password variable in the writePassword() function
   var yourPassword = '';
   // i will iterate n times, with n being the desired password length 
   for (let i = 0; i < userLength; i++) {
      // Make the string random selections through the character set
      yourPassword += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   // Return the password to the writePassword function
   return yourPassword;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);