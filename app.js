function check() {
    var userInput = document.getElementById("input").value;
    // userInput = userInput.toLower();
    vovelWords = [];
    normalWords = [];

    trueVovel = false;
    for (var i = 0; i < userInput.length;i++){
        if(userInput[i] === "a" ||userInput[i] === "e" ||userInput[i] === "i" ||userInput[i] === "o" ||userInput[i] === "u"||userInput[i] === "A"||userInput[i] === "E"||userInput[i] === "I"||userInput[i] === "O"||userInput[i] === "U" )
        trueVovel = true;
        break;
    }
    if (trueVovel == true){
        vovelWords.push(userInput);

    }else{
        normalWords.push(userInput);
    }
    for(var j = 0;j < vovelWords.length;j++){
        document.getElementById("vovel").innerHTML += "<li>"+ vovelWords[j] +"</li>" 
    }
    for(var k = 0;k < normalWords.length;k++){
        document.getElementById("normal").innerHTML += "<li>"+ normalWords[k] +"</li>" 
    }
}
