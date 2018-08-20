function questionOne() {
  var firstAnswer = prompt("What kind of animal goes moooo");
  var cowAnswer = "cow";
    if ((firstAnswer === cowAnswer) || (firstAnswer === "Cow") || (firstAnswer === "cows")) {
        alert("You know your animals!");
        questionTwo();
    }
    else {  
        alert("You haven't been to a farm lately, have you?");
        questionOne();
        }
    }            
function questionTwo () {
  var secondAnswer = prompt("How many legs does a cow have?");
  var fourAnswer = "4";
    if ((secondAnswer === "4") || (secondAnswer === "four")) {
      alert("Huzzah!");   
      questionThree();
    }
    else {
        alert("Say what now?");
        questionTwo();
    }
}
function questionThree () {
  var secondAnswer = prompt("What sound does a pig make?");
  var oinkAnswer = "oink";
    if ((secondAnswer === "oink") || (secondAnswer === "squeal")) {
      alert("That's right!");  
      document.getElementById("outcome").innerHTML = "You know your animals pretty well!";
    }
    else {
        alert("Get your ears cleaned!");
        questionThree();
    }
}
