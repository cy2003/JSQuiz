function submitAnswers(){
  var total = 5;
  var score = 0;

  //Get User input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  //Validation
  for(i = 1; i <= total; i++){
    if(eval('q'+i) == null || eval('q'+i) == ""){
      alert("You missed question" + i);
      return false;
        //returning false doesn't allow you to submit the form
    }
  }

  // Set Correct Answers
  var answers = ["b", "a", "d", "b", "d"];

  // Check the Answers
  for(i=0; i < answers.length; i++){
    if(eval('q'+(i+1)) == answers[i]){
      score++;
    }
  }
  //Display results
  var results = document.getElementById("results");
  results.innerHTML = '<h3>You scored <span>' +score+ '</span> out of <span>' +total+ '</span></h3>';

  return false;
}
