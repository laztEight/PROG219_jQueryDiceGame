// creating the player function

var eBalance = $("#balance").html();
var balance = parseInt(eBalance); 
var eTurnCount = $("#turnCount").html();     
var turnCount = parseInt(eTurnCount); 

var player = function (pName, pBalance, pTurnCount){
    this.name = pName;
    this.balance = pBalance;
    this.turnCount = pTurnCount;
    this.getPlayer = function(){
        console.log(`player name: ${player.name}, player balance is $${player.balance} and turn count is ${player.turnCount}`);
    }
}
/* below is the removePlayer function I was working on to reduce the amount of code in the index.js.  It's not required.  Works the way it's set up in the main index.js. */



function removePlayer(){
console.log(`removeplayer function`);
console.log(thePlayers.length);
    if (thePlayers.indexOf(thePlayers[i]) != -1) {
        thePlayers.splice(thePlayers.indexOf(thePlayers[i]), 1);
        console.log(`remove player`);
    }
        else {
            console.log(`didn't remove player`);
        }
    console.log(thePlayers.length);
    if (thePlayers.length === 1) {
        $("#status").html(`CONGRATS! ${thePlayers[0].name}YOU WON!`);
    }
} 