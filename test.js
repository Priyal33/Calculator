document.addEventListener("DOMContentLoaded", function() {
    let resultField = document.getElementById('result');

    function appendNumber(number) {
        resultField.value += number;
    }

    function appendOperator(operator) {
        const lastChar = resultField.value.slice(-1);
        resultField.value += operator;
    }

    function deleteLast() {
        resultField.value = ("");
    }

    function calculate() {
        try {
            resultField.value = eval(resultField.value);
        } catch (event) {
            alert('Invalid expression');
            clearScreen();
        }
    }

    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.deleteLast = deleteLast;
    window.calculate = calculate;
});
