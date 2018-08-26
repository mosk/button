const button = {
	text: `Новая кнопка`,
	fontFamily: `'Georgia', serif`,
	fontSize: `16`,
	fontWeight: `400`,
	color: `green`,
	width: `300`,
	height: `50`,
	bgColor: `red`
};

const windowFactory = document.querySelector(`.factory`);
const windowResult = windowFactory.querySelector(`.result`);
const resultPreview = windowResult.querySelector(`.result__preview .container`);
const resultCode = windowResult.querySelector(`.result__code .container`);

const renderCode = (what, where) => {
	where.innerText = what.innerHTML;
};

renderCode(resultPreview, resultCode);