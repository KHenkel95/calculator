const DIVZERORESPONSE = 'Nice try';
let firstNum = null;
let secondNum = null;
let lastButton;
let tempNum;
let operator = null;
let result;
const display = document.querySelector('.display');
const buttonContainer = document.querySelector('.button-container');

display.textContent = '0';

buttonContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className){
        case 'digit-button':
            if(
                display.textContent === '0' || lastButton === 'ac'
                || lastButton === 'operand'
                || display.textContent === DIVZERORESPONSE
            ){
                display.textContent = '';
                display.textContent += target.textContent;
                tempNum = Number(display.textContent);
            }

            else{
                display.textContent += target.textContent;
                tempNum = Number(display.textContent);    
            }
            lastButton = 'digit';
            break;
        case 'operand-button':
            if(operator !== null && lastButton !=='operand'){
                secondNum = tempNum;
                result = operate(operator, firstNum, secondNum);
                display.textContent = result;
                firstNum = result;
                operator = target.textContent;
                display.textContent += operator;
                secondNum = null;
            }
            else if(display.textContent === DIVZERORESPONSE){
                display.textContent = '0';
                break;
            }
            else{
                if(lastButton === 'operand'){
                    display.textContent = display.textContent.slice(0, -1);
                }
                firstNum = tempNum;
                operator = target.textContent;
                display.textContent += operator;    
            }
            lastButton = 'operand';
            break;
        case 'equal-button':
            if(operator === null || lastButton === 'operand'){
                break;
            }
            secondNum = tempNum;
            result = operate(operator, firstNum, secondNum);
            tempNum = result;
            display.textContent = result;
            lastButton = 'equal';
            operator = null;
            break;
        case 'ac-button':
            display.textContent = '0';
            tempNum = null;
            firstNum = null;
            secondNum = null;
            operator = null;
            lastButton = 'ac';
            break;
    }
});

function add(firstNum, secondNum){
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    return firstNum / secondNum;
}

function roundToThreeDecimals(num){
    return Math.round(num * 1000) / 1000;
}

function operate(operator, firstNum, secondNum){
    switch(operator){
        case '+':
            return roundToThreeDecimals(add(firstNum, secondNum));
        case '-':
            return roundToThreeDecimals(subtract(firstNum, secondNum));
        case '*':
            return roundToThreeDecimals(multiply(firstNum, secondNum));
        case '/':
            if(secondNum === 0){
                return DIVZERORESPONSE;
            }
            else{
                return  roundToThreeDecimals(divide(firstNum, secondNum));
            }
    }
}