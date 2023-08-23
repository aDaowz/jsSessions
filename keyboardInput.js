document.addEventListener('DOMContentLoaded', () => {

        const NumericKey = {
            NUM_0: '0',
            NUM_1: '1',
            NUM_2: '2',
            NUM_3: '3',
            NUM_4: '4',
            NUM_5: '5',
            NUM_6: '6',
            NUM_7: '7',
            NUM_8: '8',
            NUM_9: '9',
        }

        const OperationKey = {
            PLUS: '+',
            MINUS: '-',
            MULTIPLY: '*',
            DIVIDE: '/',
        }

        ActionKey = {
            CLEAR_ALL: 'Delete',
            CLEAR: 'Backspace',
            RESULT: 'Enter',
        }

        document.addEventListener('keydown', (event) => {
            const keyCode = event.key;
            const numericButtonArray = Object.values(NumericKey);
            const operationButtonArray = Object.values(OperationKey);
            const actionButtonArray = Object.values(ActionKey);

            if (numericButtonArray.includes(keyCode)) {
                const number = +keyCode;
                console.log(number, typeof number);
                numericButtonPressed(number);
            }

            if (operationButtonArray.includes(keyCode)) {
                const operation = keyCode;
                console.log(operation, typeof operation);
                operationButtonPressed(operation);
            }

            if (actionButtonArray.includes(keyCode)) {
                const action = keyCode;
                console.log(action, typeof action);
                 actionButtonPressed(action);
                // if (event.key === 'Backspace') {
                //     clearButtonPressed();
                // } else if (event.key === 'Escape') {
                //     clearAllButtonPressed();
                // } else if (event.key === 'Enter') {
                //     resultButtonPressed(operator);
                // } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
                //     operationButtonPressed(event.key);
                // }
            }

            
});
});