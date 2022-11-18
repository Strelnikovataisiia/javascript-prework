function printMessage(msg){
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
}