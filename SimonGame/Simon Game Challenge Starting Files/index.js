tileColors = ["red", "blue", "green", "yellow"];
savedPattern = [];
userClickedPattern = [];
var level = 0;
var hasGameStarted = false;
var gameLost = false;

$(".btn").click(function (e) { 
    clickedButtonId = this.id;
    userClickedPattern.push(clickedButtonId);
    playSound(clickedButtonId);
    animationOnClick(clickedButtonId);
    recordAnswer();
});

function playSound(id){
    var clickSound = new Audio("sounds/" + id + ".mp3");
    clickSound.play();
}

function nextSequence(){
    $("h1").text("Level " + level);
    level++;
    var randomSequence = Math.floor(4 * Math.random());
    var nextTile = tileColors[randomSequence];
    savedPattern.push(nextTile);
    $("#" + nextTile).fadeOut().fadeIn();
    playSound(nextTile);
}

function animationOnClick(tileID) { 
    $("#" + tileID).addClass("pressed");
    setTimeout(function() {
        $("#" + tileID).removeClass("pressed");
      }, 100);
}

function recordAnswer(){
    var correct = true;
    var currUserIndex = userClickedPattern.length - 1;
    if (savedPattern.length !== userClickedPattern.length && savedPattern[currUserIndex] === userClickedPattern[currUserIndex]) {
        return;
    }
    for (var i = 0; i < savedPattern.length; i++) {
        if (savedPattern[i] !== userClickedPattern[i]) {
            correct = false;
        }
    }
    if(correct){
        userClickedPattern = [];
        setTimeout(function () {
        nextSequence();
      }, 1000);
    }else{
        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function() {
        $("body").removeClass("game-over");
        }, 200);
        gameLost = true;
        $("h1").text("Game Lost! Press a key to restart");
    }
}

$(document).keydown(function (e) { 
    
    if(!hasGameStarted){
        nextSequence();
        hasGameStarted = true;
    }

    if(gameLost){
        savedPattern = [];
        userClickedPattern = [];
        level = 0;
        hasGameStarted = false;
        gameLost = false;
        $("h1").text("Press A Key to Start");
    }
});



