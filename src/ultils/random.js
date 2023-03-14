const generateRandom = (min = 1, max = 8) => {
    let difference = max - min;
    let random = Math.random();

    random = Math.round(random * difference);
    random = random + min;

    return random;
}

export const getRandomGift = (giftList) => {
  const num = Math.random();
    if (num < 0.5) {
      return 0;
    } return generateRandom(1, giftList.length);
}