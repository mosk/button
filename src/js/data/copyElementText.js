import showNotification from './showNotification'; 
import removeNotification from './removeNotification'; 

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
	}, 1400);
};

export default copyElementText;