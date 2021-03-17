var luckySevens = document.forms["luckySevens"];
var startingBet = document.getElementById("startingBet");
var results = document.getElementById("results");
var play = document.getElementById("play");

function resetView() {
    luckySevens.className = "needs-validation";
    results.style.display = "none";
    play.innerText = "Play";
    num1.focus();
}

function validate() {

    luckySevens.className = "needs-validation";

    var money = parseInt(startingBet.value, 10);

    if (!luckySevens.checkValidity()) {
        luckySevens.className = "was-validated";   
        return false;    
    }
    

    var totalRolls = 0;
    var highestAmountWon = money;
    var rollAtHighest = 0;
    var numSides = 6;
    var currentMoney = money;
    var dice1;
    var dice2;

    while(currentMoney > 0){
    	dice1 = Math.floor(Math.random() * numSides) + 1;
    	dice2 = Math.floor(Math.random() * numSides) + 1;
    	totalRolls++;
    	console.log(dice1);

    	if((dice1 + dice2) == 7){
    		currentMoney += 4;
    		if(currentMoney > highestAmountWon){
    			highestAmountWon = currentMoney;
    			rollAtHighest = totalRolls;
    		}
    	}else {
    		currentMoney -= 1;
    	}
    }


    document.getElementById("startingBetValue").innerText = money;
    document.getElementById("totalRolls").innerText = totalRolls;
    document.getElementById("highestAmountWon").innerText = highestAmountWon;
    document.getElementById("rollAtHighest").innerText = rollAtHighest;

    results.style.display = "block";
    play.innerText = "Play again";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}



