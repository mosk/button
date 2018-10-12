import renderCode from './data/renderCode';
import changeButton from './data/changeButton';
import refreshSettings from './data/refreshSettings';
import debounce from './data/debounce';
import copyElementText from './data/copyElementText.js';

const BUTTON_SETTINGS = document.querySelector(`.settings`);
const BUTTON_CODE = document.querySelector(`.result__code .container`);
const INPUTS = BUTTON_SETTINGS.querySelectorAll(`input`);

const settingsDefault = {
	text: BUTTON_SETTINGS.querySelector(`#settingsText`).value,
	href: BUTTON_SETTINGS.querySelector(`#settingsLink`).value,
	target: `_blank`,
	width: BUTTON_SETTINGS.querySelector(`#settingsWidth`).value,
	height: BUTTON_SETTINGS.querySelector(`#settingsHeight`).value,
	fontFamily: BUTTON_SETTINGS.querySelector(`#settingsFontFamily`).value,
	fontSize: BUTTON_SETTINGS.querySelector(`#settingsFontSize`).value,
	color: BUTTON_SETTINGS.querySelector(`#settingsFontColor`).value,
	bgColor: BUTTON_SETTINGS.querySelector(`#settingsBgColor`).value
};

let settingsNew = {
	get target() {
		return this._target;
	},
	get text() {
		return this._text;
	},
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
	set target(val) {
		this._target = val;
	},
	set text(val) {
		this._text = val;
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

const refreshSettingsWithDebounce = debounce(refreshSettings, 600);

Array.from(INPUTS).map((input) => {
	input.addEventListener(`keyup`, (evt) => refreshSettingsWithDebounce(evt, settingsNew));
});

BUTTON_CODE.addEventListener(`click`, (evt) => {
	copyElementText(evt);
});

changeButton(settingsDefault);