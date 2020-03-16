let regEx = new RegExp('^\d+$');

const showText = () => {
    console.log(field.value);
    let y = field.value;
    let x = field.value.match(regEx);
    console.log(x);
    let z = y.split(/[+-\/*%^]/);
    console.log(z);
    //operate(z);
    try {
        operate(y);
    } catch (error) {
        result.innerHTML = "Invalid input";
    }
    
}

const operate = (x) => {
   result.innerHTML = "Result: " + eval(x);
   console.log(eval(x));
}

var add = false;
var subtract = false;
var multiply = false;
var divide = false;
var exponent = false;
var modulus = false;




let field = document.getElementById("field");
let result = document.getElementById("result");

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener('click', showText);

let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let modulusButton = document.getElementById("modulusButton")
let exponentButton = document.getElementById("exponentButton");

addButton.addEventListener('click', () => {
    field.value += '+';
    add = true;
    document.getElementById("field").focus();
});
subtractButton.addEventListener('click', () => {
    field.value += '-';
    subtract = true;
    document.getElementById("field").focus();

});
multiplyButton.addEventListener('click', () => {
    field.value += '*';
    multiply = true;
    document.getElementById("field").focus();

});
divideButton.addEventListener('click', () => {
    field.value += '/';
    divide = true;
    document.getElementById("field").focus();

});

modulusButton.addEventListener('click', () => {
    field.value += '%';
    modulus = true;
    document.getElementById("field").focus();

});

exponentButton.addEventListener('click', () => {
    let initialValue = field.value;
    field.value += "(^2)";
    exponent = true;
    operate(initialValue * initialValue);
    document.getElementById("field").focus();
});

field.addEventListener("keypress", validate);

function validate() {
    console.log(field.value);

}














