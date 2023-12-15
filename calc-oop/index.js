class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;

        this.currentOperand = this.currentOperand.toString() + number.toString();
        console.log(this.currentOperand);
    }

    chooseOperator(operation) {
        this.operation = operation;
    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}


const numberButtons = document.querySelectorAll('[data-number]');

// numberButtons.forEach((button) => {
//     button.addEventListener('click',()=>{
//         console.log('clicked');
//     })
// })

const operationButtons = document.querySelectorAll('[data-operation]');

const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
console.log(currentOperandTextElement.textContent);

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log('button clicked');
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log('button clicked');
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    })
})
