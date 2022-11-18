/*function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
    printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
    document.getElementById('messages').appendChild(div);
}
    let computerMove='kamien',
    let playerMove='papier',
    printMessage('Zagrałem ' computerMove + '! kamień! Jeśli Twój ruch to ' playerMove ', to wygrywasz!'),
    function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}*/
function playGame(playerInput){
    clearMessages();
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
    
    //playerMove
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    /*if(playerInput == '1'){
    playerMove = 'kamień';
    } else 
    if(playerInput == '2'){
        playerMove = 'papier';
    } else if(playerInput == '3') 
        {playerMove = 'nozyce';
    }*/
    //printMessage('Twój ruch to: ' + playerMove);
    //computerMove
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*if(randomNumber == 1){
    computerMove = 'kamień';
    } else 
        if(randomNumber == 2){
        computerMove = 'papier';
    } else {computerMove = 'nozyce';
    }*/
    //printMessage('Mój ruch to: ' + computerMove);
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