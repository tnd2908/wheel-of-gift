export const getPrizeInfo = (list, prizeNumber) => {
    return list[prizeNumber];
}

export const newPrizeList = (list, prizeNumber) => {
    return list.map((element, index) => {
        if (index === prizeNumber) {
            return { ...element, quantity: element.quantity - 1 }
        } return { ...element }
    });
}