var password = "08/21/2007";

function passcheck() {

if(document.getElementById('pass1').value != password) {
alert('Sorry, it seems you are not the person were looking for.');
return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct!. Click OK to Continue.');
}
}
