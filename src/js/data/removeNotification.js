const removeNotification = (evt) => {
	const container = evt.target;
	const notification = container.querySelector(`.notification`);

	notification.classList.remove(`notification--visible`);
	notification.classList.add(`notification--hidden`);
	setTimeout(function() {
		container.removeChild(notification);
	}, 1000);
};

export default removeNotification;

