/* 

----NOTES---- 

still need to set the values for num1, num2, and operator;

keep appending until excluded values, then save to num1;

if num already in display, then that is num1;

need to truncate nums displayed based on max display length

*/

let num1 = ''; 
let num2 = ''; 
let operator = ''; 
let isExpectingSecondNumber = false //track if expecting a second number after operator press
let isDecimalUsed = false; 

//num1, num2 = String, operator = String;
//ensure isDecimalUsed reflects the contents on what is being displayed, plus when operator is selected
function display(button) { 
    const display = document.getElementById('display');

    //decimal can only be pressed once per num value
    if (display.innerHTML.includes('.')) {
        isDecimalUsed = true;  
    } 
    if (isDecimalUsed === true && button.value === '.') { 
        return;
    } 
    
    //display '0.' if operator selects '.' before any other num value
    if (button.value === '.' && display.innerHTML === '0') { 
        display.innerHTML = '0.';
        isDecimalUsed = true;
    } else if (display.innerHTML === '0') { 

        display.innerHTML = button.value;
    } else { 
        //begin regular calc processes
        display.innerHTML += button.value; 
    }    
}

//reset display to '0'
function clearAll(button) { 
    const display = document.getElementById('display');
    display.innerHTML = button.value;
    isDecimalUsed = false;
}

//handle division, multiplication, addition, subtraction
function operate(num1,num2,operator){

    //ensure that function inputs are Int Values
    const num1Int = parseInt(num1, 10);
    const num2Int = parseInt(num2, 10);

    //div by 0 error 
    if (num2Int === 0 && operator === '/') { 
        return 'ERR DIV/0!';
    }

    //returns solution as a string value. To be displayed on calc screen
    else if (operator === '+') { 
        return add(num1Int,num2Int).toString();
    } 
    else if (operator === '-') { 
        return subtract(num1Int,num2Int).toString();
    } 
    else if (operator === '*') { 
        return multiply(num1Int,num2Int).toString();
    } 
    else if (operator === '/') { 
        return divide(num1Int,num2Int).toString();
    } 
}

//need to truncate based on max char dispay length (-1 for decimal val)
function add(a,b) { 
    let solution = a + b;
    return solution.toFixed(6); 
}
function subtract(a,b) { 
    let solution =  a - b;
    return solution.toFixed(6);
}

function multiply(a,b) { 
    let solution = a * b;
    return solution.toFixed(6);
}

function divide(a,b) { 
    let solution = a / b;
    return solution.toFixed(6);
}