import { showNotification, removeNotification } from './notification';

const copyElementText = (evt) => {
	const copytext = document.createElement(`input`);
	copytext.value = evt.target.textContent.trim();
	document.body.appendChild(copytext);
	copytext.select();
	document.execCommand(`copy`);
	document.body.removeChild(copytext);

	showNotification(evt, `Код скопирован`);
	setTimeout(function() {
		removeNotification(evt);
	}, 1200);
};

export default copyElementText;