const passwordBox = document.getElementById("generator");
const lenght = 15; 

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*?+=";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let generator= "";
    generator += upperCase[Math.floor(Math.random() * upperCase.length)];
    generator += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    generator += numbers[Math.floor(Math.random() * numbers.length)];
    generator += symbols[Math.floor(Math.random() * symbols.length)];

    while(lenght > password.length){
        generator += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = generator 
}