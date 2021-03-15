/* for (var i = 0; i < 100; i++) {
  console.log(Math.random() * 6);
} */

/*
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
for (var i = 0; i < 100; i++) {
  console.log(rollDice());
}
*/

var numSides = prompt("How many sides does the die have?");
var numDice = prompt("How many dice are you throwing?")
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < numDice; i++) {
    console.log(rollDice(12));
}