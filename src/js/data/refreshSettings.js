import changeButton from './changeButton';

const refreshSettings = (event, settings) => {
	const propertyPrefix = `settings`;
	const propertyName = event.target.id.replace(propertyPrefix, ``);
	const firstLetter = propertyName[0];
	const property = propertyName.split(firstLetter).join(firstLetter.toLowerCase());

	settings[property] = event.target.value;

	// беспредел
	if (property === `fontfamily`) {
		settings.fontFamily = event.target.value;
	}

	console.log(`${propertyName}, ${property}`);

	changeButton(settings);
};

export default refreshSettings;