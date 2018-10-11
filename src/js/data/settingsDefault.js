const settingsContainer = document.querySelector(`.factory .settings`); 

const settingsDefault = {
	text: settingsContainer.querySelector(`#settingsText`).value,
	href: settingsContainer.querySelector(`#settingsLink`).value,
	target: settingsContainer.querySelector(`#settingsTarget`).value,
	width: settingsContainer.querySelector(`#settingsWidth`).value,
	height: settingsContainer.querySelector(`#settingsHeight`).value,
	fontFamily: settingsContainer.querySelector(`#settingsFontFamily`).value,
	fontSize: settingsContainer.querySelector(`#settingsFontSize`).value,
	color: settingsContainer.querySelector(`#settingsFontColor`).value,
	bgColor: settingsContainer.querySelector(`#settingsBgColor`).value
};

export default settingsDefault;