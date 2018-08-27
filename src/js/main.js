const windowFactory = document.querySelector(`.factory`);

// окно настроек
const windowSettings = windowFactory.querySelector(`.settings`);
const settingsWidth = windowSettings.querySelector(`#settingsWidth`);
const settingsText = windowSettings.querySelector(`#settingsText`);
const settingsBgColor = windowSettings.querySelector(`#settingsBgColor`);

// окно результата
const windowResult = windowFactory.querySelector(`.result`);
const resultPreview = windowResult.querySelector(`.result__preview .container`);
const previewButton = resultPreview.querySelector(`div`);
const resultCode = windowResult.querySelector(`.result__code .container`);

const renderCode = (what, where) => {
	const code = what.innerHTML.trim(``).split(`&quot;`).join(`'`);
	console.log(code); // \n
	where.innerText = code;
};

// Ширина кнопки
settingsWidth.addEventListener(`change`, () => {
	previewButton.querySelector(`a`).style.width = `${settingsWidth.value}px`;
	renderCode(resultPreview, resultCode);
});

// текст кнопки
settingsText.addEventListener(`change`, () => {
	previewButton.querySelector(`a`).innerText = settingsText.value;
	renderCode(resultPreview, resultCode);
});

// фон кнопки
settingsBgColor.addEventListener(`change`, () => {
	previewButton.querySelector(`a`).style.backgroundColor = settingsBgColor.value;
	renderCode(resultPreview, resultCode);
});

renderCode(resultPreview, resultCode);

