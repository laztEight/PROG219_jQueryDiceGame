// creating the player function

/*class player{
    constructor(pName){
        this.name = pName;
    }
}*/

var eBalance = $("#balance").html();
var balance = parseInt(eBalance); 
var eTurnCount = $("#turnCount").html();    
var turnCount = parseInt(eTurnCount); 

var player = function (pName){
    this.name = pName;
    this.playerBalance = balance;
    this.playerTurn = turnCount;
    this.getName = function(){
        return this.name;
    }
}
