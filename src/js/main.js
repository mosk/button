import settingsDefault from './data/settingsDefault';
import renderCode from './data/renderCode';
import changeButton from './data/changeButton';
import refreshSettings from './data/refreshSettings';
import debounce from './data/debounce';

const BUTTON_SETTINGS = document.querySelector(`.settings`);
const INPUTS = BUTTON_SETTINGS.querySelectorAll(`input`);

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

const refreshSettingsWithDebounce = debounce(refreshSettings, 600);

Array.from(INPUTS).map((input) => {
	input.addEventListener(`keyup`, (evt) => refreshSettingsWithDebounce(evt, settingsNew));
});

changeButton();