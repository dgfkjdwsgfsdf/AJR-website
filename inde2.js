var password = "Alexa";

function passcheck() {

if(document.getElementById('pass1').value != password) {
alert('Wrong Passcode. Hmm.... ateh ko baka hindi naka capital yung first letter or naka capital lahat T^T, ganon sa may example.');
return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct!.HAHAHAHHAHA WELCOME GUYS >-<. Click OK to Continue.');
}
}
