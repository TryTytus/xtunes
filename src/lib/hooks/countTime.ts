export const countTime = (secounds: number) => {
	let time = new Date();
	time.setSeconds(0);
	time.setMinutes(0);

	time.setSeconds(secounds);
	return time.toISOString().substring(14, 19);
};
