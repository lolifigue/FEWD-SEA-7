// hint: You will need to look at the jQuery docs
// ready() https://api.jquery.com/ready/
// click() https://api.jquery.com/click/
// html() https://api.jquery.com/html/
// String concatenation used the plus symbol (+)
// You can mix variables with strings (text wrapped in quotes)
// add your functions here


$(document).ready(function() {
	console.log("ready");

	var userTotal = 0;
	var computerTotal = 0;
	//define functions to calculate totals so that I can invoque each time
	var userWins = function (){
		userTotal += 1;
    	$("#humanScore").html(userTotal);  	
	}
	var computerWins = function (){
    	computerTotal += 1;
    	$("#computerScore").html(computerTotal);
	}

	//declare variables for the functions to be executed when user clicks on each button
	var rock = function (){
		console.log("rockClicked");
		//store computerPlay to use in if statement
		var computerPlay = getComputerPlay();
		// compare computerPlay with user selection (rock)
		if (computerPlay === "Rock") {
    		alert ("It's a tie")
    	} else if (computerPlay === "Paper") {
    		alert ("Computer wins!")
    		computerWins();
    	} else {	
    		alert ("You win!")
    		userWins(); 	
    	};
	};

	var paper = function (){
		console.log("paperClicked");
		var computerPlay = getComputerPlay();
		if (computerPlay === "Paper") {
    		alert ("It's a tie")
    	} else if (computerPlay === "Scissors") {
    		alert ("Computer wins!")
    		computerWins();
    	} else {	
    		alert ("You win!") 
    		userWins(); 	   		
    	};
    };
	
	var scissors = function (){
		console.log("scissorsClicked");
		var computerPlay = getComputerPlay();
		if (computerPlay === "Scissors") {
    		alert ("It's a tie")
    	} else if (computerPlay === "Rock") {
    		alert ("Computer wins!")
    		computerWins();
    	} else {	
    		alert ("You win!") 
    		userWins(); 	   		
    	};
    };

	//declare variable for random computer play
	var getComputerPlay = function () {

		var plays = ["Rock", "Paper", "Scissors"]
 		//creates an array with 3 values
		var play = plays [Math.floor(Math.random() * plays.length)];
	  	//random picks a random number between 0 and 1. 
	  	//multiplying by the length of the array relates that random number to the length of the array,
	  	//it binds the random number to the array length - it will never go beyond the array.
	  	//floor rounds down to no decimals. 
		console.log(play);
	  	//this ends the function
	  	return play;
	};

	//call functions for user clicked buttons
	$("#rock").on("click",rock);
	$("#paper").on("click",paper);
	$("#scissors").on("click",scissors);

});
