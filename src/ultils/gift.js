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
        if (index === prizeNumber && index !== 0) {
            return { ...element, quantity: element.quantity - 1, count: element?.count + 1 || 1 }
        }
        if (index === prizeNumber && index === 0) {
            return { ...element, count: element?.count + 1 || 1 };
        }
        return { ...element }
    });
    bulkEditGiftList(newList);
    return newList;
}

export const updatePrizeListCount = (list) => {
    const newList = list.map((e, i) => {
        if (i === 0) {
            return { ...e, count: e.count + 1 };
        } else return { ...e };
    })
    bulkEditGiftList(newList);
    return newList;
}

export const resetListCount = (list) => {
    const newList = list.map(e => ({ ...e, count: 0 }));
    bulkEditGiftList(newList);
    return newList;
}

export const getGiftList = () => {
    try {
        const list = JSON.parse(localStorage.getItem('giftList'));
        if (list && typeof list === 'object' && list.length && list.every(e => e.option && e.count !== undefined && e.background !== undefined && e.color !== undefined)) {
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

