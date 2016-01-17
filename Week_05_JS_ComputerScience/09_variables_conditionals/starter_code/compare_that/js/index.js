// when button is clicked
	// if a is less than b 
		//then display less
	// if a is greater than b 
		//then display more
	// else display equal

$(document).ready(function() {
	var a; 
	var b;
	//I am storing a var a with the value of the id a
	// created the variables outside the function 
	// because otherwise the memory is released after executing the function and the program will redefine the var each time
	var compareHandler = function() {
		// console.log("clicked");
		a = parseInt($("#a").val());
		// console.log(a);
		b = parseInt($("#b").val());
		if ( a > b) {
			console.log("a is greater"); 
		} else if (a < b) {
			console.log("b is greater");
		} else {
			console.log("a equals b");
		}
	};

	$("#submit").click(compareHandler);
});

// parseInt converts the numbers into integers