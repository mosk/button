import renderCode from './renderCode';

const BUTTON_CONTAINER = document.querySelector(`.result__preview .container > div`);
const BUTTON = BUTTON_CONTAINER.querySelector(`a`);

const changeButton = (settings) => {
	BUTTON.textContent = settings.text;

	BUTTON.setAttribute(`href`, settings.href);
	BUTTON.setAttribute(`target`, settings.target);

	BUTTON.style.width = `${settings.width}px`;
	BUTTON.style.lineHeight = `${settings.height}px`;

	BUTTON.style.fontFamily = settings.fontFamily;
	BUTTON.style.fontSize = `${settings.fontSize}px`;
	BUTTON.style.color = settings.fontColor;
	BUTTON.style.backgroundColor = settings.bgColor;

	renderCode();
};

export default changeButton;