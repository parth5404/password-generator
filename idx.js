const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 11;
let checkCount = 0;
handleSlider();

function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    
}

function getRanInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber(){
    return getRanInt(0,9);
}

function genlowercase(){
    return String.fromCharCode(getRanInt(97,123));
}

function genuppercase(){
    return String.fromCharCode(getRanInt(65,91));
}

function gensymbols(){
    return symbols.charAt(getRanInt(0,symbols.length));
}

function pwstrength(){
    
}