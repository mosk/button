const buttonContainer = document.querySelector(`.result__preview .container > div`);
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

const changeButton = (settings = settingsDefault, container = buttonContainer) => {
	const button = container.querySelector(`a`);

	button.setAttribute(`href`, settings.href || settingsDefault.href);
	button.setAttribute(`target`, settings.target || settingsDefault.target);
	button.style.width = settings.width || settingsDefault.width;
	button.style.height = settings.height || settingsDefault.height;
};

changeButton();

// const windowFactory = document.querySelector(`.factory`);

// // окно настроек
// const windowSettings = windowFactory.querySelector(`.settings`);
// const settingsWidth = windowSettings.querySelector(`#settingsWidth`);
// const settingsText = windowSettings.querySelector(`#settingsText`);
// const settingsBgColor = windowSettings.querySelector(`#settingsBgColor`);

// // окно результата
// const windowResult = windowFactory.querySelector(`.result`);
// const resultPreview = windowResult.querySelector(`.result__preview .container`);
// const previewButton = resultPreview.querySelector(`div`);
// const resultCode = windowResult.querySelector(`.result__code .container`);

// const renderCode = (what, where) => {
// 	const code = what.innerHTML.trim(``).split(`&quot;`).join(`'`);
// 	console.log(code); // \n
// 	where.innerText = code;
// };

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

// renderCode(resultPreview, resultCode);

