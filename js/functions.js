function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
    
    document.getElementById('messages').appendChild(div);
}
    printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}