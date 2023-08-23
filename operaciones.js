console.log("Cargando variables y metodos.");

let display = null;

let factor1 = 0;
let factor2 = 0;
let operator = '';
let result = 0;
let selectedOperation = null;
let isResolved = false;

let resetValues = () => {
    factor1 = 0;
    factor2 = 0;
    operator = '';
    result = 0;
    selectedOperation = null;
}

let addition = (x, y) => x + y;
let substraction = (x, y) => x - y;
let multiplication = (x, y) => x * y;
let division = (x, y) => x / y;

displayLength = () => {
    console.log("length: ",display.textContent.length);
    if( display.textContent.length > 10){
        display.textContent = display.textContent.slice(1);
    }
};

clearAllButtonPressed = () => {
    display.textContent = '';
}

clearButtonPressed = () =>{
    display.textContent = display.textContent.slice(0, -1);
}

let numericButtonPressed = (button) => {
    displayLength();
    if(factor1!=0 && operator != ""){
        display.textContent = "";
    }
        display.textContent += button;
}

let resultButtonPressed = (selectedOperation) => {
    factor2 = Number(display.textContent);
    switch(selectedOperation){
        case '+': // case '+':
            result = addition(factor1, factor2);
            break;
        case '-': // case '-':
            result = substraction(factor1, factor2);
            break;
        case '*': // case '*':
            result = multiplication(factor1, factor2);
            break;
        case '÷': // case '÷':
            result = division(factor1, factor2);
            break;
    }
    // result = factor1 + factor2;

    console.log('Result = ', result);
    display.textContent = result;
    //isResolved = true;

    //resetValues();
}

let operationButtonPressed = (operation) => {
    console.log('***************** ', operation, typeof operation);
    if( operator === ""){
        if(factor1 === 0){
            factor1 = Number(display.textContent);
            console.log("Factor1 = ", factor1);
            operator = String(operation);
            clearAllButtonPressed();
            display.textContent += operator;
        }
    }
}

let actionButtonPressed = (action) => {
    console.log('***************** ', action, typeof action);
    switch(action){
        case 'Delete':
            clearAllButtonPressed();
            break;
        case 'Backspace':
            clearButtonPressed();
            break;
        case 'Enter':
            resultButtonPressed(operator);
            break;
    }
}


    
    // else{           
    //     switch(selectedOperation){ // *
    //         case '+':
    //             factor1 = addition(factor1, factor2);
    //             display.textContent = factor1;
    //             console.log("Result = ", factor1);
    //             break;
    //         case '-':
    //             factor1 = substraction(factor1, factor2);
    //             display.textContent = factor1;
    //             console.log("Result = ", factor1);
    //             break;
    //         case '*':
    //             factor1 = multiplication(factor1, factor2);
    //             display.textContent = factor1;
    //             console.log("Result = ", factor1);
    //             break;
    //         case '÷':
    //             factor1 = division(factor1, factor2);
    //             display.textContent = factor1;
    //             console.log("Result = ", factor1);
    //             break;
    //         default:
    //             console.warn('This operation is no valid!');
    //             break;
    //     } // switch
    // } // else

    // [10] PARA SOLUCIONAR ISSUE DEBE TENER TERNARIO
    // selectedOperation = operation.textContent; // +, -, *, ÷ 