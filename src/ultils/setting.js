import { DEFAULT_MESSAGE } from "../constant/message";
import bg from '../asset/bg.jpg';
export const MAX_DURATION = 15;

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
    const ratio = localStorage.getItem('ratio') || '50';
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

export const saveDuration = (newDuration) => {
    localStorage.setItem('duration', newDuration.toString());
}

export const getDuration = () => {
    const duration = localStorage.getItem('duration') || '3';
    try {
        const currentDuration = parseInt(duration, 10);
        if (currentDuration > 0 && currentDuration < MAX_DURATION) {
            saveDuration(currentDuration);
            return currentDuration
        }
        saveDuration('3');
        return 3;
    } catch (error) {
        localStorage.setItem('duration', '3');
        return 3;
    }
}

export const getBackground = () => {
    const background = localStorage.getItem('background') || bg;
    return background;
}