let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = 0;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return 'Error';
    }
    return parseFloat((x / y).toFixed(3));
}

function operate(operator, x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
        case 'x':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return null;
    }
}

const displayPrevious = document.querySelector("#previous");
const display = document.querySelector('#displayCurrent');

function updateDisplay(value) {
    if(value == ''){
        display.textContent = value;
    } else {
        display.textContent = value.toFixed(3);
    }

}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === '.') {
            if (!display.textContent.includes('.')) {
                display.textContent += '.';
            }
        } else {
            display.textContent += button.textContent;
        }
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator) {
            secondNumber = display.textContent;
            result = operate(operator, firstNumber, secondNumber);
            updateDisplay(result);
            firstNumber = result;
        } else {
            firstNumber = display.textContent;
        }
        operator = button.textContent;
        displayPrevious.textContent = firstNumber + " " + operator;
        display.textContent = '';
    });
});

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    secondNumber = display.textContent;
    result = operate(operator, firstNumber, secondNumber);
    displayPrevious.textContent = firstNumber + " " + operator + " " + secondNumber + " =";
    updateDisplay(result);
    operator = '';
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayPrevious.textContent = '';
    updateDisplay('');
});
