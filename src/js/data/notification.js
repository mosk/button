export const showNotification = (evt, text = `Message`) => {
	const notification = document.querySelector(`.notification`) || document.createElement(`span`);
	const el = evt.target;

	notification.textContent = `${text}`;
	notification.classList.add(`notification`, `notification--hidden`);

	setTimeout(function() {
		notification.classList.remove(`notification--hidden`);
		notification.classList.add(`notification--visible`);
	}, 0);

	notification.style.top = `${evt.layerY}px`;
	notification.style.left = `${evt.layerX}px`;

	el.appendChild(notification);
};

export const removeNotification = (evt) => {
	const container = evt.target;
	const notification = container.querySelector(`.notification`);

	notification.classList.remove(`notification--visible`);
	notification.classList.add(`notification--hidden`);

	setTimeout(function() {
		container.removeChild(notification);
	}, 600);
};