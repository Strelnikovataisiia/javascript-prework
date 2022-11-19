
function playGame(playerInput){
    clearMessages();
    let playerMove = getMoveName(playerInput);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
        if(argMoveId == 2){
            return 'papier';
        }
        if(argMoveId == 3){
            return 'nozyce';
        } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch'
        }
    }
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce')
            {printMessage('Ja wygralem!');}
        if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień')
        {printMessage('Ja wygralem!');}
        if( argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier')
        {printMessage('Ja wygralem!');}
        //bug
        if( argPlayerMove == 'nieznany ruch')
        {printMessage('input 1 or 2 or 3');}
        
        if( argComputerMove == argPlayerMove){
            printMessage('Remis');} 
    }
    console.log('Gracz wpisał: ' + playerInput);
    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('moves: ' + playerMove + ', ' + computerMove);
    //rezult
    displayResult(computerMove, playerMove)   
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });