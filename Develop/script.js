// Initial welcome prompt
alert("Welcome to password Genie. Please Click the generate password button, and follow the promts.");

// Password length

function getPasswordLength() {

   var lengthOfPassword = prompt("Please type in the length (must be from 8 to 128 characters) of your password.");
   while (lengthOfPassword < 8 || lengthOfPassword > 128 || lengthOfPassword == null) {
      // If entry is invalid, use prompt again to re-define length variable
      alert("You did not choose a valid length. Try it again, this time with some gusto!")
      lengthOfPassword = prompt("Please type in the length (must be from 8 to 128 characters) of your password.");
   }
   // Return length to function call variable
   return lengthOfPassword;

};

// Password build

function initializePassword() {
   
   // User Alert
   alert("Confirm which character types!");

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
   }