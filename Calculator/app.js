let num1 = ''; 
let num2 = ''; 
let operator = ''; 

//num1, num2 = String, operator = String;
//if num already in display, then that is num1
const excludedValues = ['calculate', '+', '-', '*', '÷' ]
//keep appending until excluded values, then save to num1
function display(button) { 
    const display = document.getElementById('display');
    display.innerHTML += button.value; // Append the button's value to the display
}

function clearAll(button) { 
    const display = document.getElementById('display');
    display.innerHTML = button.value;
}



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