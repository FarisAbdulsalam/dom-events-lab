/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let num1 = ''; //input 1
let num2 = ''; //input 2
let resultDisplay = ''; //result displayed to the user
let result = '' // stored result
let operator = '' // operator
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(event.target.innerText>=0 && event.target.innerText<=9){
            if(result !== ''){
                clearData();
                num1 = event.target.innerText;
            }
            else if(!operator){
                num1 = num1+event.target.innerText;
                resultDisplay = num1;
                //console.log("test 2")

            } else if(operator){ 
                num2 = num2+event.target.innerText;
                resultDisplay = num2;
                console.log("test 3")
            }
        }
         else{
            if(event.target.innerText === "="){
                result = Math.floor(eval(num1 + operator + num2));
                //console.log("test 4");
                resultDisplay = result;
            } else if(event.target.innerText === "C"){
                clearData();                
            } else {
                operator = event.target.innerText;
                //console.log("test 6")

            }
         }
      display.innerText = resultDisplay;
      console.log('num1', num1, ' num2', num2, ' resultdisplay', resultDisplay, ' result', result, ' operator', operator);
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//         console.log(event.target);
//       // Do something with a number
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//     }
//   });
  
/*-------------------------------- Functions --------------------------------*/

clearData = () => {
        num1 = '';
        num2 = '';
        operator = '';
        result = '';
        resultDisplay = '';
        //console.log("test 5")
}