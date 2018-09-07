const renderCode = (what, where) => {
	const code = what.innerHTML.trim(``).split(`&quot;`).join(`'`);
	where.innerText = code;
};

export default renderCode;