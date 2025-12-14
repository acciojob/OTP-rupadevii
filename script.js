//your JS code here. If required.
const container = document.querySelector(".code-container");

for(let i=0; i<6; i++){
	const inputEl = document.createElement("input");
	inputEl.type = "number";
	inputEl.id = `code-${i+1}`;
	inputEl.dataset.id = i;
	inputEl.className = "code";
	inputEl.min = "0";
	inputEl.max = "9";
	inputEl.addEventListener("input", handleInput);
	inputEl.addEventListener("keydown", handleDelete);

	container.append(inputEl)
}

// container.children[0].focus();
function handleInput(e){
	if(e.target.dataset.id <= 4 && e.inputType !== "deleteContentBackward"){
		e.target.nextSibling.focus()
	}

	 
}

function handleDelete(e){
	if(e.key === "Backspace" && e.target.dataset.id >0){
		e.preventDefault();
		e.target.value = "";
		e.target.previousSibling.focus()
	}
}






