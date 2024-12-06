let firstNum;
let secondNum;
let tempNum;
let operator;
let result;
const display = document.querySelector('.display');
const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className){
        case 'digit-button':
            display.textContent += target.textContent;
            tempNum = Number(display.textContent);
            break;
        case 'operand-button':
            operator = target.textContent;
            firstNum = tempNum;
            console.log('firstNum is: ' + firstNum);
            console.log('the operator is: ' + target.textContent);
            display.textContent = '';
            break;
        case 'equal-button':
            secondNum = tempNum;
            console.log('secondNum is: ' + secondNum);
            console.log('operator is: ' + operator + ' firstNum is: ' + firstNum + ' secondNum is: ' + secondNum);
            result = operate(operator, firstNum, secondNum);
            tempNum = result;
            display.textContent = result;
            break;
        case 'ac-button':
            display.textContent = '';
            tempNum = null;
            firstNum = null;
            secondNum = null;
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