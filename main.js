const images = document.querySelectorAll("img");
var input = document.getElementById("input");
var currentImage = images[0];

input.addEventListener("keyup", animate);

function animate(event) {
	let keyName = event.key;

	if (keyName === "Enter"){
		// eventually replace with css animations

		// rn randomly selected gifs to display
		let index = Math.floor(Math.random() * images.length);
		let lastImage = currentImage;
		currentImage = images[index];
		lastImage.className = "hide";
		currentImage.className = "";
	}
}