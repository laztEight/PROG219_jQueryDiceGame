function roll(image, dice){        
    switch(dice) {
        case 1:
            $(image).attr("src", "./images/dice-1.jpg");
            break;
        case 2:
            $(image).attr("src", "./images/dice-2.jpg");
            break;
        case 3:
           $(image).attr("src", "./images/dice-3.jpg");
            break;
        case 4:
            $(image).attr("src", "./images/dice-4.jpg");
            break;
        case 5:
            $(image).attr("src", "./images/dice-5.jpg");
            break;
        case 6:
            $(image).attr("src", "./images/dice-6.jpg");
            break;
        default:
            console.log("something's wrong with the dice image.");    
    }
}