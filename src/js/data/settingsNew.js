let settingsNew = {
	get target() {
		return this._target;
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

export default settingsNew;