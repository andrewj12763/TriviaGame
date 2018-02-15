$(document).ready(function() {

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

});