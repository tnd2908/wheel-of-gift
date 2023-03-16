import { DEFAULT_MESSAGE } from "../constant/message";

export const getMessage = () => {
    const msg = localStorage.getItem('msg');
    if (msg) {
        return msg;
    } return DEFAULT_MESSAGE;
}

export const saveNewRatio = (newRatio) => {
    localStorage.setItem('ratio', newRatio.toString());
}

export const getRatio = () => {
    const ratio = localStorage.getItem('ratio');
    try {
        const currentRatio = parseInt(ratio, 10)
        if (ratio && (currentRatio >= 0 && currentRatio <= 100 && currentRatio % 10 === 0)) {
            saveNewRatio(currentRatio);
            return currentRatio;
        }
        localStorage.setItem('ratio', '50');
        return 50
    } catch (error) {
        localStorage.setItem('ratio', '50');
        return 50
    }
}