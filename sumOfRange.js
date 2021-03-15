/*
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;

var newElement = prompt("Enter a random number:");
newElement = parseInt(newElement);
testArray.push(newElement);

for(var i = 0; i < testArray.length; i++){
	sum += testArray[i];
}

console.log("The sum of " + testArray + " is: " + sum);
*/

var testArray = new Array();
var sum = 0;

for( var i = 0; i<=4; i++){
	testArray[i] = parseInt(prompt("Enter a number of your choice: "));
	sum += testArray[i];
}

console.log("The sum of " + testArray + " is: " + sum);