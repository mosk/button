const BUTTON_PREVIEW = document.querySelector(`.result__preview .container`);
const BUTTON_CODE = document.querySelector(`.result__code .container`);

const renderCode = (what = BUTTON_PREVIEW, where = BUTTON_CODE) => {
	const code = what.innerHTML.trim(``).split(`&quot;`).join(`'`).replace(/\t+/g, ``);
	where.innerText = code;
};

export default renderCode;