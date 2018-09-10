import settingsDefault from './settingsDefault';
import renderCode from './renderCode';

const BUTTON_CONTAINER = document.querySelector(`.result__preview .container > div`);
const BUTTON = BUTTON_CONTAINER.querySelector(`a`);
const changeButton = (settings = settingsDefault, container = BUTTON_CONTAINER) => {

	BUTTON.setAttribute(`href`, settings.href || settingsDefault.href);
	BUTTON.setAttribute(`target`, settings.target || settingsDefault.target);

	BUTTON.style.width = (settings.width || settingsDefault.width) + `px`;
	BUTTON.style.lineHeight = (settings.height || settingsDefault.height) + `px`;

	BUTTON.style.fontFamily = settings.fontFamily || settingsDefault.fontFamily;
	BUTTON.style.fontSize = (settings.fontSize || settingsDefault.fontSize) + `px`;
	BUTTON.style.color = settings.fontColor || settingsDefault.color;
	BUTTON.style.backgroundColor = settings.bgColor || settingsDefault.bgColor;

	renderCode();
};

export default changeButton;