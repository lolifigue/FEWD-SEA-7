$(document).ready(function(){
		// debugger;
		var lightsOn = true;
		$("#light_switch").click(function() {
			if (lightsOn) {
				$("body").addClass("dark");
				lightsOn = false;
			} else {
				$("body").removeClass("dark");
				lightsOn = "true";
			}
	});
});

// could use instead of lines 6-10:
// $("body").toggleClass("dark");
// debugger --> stops running at that point (only if you have the developer tools open)
// I can put it when my code is not working so that I can check in the console the value of a var at that point