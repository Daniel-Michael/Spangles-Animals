
function hideShow() {
    var hideImages = document.getElementById("imgHide");
    if (hideImages.style.display === "none") {
        hideImages.style.display = "block";        
    } else {
        hideImages.style.display = "none";
    }
    
}

hideShow();

function questionOne() {
  var firstAnswer = prompt("What kind of animal goes moooo");
  var cowAnswer = "cow";
    if ((firstAnswer === cowAnswer) || (firstAnswer === "Cow") || (firstAnswer === "cows")) {
        alert("You know your animals!");
        hideShow();
    }
}

setTimeout(() => {
      // once image is displayed
      // count 1500ms and then hide again  
}, 1500);

