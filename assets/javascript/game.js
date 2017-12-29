
var wins = 0;
var winsE = document.getElementById("wins");

var losses = 0;
var lossesE = document.getElementById("losses");

var guessesLeft = 9;
var guessesLeftE = document.getElementById("guessesLeft");


guessesLeftE.textContent = guessesLeft;
var guessed = [];
var guessedE = document.getElementById("guessed");

var wordFill = [];
var wordFillE = document.getElementById("wordFill");

var monsterText = ['GODZILLA','MOTHRA','MEGALON','GHIDRAH','ANNGUIRUS','GIGAN','BATTRA'];
var monsterTextE = document.getElementById("monsterText");

var compSelection = ['GODZILLA','MOTHRA','MEGALON','GHIDRAH','ANNGUIRUS','GIGAN','BATTRA'];
var compChoice = '';
var randomWordIndex = [Math.floor((Math.random() * compSelection.length))];


var monsterImages = ['assets/images/Godzilla-1968.png','assets/images/Mothra.png','assets/images/Megalon.png','assets/images/Ghidrah.png','assets/images/Anguirus.jpg','assets/images/Gigan.png','assets/images/Battra.png']
var monsterSoundReference = ['zilla4.wav','mothra2.wav','megalon.wav','ghidrah.wav','angilas.wav','gigan.wav','battra.wav'];
 

var monsterIMG = document.getElementById('Monster');
function newWordToGuess()
{    
     if (randomWordIndex < compSelection.length-1)
     {
         randomWordIndex++;
     }
     else{randomWordIndex = 0;}
        compChoice = compSelection[randomWordIndex];       
        // compSelection.splice(randomWordIndex,1); // makes everything else a little tricky so commented it out
        console.log(compSelection);
        console.log(compChoice);
        console.log(randomWordIndex);

}

function wordDisplay()
{
    for(var i = 0; i < compChoice.length; i++)
    {
        wordFill.push('_');
        wordFillE.textContent += wordFill[i] + " ";
    }
}

function newGameSetup()
{
    
    wordFillE.textContent = '';
    guessesLeft = 9;
    guessed = "";                                
    guessedE.textContent = guessed;
    wordFill = [];
    newWordToGuess();
    wordDisplay();   
}

//Only for getting the game started
newWordToGuess();
wordDisplay();

 


document.onkeyup = function(event) {

    var userChoice = event.key.toLocaleUpperCase();

    if (guessed.includes(userChoice) || wordFill.includes(userChoice))
    {
        // alert("You already guessed that letter");
    }
    else
    {
        if (compChoice.includes(userChoice) )
        {
            wordFillE.textContent = '';
            for(var i = 0; i < compChoice.length; i++)
            {
                if(compChoice[i] == userChoice)
                wordFill[i] = userChoice;
                wordFillE.textContent += wordFill[i] + " ";
            }        
        }
        
        else
            {
                --guessesLeft;
                guessed += " " + userChoice;
                
                if(guessesLeft == 8)                
                guessedE.textContent = userChoice;                
                else                               
                guessedE.textContent += ", " + userChoice;
            }


        guessesLeftE.textContent = guessesLeft;
        
    }
    

    if(!wordFill.includes('_'))
    {   console.log(randomWordIndex);
        winsE.textContent = ++wins; 
         monsterIMG.src = monsterImages[randomWordIndex];
         monsterTextE.textContent = monsterText[randomWordIndex];
         monsterSound = new Audio("assets/audio/" + monsterSoundReference[randomWordIndex]);
         monsterSound.play();
         newGameSetup();
         console.log(randomWordIndex);
         
         
           
    }

    if(guessesLeft <= 0)
    {        
        lossesE.textContent = ++losses;
        monsterSound.play();
        newGameSetup();
    }
    

    guessesLeftE.textContent = guessesLeft;
}





