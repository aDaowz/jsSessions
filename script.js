
document.addEventListener("DOMContentLoaded", () => {   
    console.log("DOM loaded");

    //functions for the calculator
    const displayLength = () => {
        console.log("length: ",display.textContent.length);
        if( display.textContent.length > 10){
            display.textContent = display.textContent.slice(0, -1);
        }
    };
    const clearAllClick = () => {
        display.textContent = "";
        displayText = "";
    };

    const clearClick = () => {
        display.textContent = display.textContent.slice(0, -1);
        displayText = display.textContent;
    };

    const resultClick = () => {
        console.log("displayText: ", displayText);
        console.log("display: ", display);
        const result = eval(displayText);
        display.textContent = result;
        console.log("Result");
    };

    const numberClick = (button) => {
        console.log(button.textContent);
        displayLength();
        display.textContent += button.textContent;
        displayText += button.textContent;
    };

    const operationClick = (button) => {
        console.log(button.textContent);
        displayLength();
        display.textContent += button.textContent;
        displayText += button.textContent;
    };

    //listeners for the calculator

    const display = document.getElementById("display");
    let displayText = display.textContent;

    const clearAllButton = document.getElementById("CA");
    clearAllButton.addEventListener("click", () => {
        clearAllClick();
    });

    const clearButton = document.getElementById("C");
    clearButton.addEventListener("click", () => {
        clearClick();
    });

    const resultButton = document.getElementById("result");
    resultButton.addEventListener("click", () => {
        resultClick();
    });

    const buttons = document.querySelectorAll(".number.button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            numberClick(button);
            //Tarea hacer que funcione la calculadora.
        });
    });

    const operationButtons = document.querySelectorAll(".operation.button");
    operationButtons.forEach((button) => {
        button.addEventListener("click", () => {
            operationClick(button);
            //Tarea hacer que funcione la calculadora. separar el contenido de los listeners en funciones, para todos los casos.
        });
    } );





    
});