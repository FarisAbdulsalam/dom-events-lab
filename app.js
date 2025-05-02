// can only do two numbers at a time (multiple digits per number work fine)
// couldn't figure out how to do more than 2 numbers (ex: press 2 + 2 then press an operator to use the previous result as num1)
/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let num1 = ''; //input 1
let num2 = ''; //input 2
let resultDisplay = ''; //result displayed to the user
let result; // stored result
let operator = ''; // operator
let operatorStored = '';
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerText >= 0 && event.target.innerText <= 9) {
            if (!operator) {
                num1 = num1 + event.target.innerText;
                resultDisplay = num1;
                //console.log("test 2")
            } else if (operator) {
                num2 = num2 + event.target.innerText;
                resultDisplay = num2;
                //console.log("test 3")
            }
        } else {
            if (event.target.innerText === "=") {
                result = Math.floor(calculate(num1, num2, operatorStored));
                //console.log("test 4");
                resultDisplay = result;
            } else if (event.target.innerText === "C") {
                clearData();
            } else {
                operator = event.target.innerText;
                operatorStored = operator;
                console.log(operator, operatorStored);
            }
        }
        display.innerText = resultDisplay;
        console.log('num1', num1, ' num2', num2, ' resultdisplay', resultDisplay, ' result', result, ' operator', operator);
        // This log is for testing purposes to verify we're getting the correct value
        console.log(event.target.innerText);
    });
});

/*-------------------------------- Functions --------------------------------*/
// clears data
const clearData = () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = null;
    resultDisplay = '';
    operatorStored = '';
    //console.log("test 5")
}

// takes two numbers and operator to perform the operation
const calculate = (Num1, Num2, Operator) => {
    let calculated;
    switch (Operator) {
        case '+':
            calculated = parseInt(Num1) + parseInt(Num2);
            //console.log("test addition");
            break;
        case '-':
            calculated = Num1 - Num2;
            //console.log("test minus");
            break;
        case '/':
            calculated = Num1 / Num2;
            //console.log("test divide");
            break;
        case '*':
            calculated = Num1 * Num2;
            //console.log("test multiplication");
            break;
    }
    return String(calculated); // returns the result of the operation
}