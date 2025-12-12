//your JS code here. If required.
const container = document.getElementById("code-container");

for(let i=0; i<6; i++){
	const inputEl = document.createElement("input");
	inputEl.type = "number";
	inputEl.id = i;
	inputEl.className = "code";
	inputEl.min = "0";
	inputEl.max = "9";
	inputEl.addEventListener("input", handleInput);

	container.append(inputEl)
}

// container.children[0].focus();

function handleInput(e){
	if(e.target.id <= 4) e.target.nextSibling.focus()

	if(e.inputType === "deleteContentBackward" && e.target.id > 0) e.target.previousSibling.focus()
}



