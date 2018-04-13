/**
 * Created by bcuser on 4/4/18.
 */
$(document).ready(function(){
var player1 = new player(playerA);
console.log(`player 1 is: ${player1}`);
var player2 = new player(George);
var player3 = new player(MaryAnn);
var thePlayers = [player1, player2, player3];
var dice1;
var dice2;
        
    $("#ButtonBet").click(function(){
    // ====================================================================================
    // #1 of homework - calculate 2 random integers for the dice.
    // ====================================================================================
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log("This is dice 1: " + dice1);
    console.log("This is dice 2: " + dice2);
    
    // ====================================================================================
    // #2 of homework - change dice images based on their value when rolled.
    // ====================================================================================
 
    roll("#image1", dice1);
    roll("#image2", dice2);
        
        
    // ====================================================================================
    // #3 of homework - determine win/lose for each roll and display win/lose text.
    // ====================================================================================

    var winOrLose;
    var rollValue = dice1 + dice2;
    var eBalance = $("#balance").html();
    var balance = parseInt(eBalance);   
    var eTurnCount = $("#turnCount").html();    
    var turnCount = parseInt(eTurnCount);    
    var EButtonBet = $("#ButtonBet").html();
    var buttonBet = parseInt(EButtonBet);    
    
    
    // user wins if double, 7, or 11 is rolled 
    if(dice1 === dice2 || rollValue === 7 || rollValue === 11) {
        winOrLose = true;
        $("#status").html("You win!");
        balance++;
        console.log(winOrLose);
    } else {
        winOrLose = false;
        $("#status").html("You lose!");
        balance--;
        console.log(winOrLose);
    } // end of if/else statement
    
    // ====================================================================================
    // #4 of homework - update $ balance and number of turns
    // ====================================================================================
    $("#balance").html(balance);
    $("#turnCount").html(++turnCount);
    
    // ====================================================================================
    // #5 of homework - when user balance reached 0, hide button and update game status
    // ====================================================================================    
    if(balance === 0){
        buttonBet.style.display = "none";
        $("#status").html("GAME OVER!");
    }
}); // end of buttonClicked function
}); // end of jQuery document ready function