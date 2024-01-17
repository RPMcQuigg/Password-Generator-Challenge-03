var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = getPasswordLength();
  if (passwordLength === null) return ""; // User canceled

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  var charSet = buildCharSet(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  return generateRandomPassword(charSet, passwordLength);
}

function getPasswordLength() {
  var passwordLength;
  do {
    var lengthInput = prompt("Enter the desired password length (between 8 and 128 characters):");
    if (lengthInput === null) return null; // User canceled
    passwordLength = parseInt(lengthInput, 10);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
    }
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

  return passwordLength;
}



function buildCharSet(lower, upper, numeric, special) {
  var charSet = "";
  if (lower) charSet += "abcdefghijklmnopqrstuvwxyz";
  if (upper) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) charSet += "0123456789";
  if (special) charSet += "!@#$%^&*()_-+=";
  return charSet;
}

function generateRandomPassword(charSet, length) {
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }
  return password;
}
