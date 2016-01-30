$(document).ready(function() {
	console.log("ready");
	
//create a array for images
//create an array for ratings
//when you pick a rating, store it and add to the array (need to calculate th avg at the end)
//when vote then change image
//calculate avg
//skip logic & back logic
//when you reach the last image, alert for tahnk you for voting

	var imageArray = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", 
		"images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg"];
	var votesArray = [];
	// console.log(imageArray[1]);
	//create an iamgeIndex that tracks what index I am in
	var imageIndex = 0;

	var your_vote_changed = function(){
		// console.log("voteaded");
		var vote = $("#your-vote").val();
		console.log(vote);
		//added vote to array of votes
		votesArray [imageIndex] = vote;
		imageIndex++; //incremeting the index

		//if function to hide buttons if we got to the last image and show the avg
		if (imageIndex >= imageArray.length) {
			var avg = average(votesArray);
   			$("#buttons-wrapper").html("Thank you for voting, your average is "+avg.toFixed(2));
   			// can improve - problem here is that there is no way to play again (unless refresh page).
   		} else {
	   		// move to next image
			$("#image-to-vote-on").attr("src",imageArray[imageIndex]);
			console.log(imageArray[imageIndex]);
			//return voting filed to blank
			$("#your-vote").prop('selectedIndex',0);
			var avg = average (votesArray);
			console.log (avg);
		}
	}
	//call the function
	$("#your-vote").on("change", your_vote_changed);
	//calculate the avg
	var average = function(arr){
		var sum = 0;
		for(i=0; i < arr.length; i +=1){ 
		//loop through the values in arr -- i (initiator) starts at 0, 
		//and while i is < that the length of the array
		//i keeps incrementing by 1
			sum += parseInt(arr[i]);
		}
		return sum / arr.length;
	};
	//declare var for function to go back and skip
	var back = function(){
		$("#image-to-vote-on").attr("src",imageArray[imageIndex-1]);
	}
	$(":input[value='Back']").on("click", back);

	var skip = function(){
		$("#image-to-vote-on").attr("src",imageArray[imageIndex+1]);
	}
	$(":input[value='Skip']").on("click", skip);
	
});



// 	// when user rate, i.e. on change rate event
// 	// store rating 
// 	// show new image

// 	var totalRating = 0;

// 	// create function that will
// 	// --record the rating selected
// 	// --update the total rating
// 	// --display the next image
// 	// --display the total rating
// 	// call function

// // when click skip, display next image

// // $("input[value='Skip']").click();
// // console.log("ok");

// $('select').on('change', function() {
//   alert( this.value ); // or $(this).val()
// });
