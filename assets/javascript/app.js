function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Andrew Johnson") {
		correct++;
}
	if (question2 == "Black") {
		correct++;
}	
	if (question3 == "Gimley") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "How Sad!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}

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
        number = 100;
      }
    }
    function stop() {
      clearInterval(intervalId);
    }
		run();
		
function results(){
	if(number == 0){
		// results page
	}
}