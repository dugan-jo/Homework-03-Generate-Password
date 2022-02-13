// Assignment Code
//var declarations 
var generateBtn = document.querySelector("#generate");
var lowLett = "abcdefjhijklmnopqrstuvwxyz".split("");
var uppLett = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "123456789".split("");
var spelChar = "!@#$%^&*()".split("");

var mainArray = [];
console.log(mainArray);
var passwordLength = [];
var password = [];




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("generate");


//main function - generates the letters, number and symbols used for password
function generatePassword() {
  var mainArray = [];
  passwordLength = parseInt( 
    prompt("please choose the lenght of your password, minimum of 8 characters and maximum of 120 characters") 
    );

    // password length
  if (passwordLength < 7 || passwordLength > 129)  {
    window.alert("please try again, password must be larger than 8 and smaller than 128"); //return is conditions are not met
    return generatePassword(); //return to generate password
  }
  console.log.apply(passwordLength);

  var randomLowerCase = window.confirm("Would you like to use lower case letters?");
  if(randomLowerCase == true) {
    mainArray = mainArray.concat(lowLett);
  };

  var randomUpperCase = window.confirm("Would you like to use UPPER case letters?");
  if (randomUpperCase == true) {
    mainArray = mainArray.concat(uppLett)
  };

  var randomSpecial = window.confirm("Would you like to use Speical case symbols?");
  if(randomSpecial == true) {
    mainArray = mainArray.concat(spelChar)
  };

  var randomNumber = window.confirm("Would you like to use numbers?");
  if(randomNumber == true) {
    mainArray = mainArray.concat(num)
  };

  if (randomLowerCase == false && randomUpperCase == false && randomSpecial ==false && randomNumber == false) {
    window.alert("ERROR");
    return generatePassword();
  }

  console.log(mainArray)

  // this will iterate over your choosen charaters array to get a random password
 
  for (var i = 0; i < passwordLength; i++) {
      password += mainArray[Math.floor(Math.random() * mainArray.length)];
  }
  
  
  console.log(password);
  // return passwordText;
  return password;
}

















// all trash below me! do not use






// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // isolating the truthy values!
// if (randomLowerCase == true) { //if yes for lower case 
//     randomLowerCase = lowerCaseLetters; // if yes, then attaching the lowercase array
//     newNumbers.push(randomLowerCase); // to newNumbers var
// };

// //repeat above (this could probably be a function since its repeated 4 times.)
// if (randomNumber == true) {
//   randomNumber = numberChar;
//   newNumbers.push(randomNumber);
// }

// if (randomSpecial  == true) {
//   randomSpecial = specialChar;
//   newNumbers.push(randomSpecial);
// }

// if (randomUpperCase  == true) {
//   randomUpperCase = upperCaseLetters;
//   newNumbers.push(randomUpperCase);
// }

// console.log(newNumbers); //check to make sure the arrays are in the new var newNumber
// for (var j = 0; j < newNumbers.length; j++) {
// final += newNumbers[j];
// }
// console.log(final);

// var finalFinal= final.split(",")

// console.log(finalFinal);


// var passwordLength = 10;
// var password = " ";

// function genPassword() {

//   for (var i = 0; i < passwordLenght; i++) {
//     var randomNumber = Math.floor(Math.random() * password.length);
//     password += password.substring(randomNumber, randomNumber +1)
//   }
//   console.log(password);
// }

// document.getElementById("password").value = password;
// genPassword();
// console.log(password);

//   this.passwordLenght = 10; 
//   // While there remain elements to shuffle...
//   function shuffleArray(finalFinal) {
//     for (let i = finalFinal.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [finalFinal[i], finalFinal[j]] = [finalFinal[j], finalFinal[i]];
//     }
// }
// shuffleArray();


// for (var i = 0; i <= passwordLenght - 1; i++) {
//   password = password + final.charAt(Math.floor(Math.random() + Math.floor(final.length - 1)))
// }

// console.log(password);




// console.log(final);
// var another = [];
// another = final.split(",")

// console.log(another);



// var final = newNumbers.join(); //turn arrays into a string. 




// passwordLenght = 10; //set password length
// var password = []; //password is a string


//for loop with math to get password!
// for (var i = 0; i < passwordLenght; i++) {
  // password.charAt
  // password.length += another.charAt(Math.floor(Math.random() * another.length));
  // password += another.charAt([Math.floor(Math.random() * (another.length))]);
  // password = password[Math.floor(Math.random() * another.length)];

// }

// items[Math.floor(Math.random()*items.length)]
// while(password = passwordLenght) {
  // generate a random number
  // password += passwordLenght(Math.floor(Math.random() * (0, another.length - 1))) += password;
// }
// passwordLenght();


// console.log(password); //should work!










// // Write password to the #password input
// function writePassword() {
//   // var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var passwordLength = window.prompt("please choose the lenght of your password, minimum of 8 characters and maximum of 120 characters");
//   if (passwordLength > 120 || passwordLength < 8) {
//     window.prompt("please try again, password must be larger than 8 and smaller than 120");
//     writePassword();
//   } 
 
//   var randomLowerCase = window.confirm("Would you like to use lower case letters?");
//   var randomUpperCase = window.confirm("Would you like to use UPPER case letters?");
//   var randomSpecial = window.confirm("Would you like to use Speical case symbols?");
//   var randomNumber = window.confirm("Would you like to use numbers?")
//   var total = [randomLowerCase, randomNumber, randomSpecial, randomUpperCase];

//   for (var i = 0; i < total.length; i++) {
//     if (total[i] == true) {
//       total.split()
//       return total;
//     }
//   }


 
//   // formula that says
//   //for loop 
  
   



  
  
 
  



 



  

//   // if (randomLowerCase && randomUpperCase && randomSpecial && randomNumber == false) {
//   //   window.alert("you must choose at least one option");
//   //   writePassword();
//   // } 

//   // for (var i )

//   // for (var i = 0; i <= passwordLength; i++) {
//   //   varRandom = Math.floor(Math.random() * lowerCaseLetters.lenght)
//   //   passwordText += lowerCaseLetters.substring
//   // }
    
  
// }
 
// console.log(words);
//   // passwordText.value = password;





// writePassword();
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// }
// var randomLowerCase = window.confirm("Would you like to use lower case letters?");
// var randomUpperCase = window.confirm("Would you like to use UPPER case letters?");
// var randomSpecial = window.confirm("Would you like to use Speical case symbols?");
// var randomNumber = window.confirm("Would you like to use numbers?")
// var total = [
//   randomLowerCase, 
//   randomNumber, 
//   randomSpecial, 
//   randomUpperCase];

// newTotal = [];

// for (var i = 0; i < total.length; i++) {
//   if (total[i] === true) {
//     newTotal.concat(total[i]);
//   }
// };



// console.log(total);
// console.log(newTotal);

// console.log(newTotal);

// combined();
