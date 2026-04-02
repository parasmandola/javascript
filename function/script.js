// FUNCTION (outside object)
function press(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

// OBJECT with METHODS
const calculator = {
    evaluate: function(expression) {
        return eval(expression);
    }
};

// FUNCTION calling METHOD
function calculate() {
    let exp = document.getElementById("display").value;
    let result = calculator.evaluate(exp); // method used
    document.getElementById("display").value = result;
}