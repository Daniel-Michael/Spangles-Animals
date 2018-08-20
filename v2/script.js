function questionOne(){
  var userAnswer = prompt("What kind of animal goes moooo");
  var cowAnswer = "cow";
    if ((userAnswer === cowAnswer) || (userAnswer === "Cow") || (userAnswer === "cows")) {
        alert("You know your animals!");
      // askMe();
    }
    else {  
        alert("You haven't been to a farm lately, have you?");
    questionOne();
        // score--;
        // askAgain = true;
        // document.write(score);
    }
  }
            
// function askMe () {
//   var secondAnswer = prompt("How many legs does a cow have?");
//   var fourAnswer = "4";
//     if ((secondAnswer === "4") || (secondAnswer === "four")) {
//       alert("Huzzah!");    
//     }
//     else {
//       alert("What now?");
//       questionOne();
//     }
// }

//   var score;
//   var askAgain;
//   for (var i = 0; i < score.length; i++) {
//   if (score[i] === ?correct);  

//   } else {
//     alert("Try again");  
//     var askAgain;

// score++;
// askAgain = false;
// document.write(score); 