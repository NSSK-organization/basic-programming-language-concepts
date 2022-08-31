var value; /* for checkVal. */
var tokenAmount; /* value user has entered into text boxes */

function checkVal(rightValue) { 
	/* general function for single-line answers */
	let tokenAmount = document.getElementById("stringInput").value;
	if(tokenAmount == rightValue) {
		alert("You got it!");
		return true;
	}
	else if(tokenAmount != rightValue) {
		alert("Not quite!");
		return false;
	}
}

function reassign(value, string) {
	value = string;
	return;
}
