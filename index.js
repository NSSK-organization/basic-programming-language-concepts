var value; /* for checkVal. */

function checkVal(rightValue) { 
	/* general function for single-line answers */
	let tokenAmount = document.getElementById("stringInput").value;
	if(tokenAmount == rightValue) {
		alert("You got it!");
		return true;
	}
	alert("Not quite!");
	return false;
}
