let firstNum = null;
let secondNum = null;
let lastButton;
let tempNum;
let operator;
let result;
const display = document.querySelector('.display');
const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className){
        case 'digit-button':
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
            firstNum = tempNum;
            operator = target.textContent;
            lastButton = 'operand';
            break;
        case 'equal-button':
            secondNum = tempNum;
            result = operate(operator, firstNum, secondNum);
            tempNum = result;
            display.textContent = result;
            lastButton = 'equal';
            break;
        case 'ac-button':
            display.textContent = '';
            tempNum = null;
            firstNum = null;
            secondNum = null;
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