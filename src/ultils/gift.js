import { data } from "../mock/data";

export const filterList = (list) => {
    return list.map((e, i) => {
        if (i === 0) {
            return { ...e }
        } return { ...e, canEdit: true, canDelete: true }
    })
}

export const getPrizeInfo = (list, prizeNumber) => {
    return list[prizeNumber];
}

export const bulkEditGiftList = (newList) => {
    localStorage.setItem('giftList', JSON.stringify(newList));
}

export const newPrizeList = (list, prizeNumber) => {
    const newList = list.map((element, index) => {
        if (index === prizeNumber) {
            return { ...element, quantity: element.quantity - 1 }
        } return { ...element }
    });
    bulkEditGiftList(newList);
    return newList;
}

export const getGiftList = () => {
    try {
        const list = JSON.parse(localStorage.getItem('giftList'));
        if (list && typeof list === 'object' && list.length && list.every(e => e.option)) {
            return [...list];
        } else {
            bulkEditGiftList([...data])
            return [...data];
        }
    } catch (error) {
        bulkEditGiftList([...data])
        return [...data];
    }
}

export const giftListAfterDelete = (list, name) => {
    const newList = list.filter(e => e.option !== name);
    bulkEditGiftList(newList);
    return newList;
}

