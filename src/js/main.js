const BUTTON_CONTAINER = document.querySelector(`.result__preview .container > div`);
const BUTTON_PREVIEW = document.querySelector(`.result__preview .container`);
const BUTTON_CODE = document.querySelector(`.result__code .container`);
const BUTTON_SETTINGS = document.querySelector(`.settings`);

const INPUTS = BUTTON_SETTINGS.querySelectorAll(`input`);

const INPUT_WIDTH = BUTTON_SETTINGS.querySelector(`#settingsWidth`);
const INPUT_HEIGHT = BUTTON_SETTINGS.querySelector(`#settingsHeight`);
const INPUT_FONT_FAMILY = BUTTON_SETTINGS.querySelector(`#settingsFontFamily`);
const INPUT_FONT_SIZE = BUTTON_SETTINGS.querySelector(`#settingsFontSize`);
const INPUT_FONT_COLOR = BUTTON_SETTINGS.querySelector(`#settingsFontColor`);
const INPUT_FONT_WEIGHT = BUTTON_SETTINGS.querySelector(`#settingsFontWeight`);
const INPUT_BG_COLOR = BUTTON_SETTINGS.querySelector(`#settingsBgColor`);

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

const refreshSettings = (event, settings) => {
	const propertyPrefix = `settings`;
	const property = event.target.id.replace(propertyPrefix, ``).toLowerCase();

	settings[property] = event.target.value;
	console.log(settings[property]);
};

let settingsNew = {
	get width() {
		return this._width;
	},
	get height() {
		return this._height;
	},
	get fontFamily() {
		return this._fontFamily;
	},
	get fontSize() {
		return this._fontSize;
	},
	get fontColor() {
		return this._fontColor;
	},
	get fontWeight() {
		return this._fontWeight;
	},
	get bgColor() {
		return this._bgColor;
	},
	set width(val) {
		this._width = val;
	},
	set height(val) {
		this._height = val;
	},
	set fontFamily(val) {
		this._fontFamily = val;
	},
	set fontSize(val) {
		this._fontSize = val;
	},
	set fontColor(val) {
		this._fontColor = val;
	},
	set fontWeight(val) {
		this._fontWeight = val;
	},
	set bgColor(val) {
		this._bgColor = val;
	}
};

// обработчик события на все инпуты
Array.from(INPUTS).map((input) => {
	input.addEventListener(`change`, (evt) => refreshSettings(evt, settingsNew));
});

changeButton();
renderCode(BUTTON_PREVIEW, BUTTON_CODE);