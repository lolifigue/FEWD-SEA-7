//create array of cities for drop down
//create an array of pictures
//create function to change image
//on select change image


$(document).ready(function() {
	console.log("ready");
	//store the select field as variable (used $ ahead of name to indicate it is an object) --why?
	var $selectField = $("#city-type");
	//store cities in an array
	var cities = ["austin","la","nyc","sf","sydney"];
	//loop through the array and apply the function for each index
	cities.forEach(function(city){ 	//Q: where does the parameter city come from, from the array cities?
		//create a new option element
		var $option = $("<option>");
		//add an html value to the option element and then set the value to city
		$option.html(city).val(city);
		//append the option element to the select field (creates the dropdown options)
		$selectField.append($option);
	
	// another way to do it is:
	// for(var i = 0, i < cities.length; i++){
	// 	var option = "<option value='";
	// 	option+=cities [i];
	// 	option+= "'>" + cities[i] + "<option>";
	// 	$selectField.append(option);
	// }

	//bind select field event onChange()	
	var yourChoice = function(){
		//console.log($(this).val()); //Q: it logs city name 5 times, why?
		//can use class method as the image is a style in css:
		//$("body").addClass($(this).val()); 
		//but it is appending the new city name to the class "class = ny austin la" (related to multiple logs of (this)?).
		$("body").css("background", "url(images/" + $(this).val() + ".jpg");
	}
	$("#city-type").on("change", yourChoice);
	});
});