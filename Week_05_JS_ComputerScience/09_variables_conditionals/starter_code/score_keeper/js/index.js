// when doc is ready
// when +5 is clicked
	// then add 5

$(document).ready(function() {
	var score = 0;
	var add5 = function() {
		score +=5;
		// console.log(score);
		$("#result").html(score);
		// .html() method is used to get the contents of an element, in this case the the id result.
	}
	$("#add5").click(add5);

	var add10 = function() {
		score +=10;
		$("#result").html(score);
	}
	$("#add10").click(add10);

	var sub1 = function() {
		score -=1;
		$("#result").html(score);
	}
	$("#sub1").click(sub1);

	var zero = function() {
	score = 0;
	$("#result").html(score);
	}
	$("#zero").click(zero);

});

// could create a fucntion for new scro
// function updateScore(newScore) {
// 	$("#results").html(newScrore);
// }
// And then call this function - instead of writing this: $("#result").html(score);, I just call the fucntion
