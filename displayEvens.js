var numberFun = document.forms["numbers"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var step = document.getElementById("step");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {

    numbers.className = "needs-validation";

    if (!numbers.checkValidity()) {
        numbers.className = "was-validated";
        return false;
    }

    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);
    var step = parseInt(step.value, 10);

    console.log(operand1);
    console.log(operand2);

    var result = new Array();
    
    for(var i = operand1; i <= operand2 - step; i += step){
    	if(i % 2 == 0){
    		result[result.length] = i;
    		document.getElementById("resultArray").innerText = i;    
    	}
    }

    //document.getElementById("resultArray").innerText = result;
    

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    return false;
}