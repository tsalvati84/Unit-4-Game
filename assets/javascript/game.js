$("#document").ready(function() {



var selectedNumber = Math.floor(Math.random()*101+19);
var wins = 0;
var losses = 0;
var red = Math.floor(Math.random()*11+1);
var blue = Math.floor(Math.random()*11+1);
var yellow = Math.floor(Math.random()*11+1);
var green = Math.floor(Math.random()*11+1);
var enteredNumber = "";
var totalScore = 0;
var msgWinner = ("Winner");
var msgLoser = ("Try Again");



$("#selectedNumber").html(selectedNumber);






function reset() {
    selectedNumber = Math.floor(Math.random()*101+19);
    $("#selectedNumber").text(selectedNumber);
    red = Math.floor(Math.random()*11+1);
    blue = Math.floor(Math.random()*11+1);
    yellow = Math.floor(Math.random()*11+1);
    green = Math.floor(Math.random()*11+1);
    totalScore = 0;
    $("#enteredNumber").text(totalScore);
}


function winner() {
    wins++;
    alert(msgWinner);
    $('#wins').text(wins);
    reset();
}

function loser() {
    losses++;
    alert(msgLoser);
    $('#losses').text(losses);
    reset();
}





$("#red").on ('click', function() {
    totalScore += red;
$("#enteredNumber").text(red);
    console.log(red);
    $("#totalScore").text("Your total score is: " + totalScore);
    if (totalScore === selectedNumber) {
        winner();
    }
    else if ( totalScore > selectedNumber){
        loser();
    }
});

$("#blue").on ('click', function() {
    totalScore += blue;
    $("#enteredNumber").text(blue);
    console.log(blue);
    $("#totalScore").html("Your total score is: " + totalScore);
    if (totalScore === selectedNumber) {
        winner();
    }
    else if ( totalScore > selectedNumber){
        loser();
    }
});

$("#yellow").on ('click', function() {
    totalScore += yellow;
    $("#enteredNumber").text(yellow);
    console.log(yellow);
    $("#totalScore").html("Your total score is: " + totalScore);
    if (totalScore === selectedNumber) {
        winner();
    }
    else if ( totalScore > selectedNumber){
        loser();
    }
});

$("#green").on ('click', function() {
    totalScore +=  green;
    $("#enteredNumber").text(green);
    console.log(green);
    $("#totalScore").html("Your total score is: " + totalScore);
    if (totalScore === selectedNumber) {
        winner();
    }
    else if ( totalScore > selectedNumber){
        loser();
 };

 $("#totalScore").val(blue);
 $("#totalScore").val(red);
 $("#totalScore").val(yellow);
 $("#totalScore").val(green);
 
});



});
