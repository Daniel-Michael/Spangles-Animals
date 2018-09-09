
// assign document.getElementById to g within local scope
let get = (g) => document.getElementById(g);

get("cowimg").style.display="none";
get("sheepimg").style.display="none";
get("pigimg").style.display="none";

// Questions to ask as variables:
let forms = ["cow", "sheep", "pig", "dog", "cat"];
let answers = ["moo", "bah", "oink", "woof", "meow"];
let index   = 0;

// As a question function
function ask() {
    forms[index].style.display = "block"; // show the question
    for (var i = 0; i = i < forms[i]; i++);
      if (forms[index] == answers[index]) {
        alert("Correct!");
      }
}

// Go to next question
function next() {
    index++;
}

// Entry point (called when all DOM and all media/images are finished loading)
window.onload = function() {
    
    // 1. Hide all forms
    forms.forEach((element) => { get(element).style.display = 'none'; });
  
    // 2. Hide all images
    forms.forEach((element) => { get(element + 'img').style.display = 'none'; });

  
    // 3. Let's go! -- Ask next (first) question
    ask();
}
