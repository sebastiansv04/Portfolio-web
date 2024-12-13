const loaderContain = document.querySelector('.loader');

function loader() {
	window.addEventListener('load', () => {
		loaderContain.classList.add('loader--hidden');
	});
}

export default loader;
