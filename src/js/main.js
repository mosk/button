const BUTTON_CONTAINER = document.querySelector(`.result__preview .container > div`);
const BUTTON_PREVIEW = document.querySelector(`.result__preview .container`);
const BUTTON_CODE = document.querySelector(`.result__code .container`);
const BUTTON_SETTINGS = document.querySelector(`.settings`);

const INPUT_WIDTH = BUTTON_SETTINGS.querySelector(`#settingsWidth`);
const INPUT_HEIGHT = BUTTON_SETTINGS.querySelector(`#settingsHeight`);
const INPUT_FONT_FAMILY = BUTTON_SETTINGS.querySelector(`#settingsFontFamily`);
const INPUT_FONT_SIZE = BUTTON_SETTINGS.querySelector(`#settingsFontSize`);
const INPUT_FONT_COLOR = BUTTON_SETTINGS.querySelector(`#settingsFontColor`);
const INPUT_FONT_WEIGHT = BUTTON_SETTINGS.querySelector(`#settingsFontWeight`);
const INPUT_BG_COLOR = BUTTON_SETTINGS.querySelector(`#settingsBgColor`);

let settingsNew = {
	_width: INPUT_WIDTH.value,
	_height: INPUT_HEIGHT.value,
	_fontFamily: INPUT_FONT_FAMILY.value,
	_fontSize: INPUT_FONT_SIZE.value,
	_fontColor: INPUT_FONT_COLOR.value,
	_fontWeight: INPUT_FONT_WEIGHT.value,
	_bgColor: INPUT_BG_COLOR.value,
	get width() {
		return this._width;
	},
	set width(width) {
		this._width = width;
	}
};

const settingsDefault = {
	href: `#`,
	target: `_blank`,
	width: `240`,
	height: `32`,
	fontFamily: `'Segoe UI', 'Helvetica Neue', sans-serif`,
	fontSize: `16`,
	color: `#FFFFFF`,
	bgColor: `red`
};

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

const renderCode = (what, where) => {
	const code = what.innerHTML.trim(``).split(`&quot;`).join(`'`);
	where.innerText = code;
};

INPUT_WIDTH.addEventListener(`change`, (evt) => {
	const propertyPrefix = `settings`;
	const property = evt.target.id.replace(propertyPrefix, ``).toLowerCase();
	settingsNew[property] = evt.target.value;

	console.log(evt.target.value);
	console.log(property);
});

changeButton();
renderCode(BUTTON_PREVIEW, BUTTON_CODE);

// const windowFactory = document.querySelector(`.factory`);

// // окно настроек
// const windowSettings = windowFactory.querySelector(`.settings`);
// const settingsWidth = windowSettings.querySelector(`#settingsWidth`);
// const settingsText = windowSettings.querySelector(`#settingsText`);
// const settingsBgColor = windowSettings.querySelector(`#settingsBgColor`);

// // окно результата
// const windowResult = windowFactory.querySelector(`.result`);
// const previewButton = resultPreview.querySelector(`div`);

// // Ширина кнопки
// settingsWidth.addEventListener(`change`, () => {
// 	previewButton.querySelector(`a`).style.width = `${settingsWidth.value}px`;
// 	renderCode(resultPreview, resultCode);
// });

// // текст кнопки
// settingsText.addEventListener(`change`, () => {
// 	previewButton.querySelector(`a`).innerText = settingsText.value;
// 	renderCode(resultPreview, resultCode);
// });

// // фон кнопки
// settingsBgColor.addEventListener(`change`, () => {
// 	previewButton.querySelector(`a`).style.backgroundColor = settingsBgColor.value;
// 	renderCode(resultPreview, resultCode);
// });
