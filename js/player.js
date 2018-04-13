// creating the player function

/*class player{
    constructor(pName){
        this.name = pName;
    }
}*/

var player = function (pName){
    this.name = pName;
    this.getName = function(){
        return this.name;
    }
}
