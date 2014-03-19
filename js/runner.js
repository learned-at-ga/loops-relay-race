// Runner for the exercises
function check(num, answer, correct) {
  if(answer) {
    document.write("<p class=\"question\">Question " + num + ": Correct!</p>");
  } else {
    document.write("<p class=\"question\" style=\"color:red;\">Question " + num + ": Not Yet Solved </p>");
  }
  document.write("<hr>")
}
  

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}


function grade(){
  var finished= 0;
  var questions = document.getElementsByClassName("question");
  for (var i = 0, len = questions.length; i < len; ++i) {

    if(questions[i].innerHTML.indexOf("Correct!") != -1){
      finished +=1;
    }
  }
  if(finished == 6) {
    document.write("<img src=\"http://bestclipartblog.com/clipart-pics/fireworks-clip-art-5.jpg\"> YOU WIN!!!");
  }
  else if(finished == 1) {
    document.write(finished + " correct answer!");
  }
  else {
    document.write(finished + " correct answers!");
  }
  
}

check(1, myArray[0]==1 && myArray[1]==2 && myArray[2]==3 && myArray[3]==4 && myArray[4]==5 && myArray[5]==6 && myArray[6]==7 && myArray[7]==8 && myArray[8]==9 && myArray[9]==10)
check(2, sub == 45)
check(3, largest_num == 96)
check(4, small == -1)
check(5, totalDuplicates == 4)
check(6, totalUniques == 6)

grade();
