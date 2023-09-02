function clearScreen(){
	const screen = document.querySelector('.screen');
	for (let i=0; i<screen.children.length; i++){
		screen.children[i].style.backgroundColor = "white";
	}
}

// Delete Screen Pixels
function deletePixels(screen){
	while (screen.firstChild){
		screen.removeChild(screen.lastChild);
	}
}

// Build screen
function updateScreen(){
	const screen = document.querySelector('.screen');
	const screenSize = document.querySelector('#sketchpad-size').value;

	deletePixels(screen);

	for (let i=0; i<screenSize*screenSize; i++){
		let newPixel = document.createElement('div');
		newPixel.id = 'pixel' + i;
		newPixel.className = 'pixel';
		newPixel.style.height = `${100/screenSize}%`;
		newPixel.style.width = `${100/screenSize}%`;
		newPixel.addEventListener("mouseover", (event) => {
			newPixel.style.backgroundColor = document.querySelector('#color-picker').value;
		});
		screen.appendChild(newPixel);
	}
}
