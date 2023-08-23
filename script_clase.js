document.addEventListener('DOMContentLoaded', () => {
    console.log("Javascript loaded");

    display = document.getElementById('display');

    const clearAllButton = document.getElementById('CA');
    clearAllButton.addEventListener('click', () => {
        // display.textContent = '';
        clearAllButtonPressed();
    });

    const clearButton = document.getElementById('C');
    clearButton.addEventListener('click', () => {
        clearButtonPressed();
    });

    const resultButton = document.getElementById('result');
    resultButton.addEventListener('click', () => {
        resultButtonPressed();
    });

    const numericButtons = document.querySelectorAll('.number.button');
    numericButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button, typeof button);
            numericButtonPressed(+button.textContent);
        });
    });

    const operationButtons = document.querySelectorAll('.operation.button');
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            operationButtonPressed(button);
        })
    });
    
});