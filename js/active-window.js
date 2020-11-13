const terminal = document.querySelector('.terminal');
const titleBar = document.querySelector('.title__bar');
const layer = document.querySelector('.layer');
const light = document.querySelectorAll('.traffic__light');
const colors =  ['red', 'yellow', 'green'];

let getActiveWindow = () => {
	layer.classList.add('blur');
	titleBar.classList.remove('active');
	titleBar.classList.add('inactive');
	terminal.classList.remove('inactive');
	terminal.classList.add('active');

	for (let i = 0; i < light.length; i++) {
		light[i].classList.add(colors[i]);
	}
}

let getInactiveWindow = () => {
	layer.classList.remove('blur');
	terminal.classList.remove('active');
	terminal.classList.add('inactive');
	titleBar.classList.remove('inactive');
	titleBar.classList.add('active');

	for (let i = 0; i < light.length; i++) {
		light[i].classList.remove(colors[i])
	}
}

terminal.addEventListener('mouseover', getActiveWindow);
terminal.addEventListener('mouseout', getInactiveWindow);
