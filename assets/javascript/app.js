// results
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
	var messages = ["Great job!", "That's just okay", "How Sad!"];
	var score;

	if (question1 == "Andrew Johnson") {
		correct++;
	}
	if (question2 == "Black") {
		correct++;
	}	
	if (question3 == "Gimley") {
		correct++;
	}
	if (correct == 0) {
		score = 2;
	}
	if (correct > 0 && correct < 3) {
		score = 1;
	}
	if (correct == 3) {
		score = 0;
	}
// make results visible after sumbit.
//  I found this way of using vanilla JS that seemed the more optimal way of using the form tags
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

// Timer
	var number = 30;
	var intervalId;

  $("#stop").on("click", stop);
  $("#resume").on("click", run);

function run() {
   clearInterval(intervalId);
   intervalId = setInterval(decrement, 1000);
    }
function decrement() {
   number--;
   $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");
  if (number === 0) {
		 stop();
		 check();
		 number = 100;
			$("#button").hide( 2000, function() {
				$( this ).remove();
			});
     }
		}
	$('#button').on('click', function(){
		stop()
	})
function stop() {
    clearInterval(intervalId);
		}
		run();
