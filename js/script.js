//function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
    printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
    document.getElementById('messages').appendChild(div);
//}
    //let computerMove='kamien',
  //  let playerMove='papier',
    //printMessage('Zagrałem ' computerMove + '! kamień! Jeśli Twój ruch to ' playerMove ', to wygrywasz!'),
   // function clearMessages(){
	//document.getElementById('messages').innerHTML = '';
//}
//playerMove
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else 
if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3') 
    {playerMove = 'nozyce';
}
printMessage('Twój ruch to: ' + playerMove);
//computerMove
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else 
    if(randomNumber == 2){
    computerMove = 'papier';
  } else {computerMove = 'nozyce';
}
printMessage('Mój ruch to: ' + computerMove);

//rezult
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'nozyce')
    {printMessage('Ja wygralem!');}
if( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'kamień')
  {printMessage('Ja wygralem!');}
if( computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'nozyce' && playerMove == 'papier')
  {printMessage('Ja wygralem!');}
//bug
if( playerMove == 'nieznany ruch')
{printMessage('input 1 or 2 or 3');}
  
  