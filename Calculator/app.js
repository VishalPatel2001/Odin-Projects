let num1 = ''; 
let num2 = ''; 
let operator = ''; 
let isExpectingSecondNumber = false; 
let isDecimalUsed = false; 
const operations = ['+', '-', '*', '÷'];

function display(button) {
    const display = document.getElementById('display');

    if (!operations.includes(button.value) && isNaN(button.value) && button.value !== '.' && button.value !== 'equal') {
        return; 
    }

    if (display.innerHTML.includes('.') && button.value === '.') {
        return;
    }

    if (button.value === '.' && display.innerHTML === '0') {
        display.innerHTML = '0.';
        isDecimalUsed = true;
    } else if (button.value === '.' || !isNaN(button.value)) {
        if (display.innerHTML === '0' && button.value !== '.') {
            display.innerHTML = button.value; 
        } else {
            display.innerHTML += button.value; 
        }
    }

    // Handle operator press
    if (operations.includes(button.value)) {
        if (!isExpectingSecondNumber) {
            num1 = display.innerHTML;
            operator = button.value;
            isExpectingSecondNumber = true;
            isDecimalUsed = false;
            display.innerHTML = '0';
        } else if (num2 === '') {
            operator = button.value; // Allow changing the operator before entering num2
        }
        return;
    }
    
    
    // Handle num2 input
    if (isExpectingSecondNumber && !operations.includes(button.value) && button.value !== 'equal') {
        num2 = display.innerHTML;
    }

    // Handle "=" button
    if (button.value === 'equal') {
        if (num2 === '' && operator) {
            num2 = display.innerHTML; // Use the current display value for chaining
        }
        const result = operate(num1, num2, operator);
        display.innerHTML = result;
        num1 = result; // Prepare for further chaining
        num2 = '';
        operator = ''; // Clear operator unless chaining is required
        isExpectingSecondNumber = false;
        isDecimalUsed = result.includes('.');
    }
}

// Reset function
function clearAll() {
    const display = document.getElementById('display');
    display.innerHTML = '0';
    num1 = ''; 
    num2 = ''; 
    operator = ''; 
    isDecimalUsed = false;
    isExpectingSecondNumber = false;
}

//handle division, multiplication, addition, subtraction
function operate(num1, num2, operator) {
    // Parse numbers and perform the calculation
    const num1Float = parseFloat(num1);
    const num2Float = parseFloat(num2);
    let result;

    switch (operator) {
        case '+':
            result = num1Float + num2Float;
            break;
        case '-':
            result = num1Float - num2Float;
            break;
        case '*':
            result = num1Float * num2Float;
            break;
        case '÷':
            if (num2Float === 0) return 'ERR DIV/0!';
            result = num1Float / num2Float;
            break;
        default:
            return 'ERR';
    }

    // Truncate the result before returning
    const maxDisplayChars = 14; 
    return truncateResult(result, maxDisplayChars);
}

//truncate if num > display.len
function truncateResult(value, maxChars) {
    const strValue = value.toString();

    if (strValue.length <= maxChars) return strValue;

    if (strValue.includes('.')) {
        return value.toPrecision(maxChars - 1).slice(0, maxChars);
    }

    return value.toExponential(maxChars - 6); 
}
