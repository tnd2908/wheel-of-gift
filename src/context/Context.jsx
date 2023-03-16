import React, { createContext, useState } from "react";
import { getGiftList } from "../ultils/gift";
import { getDuration, getRatio } from "../ultils/setting";

export const Context = createContext({
    giftList: [],
    setGiftList: (newList) => null,
    ratio: 0.5,
    setRatio: (percent) => null,
    duration: 0.1,
    setDuration: (duration) => null,
});

export const ContextProvider = ({ children }) => {
    const [giftList, setGiftList] = useState(getGiftList());
    const [ratio, setRatio] = useState(getRatio());
    const [duration, setDuration] = useState(getDuration());

    const value = {
        giftList,
        setGiftList,
        ratio,
        setRatio,
        duration,
        setDuration,
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}