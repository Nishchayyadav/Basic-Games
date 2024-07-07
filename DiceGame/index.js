var randomDiceNumber1 = Math.floor(6 * Math.random()) + 1;
var randomDiceNumber2 = Math.floor(6 * Math.random()) + 1;
$(".img1").attr("src", "images/dice"+randomDiceNumber1+".png");
$(".img2").attr("src", "images/dice"+randomDiceNumber2+".png");
if(randomDiceNumber1 > randomDiceNumber2){
    $("h1").text("Player1 Won !");
}else if(randomDiceNumber1 < randomDiceNumber2){
    $("h1").text("Player2 Won !");
}else{
    $("h1").text("It's a draw !");
}
