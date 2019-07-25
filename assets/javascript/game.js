// GLOBAL VARIABLES
// *******************************************************
var crystal = {
    red: {
        name: "Red",
        value: 0
    },
    blue: {
        name: "Blue",
        value:0
    },
    yellow: {
        name: "Yellow",
        value:0
    },
    aqua: {
        name: "Aqua",
        value:0
    }
}

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// *******************************************************
var getRandom = function(min,max){
    return Math.floor(Math.random() * (max-min+1)) +min;
}

var startGame= function(){
    currentScore=0;
    targetScore=getRandom(19,120);
    
    crystal.red.value=getRandom(1,12);
    crystal.blue.value=getRandom(1,12);
    crystal.yellow.value=getRandom(1,12);
    crystal.aqua.value=getRandom(1,12);

    $("#targetScore").html(targetScore);
    $("#yourScore").html(currentScore);

    console.log("target score:" + targetScore);
    console.log("Red: " + crystal.red.value + " | Blue: " + crystal.blue.value + " | Yellow: " + crystal.yellow.value + " | Aqua: " + crystal.aqua.value);
}

var addValues = function(crystal) {
    currentScore= currentScore + crystal.value;

    $("#yourScore").html(currentScore);
    checkWin();

    console.log("Your score: " + currentScore);

}

var checkWin = function() {
    if(currentScore > targetScore){
        alert("Sorry, you lost!");
        console.log("You Lost");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();
    }
    else if (currentScore==targetScore) {
        alert("You won!");
        console.log("You won");
        winCount++;
        $("#winCount").html(winCount);
        startGame();
    }
    
}

// MAIN PROCESS
// *******************************************************
startGame();

$("#red").click(function() {
    addValues(crystal.red);
});
$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
});
$("#aqua").click(function() {
    addValues(crystal.aqua);
});