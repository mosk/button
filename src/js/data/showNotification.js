const showNotification = (evt, text = `Message`) => {
	const notification = document.createElement(`span`);
	const el = evt.target;
	console.log(evt);
	const Container = {
		WIDTH: el.offsetWidth,
		HEIGHT: el.offsetHeight
	};
	const Position = {
		X: evt.pageX,
		Y: evt.pageY
	};
	notification.textContent = `${text} ${Position.X - Container.WIDTH}, ${Position.Y - Container.HEIGHT}`;
	notification.classList.add(`notification`, `notification--hidden`);
	setTimeout(function() {
		notification.classList.remove(`notification--hidden`);
		notification.classList.add(`notification--visible`);
	}, 0);
	notification.style.top = Position.X - Container.WIDTH + `px`;
	notification.style.left = Position.Y - Container.HEIGHT + `px`;
	el.appendChild(notification);
};

export default showNotification;