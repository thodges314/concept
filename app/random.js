function randomChar() {
	var seedNumber = Math.floor(Math.random() * 62);
	if(seedNumber<=9){
		return String.fromCharCode(seedNumber+48);
	} else if (seedNumber <= 35) {
		return String.fromCharCode(seedNumber-10+65);
	} else {
		return String.fromCharCode(seedNumber-36+97);
	}
}

function randomString(length) {
	var returnString = "";
	while(returnString.length < length){
		returnString += randomChar();
	}
	return returnString;
}

console.log(randomString(6));