const lightBackgroundElements = document.querySelectorAll('.light-background');

window.addEventListener('DOMContentLoaded', () => {
	lightBackgroundElements.forEach((lightBackground) => {
		setFullWidthWithoutScrollBar(lightBackground);
	});
});

window.addEventListener('resize', () => {
	// console.log('Inner Width: ', window.innerWidth);
	// console.log('Client Width: ', document.body.clientWidth);
	// console.log('ScrollBar Width: ', window.innerWidth - document.body.clientWidth);
	lightBackgroundElements.forEach((lightBackground) => {
		setFullWidthWithoutScrollBar(lightBackground);
	});
});

// Make elements full width ignoring scrollbar because 100vw includes it
const setFullWidthWithoutScrollBar = (element) => {
	const scrollBarWidth = window.innerWidth - document.body.clientWidth;
	const fullWidth = window.innerWidth - scrollBarWidth;
	element.style.width = `${fullWidth}px`;
};
