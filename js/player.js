var player = function (pName){
    this.name = pName;
    this.getName = function(){
        return this.name;
    }
}