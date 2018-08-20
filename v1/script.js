function questionOne(){
  var userAnswer = prompt("What kind of animal goes moooo");
  var cowAnswer = "cow";
    if (userAnswer === cowAnswer) {
        alert("You sure know your animals!");   
    }
    if (userAnswer !== cowAnswer) {  
        alert("You haven't been to a farm lately, have you?");
    }
}
