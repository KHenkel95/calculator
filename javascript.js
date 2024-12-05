let firstNum;
let secondNum;
let operator;
const display = document.querySelector('.display');
const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.className){
        case 'digit-button':
            display.textContent += target.textContent;
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
            add(firstNum, secondNum);
            break;
        case '-':
            subtract(firstNum, secondNum);
            break;
        case '*':
            multiply(firstNum, secondNum);
            break;
        case '/':
            divide(firstNum, secondNum);
            break;
    }
}