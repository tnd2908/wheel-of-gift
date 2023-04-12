import { getRatio } from "./setting";

const generateRandom = (min = 1, max) => {
	let difference = max - min;
	let random = Math.random();

	random = Math.floor(random * difference);
	random = random + min;

	return random;
}

export const getRandomGift = (giftList) => {
	const num = Math.random();
	const ratio = getRatio();
	if (num < ratio / 100) {
		return 0;
	} return generateRandom(1, giftList.length);
}

export const countingList = (giftList) => {
	const result = {};
	giftList.forEach(e => {
		result[e.option] = 0;
	})
	return result;
}