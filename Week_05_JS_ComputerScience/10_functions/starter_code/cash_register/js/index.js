

$(document).ready(function() {
	// console.log("doc ready");
	
	// define total
	var total = 0;
	// console.log(total);

// entered later to cut at 2 decimals and add currency
	var formatCurrency = function(value) {
		var returnValue = value.toFixed(2);
		return "$" + returnValue;
	};


	// create a function that will execute when user hits enter in the input box
	var addInput = function (event) {
		  event.preventDefault();
			// console.log("check");
	
	// 	//create variable called entry that will take the value entered in input box
			var newEntry = $("#newEntry").val();
			// console.log(entry);

			// parseFloat takes a string into number, same as parseInt but maintains the decimal points
			newEntry = parseFloat(newEntry);
	
	// 	// enter this new variable in the new row added, append adds at the end.
	// need to add in the second column, so adding a row (td) and 2 columns (td)
			$("#entries").append("<tr><td></td><td>" + formatCurrency(newEntry) + "</td></tr>");
	

	// 	// // update the variable total and display it in the box
			total += newEntry;
			$("#total").html(formatCurrency(total));
	// clear input field - by using val method. 
	// So val can be used to retreive the value of that input or to pass a new value, in this case no value
			$("#newEntry").val('');

	};

	$("#entry").submit(addInput);

  });





