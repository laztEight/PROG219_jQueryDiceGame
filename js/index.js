/**
 * Created by bcuser on 4/4/18.
 */ 
$(document).ready(function(){
var player1 = new player('PlayerA', 5, 0);
var player2 = new player('George', 5, 0);
var player3 = new player('MaryAnne', 5, 0);
var thePlayers = [player1, player2, player3];
var dice1;
var dice2;
var i = 0;

$(".nameUp").html(thePlayers[i].name); // this sets the start with who's play it is
$(".name").html(thePlayers[i].name); // sets
    
    $("#ButtonBet").click(function(){
        // this resets the array iterator after each player has rolled once
        if (i > thePlayers.length-1){        
            i = 0;
        }
        $(".name").html(thePlayers[i].name);
            console.log(`Name of player: ${thePlayers[i].name}`);

    // ====================================================================================
    // #1 of homework - calculate 2 random integers for the dice.
    
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log("This is dice 1: " + dice1);
    console.log("This is dice 2: " + dice2);
    
    // ====================================================================================
    // #2 of homework - change dice images based on their value when rolled.
      
    roll("#image1", dice1);
    roll("#image2", dice2);

    // ====================================================================================       
    // #3 of homework - determine win/lose for each roll and display win/lose text.

    var winOrLose;
    var rollValue = dice1 + dice2;  
    var EButtonBet = $("#ButtonBet").html();
    var buttonBet = parseInt(EButtonBet);    
    
    // user wins if 7 or 11 is rolled. Doubles not a win anymore, per HW instructions  
    if(rollValue === 7 || rollValue === 11) {
        winOrLose = true;
        $("#status").html("You win!");
        thePlayers[i].balance++;
        console.log(winOrLose);
    } else {
        winOrLose = false;
        $("#status").html("You lose!");
        thePlayers[i].balance--;
        console.log(winOrLose);
    } // end of if/else statement
        
        
    // ====================================================================================
    // #4 of homework - update $ balance and number of turns
      
    // setting object player balance and turn count properties
    $("#balance").html(thePlayers[i].balance); 
    $("#turnCount").html(++thePlayers[i].turnCount);
    console.log(`${thePlayers[i].name} balance is ${thePlayers[i].balance}`);
    console.log(`${thePlayers[i].name} turn count is ${thePlayers[i].turnCount}`);
    
    // ====================================================================================
    // #5 of homework - when user balance reached 0, hide button and update game status   
    
    // if a player loses, their out of the game.    
    if(thePlayers[i].balance === 0){
        buttonBet.style.display = "none";
        $("#status").html("GAME OVER!");
    }
    
    // incrementing the aray iterator
    i++;
    console.log(`Array iterator is ${i}`);
    $(".nameUp").html(thePlayers[i].name);
    }); // end of buttonClicked function
}); // end of jQuery document ready function