const switchLangDOM = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('index-es.html');
switchLangDOM.checked = currentLang;

function switchLanguage() {
	switchLangDOM.addEventListener('change', () => {
		if (switchLangDOM.checked) {
			window.location.href = 'index-es.html';
		} else {
			window.location.href = 'index.html';
		}
	});
}
export default switchLanguage;
