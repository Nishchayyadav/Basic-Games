function animationEffect(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function soundEffect(keyPressed){
  switch (keyPressed) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default: console.log(key + " has no assigned sound");
  }
}

var numOfButtons = document.querySelectorAll(".drum").length;
var buttonsArr = document.querySelectorAll("button");

for (var i = 0; i < numOfButtons; i++) {
    buttonsArr[i].addEventListener("click", function() {
    soundEffect(this.innerHTML);
    animationEffect(this.innerHTML);
  });
}

document.addEventListener("keypress", function(e) {
  soundEffect(e.key);
  animationEffect(e.key);
});