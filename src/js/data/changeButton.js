import settingsDefault from "./settingsDefault";

const changeButton = (settings = settingsDefault, container = BUTTON_CONTAINER) => {
	const button = container.querySelector(`a`);

	button.setAttribute(`href`, settings.href || settingsDefault.href);
	button.setAttribute(`target`, settings.target || settingsDefault.target);
	// size
	button.style.width = (settings.width || settingsDefault.width) + `px`;
	button.style.lineHeight = (settings.height || settingsDefault.height) + `px`;
	// font
	button.style.fontFamily = settings.fontFamily || settingsDefault.fontFamily;
	button.style.fontSize = (settings.fontSize || settingsDefault.fontSize) + `px`;
	button.style.color = settings.color || settingsDefault.color;
	button.style.backgroundColor = settings.bgColor || settingsDefault.bgColor;
};

export default changeButton;