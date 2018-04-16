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
