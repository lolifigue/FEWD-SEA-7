
$(document).ready(function() {
	console.log("ready");

	var userTotal = 0;
	var computerTotal = 0;
	var userWins = function (computerPlay,userChoice){
		userTotal += 1;
    	$("#humanScore").html(userTotal);
    	$("#resultsMessage").html(userChoice + " beats " + computerPlay + " - You win!");  
	}
	var computerWins = function (computerPlay,userChoice){
    	computerTotal += 1;
    	$("#computerScore").html(computerTotal);
    	$("#resultsMessage").html(computerPlay + " beats " + userChoice + " - Computer wins!");
	}
	var alertTie = function(){
		$("#resultsMessage").html("It's a tie. Try again");
	}

	var getComputerPlay = function () {
		var plays = ["Rock", "Paper", "Scissors"]
		var play = plays [Math.floor(Math.random() * plays.length)];
	  	return play;
	 }

	var rock = function (){
		var computerPlay = getComputerPlay();
		if (computerPlay === "Rock") {
    		alertTie()
    	} else if (computerPlay === "Paper") {
    		computerWins(computerPlay,"Rock");
    	} else {	
    		userWins(computerPlay,"Rock");	
    	};
	};

	var paper = function (){
		var computerPlay = getComputerPlay();
		if (computerPlay === "Paper") {
    		alertTie()
    	} else if (computerPlay === "Scissors") {
    		computerWins(computerPlay,"Paper");
    	} else {
			userWins(computerPlay,"Paper");   		
    	};
    };
	
	var scissors = function (){
		var computerPlay = getComputerPlay();
		if (computerPlay === "Scissors") {
    		alertTie()
    	} else if (computerPlay === "Rock") {
    		computerWins(computerPlay,"Scissors");
    	} else {
    		userWins(computerPlay,"Scissors"); 	   		
    	};
    };

	$("#rock").on("click",rock);
	$("#paper").on("click",paper);
	$("#scissors").on("click",scissors);

});
