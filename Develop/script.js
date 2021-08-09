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