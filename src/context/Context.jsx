import React, { createContext, useState } from "react";
import { getGiftList } from "../ultils/gift";
import { getRatio } from "../ultils/setting";

export const Context = createContext({
    giftList: [],
    setGiftList: (newList) => null,
    ratio: 0.5,
    setRatio: (percent) => null
});

export const ContextProvider = ({ children }) => {
    const [giftList, setGiftList] = useState(getGiftList());
    const [ratio, setRatio] = useState(getRatio());

    const value = {
        giftList,
        setGiftList,
        ratio,
        setRatio,
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}