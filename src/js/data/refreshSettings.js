import changeButton from './changeButton';

const refreshSettings = (event, settings) => {
	const propertyPrefix = `settings`;
	let propertyName = event.target.id.replace(propertyPrefix, ``);
	let firstLetter = propertyName[0].toLowerCase();
	let propertyWithoutFirstLetter = propertyName.slice(1, propertyName.length);

	let property = firstLetter + propertyWithoutFirstLetter;

	settings[property] = event.target.value;

	console.log(`${propertyName}, ${property}`);

	changeButton(settings);
};

export default refreshSettings;