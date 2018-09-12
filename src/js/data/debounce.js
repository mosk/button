const debounce = (f, time = 600) => {
	let timer = null;

	return (...args) => {
		const onComplete = () => {
			f.apply(this, args);
			timer = null;
		};

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(onComplete, time);
	};
};

export default debounce;