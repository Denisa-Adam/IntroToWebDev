var numbers = document.forms["numbers"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var stepInput = document.getElementById("step");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");
var resultArray = document.getElementById("resultArray");

function validate() {

    numbers.className = "needs-validation";

    if (!numbers.checkValidity()) {
        numbers.className = "was-validated";
        return false;
    }

    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);
    var step = parseInt(stepInput.value, 10);

    var even = new Array();
    
    for(var i = operand1; i <= operand2 - step; i += step){
    	if(i % 2 == 0){
    		even[result.length] = i;   
    	}
    }

    document.getElementById("resultArray").innerText = result;
    

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    return false;
}