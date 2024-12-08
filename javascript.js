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
            if(lastButton === undefined || lastButton === 'ac'){
                display.textContent = '';
            }
            if(lastButton === 'operand'){
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

function operate(operator, firstNum, secondNum){
    switch(operator){
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}