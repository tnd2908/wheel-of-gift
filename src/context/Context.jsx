import React, { createContext, useState } from "react";
import { unluckyDraw } from "../mock/data";

export const Context = createContext({
    prizeList: [unluckyDraw],
    setPrizeList: (newList) => null
});

export const ContextProvider = ({ children }) => {
    const [prizeList, setPrizeList] = useState([unluckyDraw]);

    const value = {
        prizeList,
        setPrizeList,
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}