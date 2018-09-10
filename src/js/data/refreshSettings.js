import changeButton from './changeButton';

const refreshSettings = (event, settings) => {
	const propertyPrefix = `settings`;
	const propertyName = event.target.id.replace(propertyPrefix, ``);
	const firstLetter = propertyName[0];
	const property = propertyName.split(firstLetter).join(firstLetter.toLowerCase());

	settings[property] = event.target.value;

	changeButton(settings);
};

export default refreshSettings;