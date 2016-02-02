
$(document).ready(function() {
	console.log("ready");

	var userTotal = 0;
	var computerTotal = 0;
	var userWins = function (computerPlay,userChoice){
		userTotal += 1;
    	$("#humanScore").html(userTotal);
    	alert (userChoice + " beats " + computerPlay + " - You win!");  
	}
	var computerWins = function (computerPlay,userChoice){
    	computerTotal += 1;
    	$("#computerScore").html(computerTotal);
    	alert (computerPlay + " beats " + userChoice + " - Computer wins!");
    	$("#resultsMessage") = html("blah"); //this is not working
	}
	var alertTie = function(){
		alert ("It's a tie");
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
