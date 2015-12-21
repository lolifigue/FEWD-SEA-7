document.getElementById('grayButton').onclick = switchGray;

document.getElementById('whiteButton').onclick = switchWhite;

document.getElementById('blackButton').onmouseover = switchBlack;

function switchGray() {
	document.body.style.backgroundColor = 'gray';
	document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlack() {
	// alert("hello"); to check if it works
	console.log("this is a console log");
	console.log(document.body.style.backgroundColor);
	document.body.style.backgroundColor = 'black';
	console.log(document.body.style.backgroundColor);

}